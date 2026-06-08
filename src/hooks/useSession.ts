import { useState, useCallback, useMemo, useEffect } from 'react';
import { Word } from '../data/words';
import { wordsService } from '../services/wordsService';
import { progressService, WordProgress } from '../services/progressService';

// ===========================
// Constants
// ===========================
const INITIAL_ACTIVE = 10;
const MAX_ACTIVE = 30;
const CORRECT_TO_LEVEL_UP = 3;
const MAX_LEVEL = 5;

// ===========================
// Types
// ===========================
export type WordProgressExtended = WordProgress & {
  state: 'inactive' | 'active' | 'mastered';
};

// ===========================
// Hook
// ===========================
export function useSession() {
  useEffect(() => {
    wordsService.getAll().then((words) => {
      console.log('Anzahl:', words.length);
      console.log('Erstes Wort:', words[0]);
      console.log('Letztes Wort:', words[words.length - 1]);
    });
  }, []);
  
  const [allWords, setAllWords] = useState<Word[]>([]);
  const [progress, setProgress] = useState<Record<string, WordProgressExtended>>({});
  const [loaded, setLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ── Load on mount ─────────────────────────────────────────────
  useEffect(() => {
    async function init() {
      // Wörter laden via Service
      const words = await wordsService.getAll();
      setAllWords(words);

      // Fortschritt laden via Service
      const raw = await progressService.load();
      const extended: Record<string, WordProgressExtended> = {};

      Object.entries(raw).forEach(([id, wp]) => {
        extended[id] = {
          ...wp,
          state: (wp as any).state ?? 'inactive',
        };
      });

      // Erste 10 Wörter aktivieren wenn noch kein Fortschritt
      const hasAnyActive = Object.values(extended).some(
        (wp) => wp.state === 'active'
      );

      if (!hasAnyActive) {
        words.slice(0, INITIAL_ACTIVE).forEach((word) => {
          extended[word.id] = {
            ...progressService.getDefault(word.id),
            state: 'active',
          };
        });
      }

      setProgress(extended);
      setLoaded(true);
    }

    init();
  }, []);

  // ── Derived state ─────────────────────────────────────────────
  const activeWordIds = useMemo(
    () => Object.values(progress)
      .filter((wp) => wp.state === 'active')
      .map((wp) => wp.wordId),
    [progress]
  );

  const masteredWordIds = useMemo(
    () => Object.values(progress)
      .filter((wp) => wp.state === 'mastered')
      .map((wp) => wp.wordId),
    [progress]
  );

  const inactiveCount = useMemo(
    () => allWords.filter((w) => !progress[w.id] || progress[w.id].state === 'inactive').length,
    [progress, allWords]
  );

  const currentWordId = activeWordIds[currentIndex % Math.max(activeWordIds.length, 1)];
  const currentWord = allWords.find((w) => w.id === currentWordId);
  const currentProgress = currentWordId ? progress[currentWordId] : null;

  // ── Internal: update und speichern ───────────────────────────
  const updateProgress = useCallback(
    async (wordId: string, updater: (wp: WordProgressExtended) => WordProgressExtended) => {
      setProgress((prev) => {
        const current = prev[wordId] ?? {
          ...progressService.getDefault(wordId),
          state: 'active' as const,
        };
        const updated = updater(current);
        const next = { ...prev, [wordId]: updated };
        progressService.save(next); // via Service speichern
        return next;
      });
    },
    []
  );

  // ── Internal: nächstes Wort aktivieren ───────────────────────
  const activateNextWord = useCallback(() => {
    setProgress((prev) => {
      const activeCount = Object.values(prev)
        .filter((wp) => wp.state === 'active').length;
      if (activeCount >= MAX_ACTIVE) return prev;

      const nextWord = allWords.find(
        (w) => !prev[w.id] || prev[w.id].state === 'inactive'
      );
      if (!nextWord) return prev;

      const next = {
        ...prev,
        [nextWord.id]: {
          ...progressService.getDefault(nextWord.id),
          state: 'active' as const,
        },
      };
      progressService.save(next); // via Service speichern
      return next;
    });
  }, [allWords]);

  const nextCard = useCallback(() => {
    setCurrentIndex((i) => i + 1);
  }, []);

  // ── Answer handlers ──────────────────────────────────────────
  const handleCorrect = useCallback(async () => {
    if (!currentWordId) return;

    const wp = progress[currentWordId];
    const levelUp = wp && (wp.correctCount + 1) >= CORRECT_TO_LEVEL_UP;

    await updateProgress(currentWordId, (wp) =>
      progressService.markCorrect(wp) // via Service
    );

    if (levelUp) activateNextWord();
    nextCard();
  }, [currentWordId, progress, updateProgress, activateNextWord, nextCard]);

  const handleWrong = useCallback(async () => {
    if (!currentWordId) return;
    await updateProgress(currentWordId, (wp) =>
      progressService.markWrong(wp) // via Service
    );
    nextCard();
  }, [currentWordId, updateProgress, nextCard]);

  const handleFastForward = useCallback(async () => {
    if (!currentWordId) return;
    await updateProgress(currentWordId, (wp) =>
      progressService.markFastForward(wp) // via Service
    );
    activateNextWord();
    nextCard();
  }, [currentWordId, updateProgress, activateNextWord, nextCard]);

  const handleDifficult = useCallback(async () => {
    if (!currentWordId) return;
    await updateProgress(currentWordId, (wp) =>
      progressService.markDifficult(wp) // via Service
    );
    nextCard();
  }, [currentWordId, updateProgress, nextCard]);

  // ── Distraktoren ─────────────────────────────────────────────
  const getDistractors = useCallback(
    (wordId: string, count = 2): string[] => {
      const active = activeWordIds.filter((id) => id !== wordId);
      const shuffled = [...active].sort(() => Math.random() - 0.5);
      return shuffled
        .slice(0, count)
        .map((id) => allWords.find((w) => w.id === id)?.target ?? '');
    },
    [activeWordIds, allWords]
  );

  // ── Return ────────────────────────────────────────────────────
  return {
    loaded,
    currentWord,
    currentProgress,
    activeCount: activeWordIds.length,
    masteredCount: masteredWordIds.length,
    inactiveCount,
    totalWords: allWords.length,
    correct: handleCorrect,
    wrong: handleWrong,
    fastForward: handleFastForward,
    difficult: handleDifficult,
    getDistractors,
    _progress: progress,
    _activeWordIds: activeWordIds,
  };
}