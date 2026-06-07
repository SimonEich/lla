import { useState, useCallback, useMemo } from 'react';
import { words as allWords } from '../data/words';
import {
  loadProgress,
  saveProgress,
  getWordProgress,
  markCorrect,
  markWrong,
  markFastForward,
  markDifficult,
  WordProgress,
} from '../store/progress';
import { useEffect } from 'react';

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
export type SessionWord = {
  wordId: string;
  level: number;
  correctCount: number;
  sentenceIndex: number;
  difficult: boolean;
  state: 'inactive' | 'active' | 'mastered';
};

export type SessionState = {
  activeWords: string[];       // wordIds currently in the stack
  masteredWords: string[];     // wordIds completed
  inactiveWords: string[];     // wordIds not yet introduced
};

// ===========================
// Extend WordProgress with state
// ===========================
export type WordProgressExtended = WordProgress & {
  state: 'inactive' | 'active' | 'mastered';
};

// ===========================
// Hook
// ===========================
export function useSession() {
  const [progress, setProgress] = useState<Record<string, WordProgressExtended>>({});
  const [loaded, setLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ── Load from AsyncStorage on mount ──────────────────────────
  useEffect(() => {
    loadProgress().then((raw) => {
      const extended: Record<string, WordProgressExtended> = {};

      // Convert existing progress to extended type
      Object.entries(raw).forEach(([id, wp]) => {
        extended[id] = {
          ...wp,
          state: (wp as any).state ?? 'inactive',
        };
      });

      // Initialize first 10 words as active if no progress exists
      const hasAnyActive = Object.values(extended).some(
        (wp) => wp.state === 'active'
      );

      if (!hasAnyActive) {
        allWords.slice(0, INITIAL_ACTIVE).forEach((word) => {
          extended[word.id] = {
            wordId: word.id,
            level: 1,
            correctCount: 0,
            sentenceIndex: 0,
            difficult: false,
            state: 'active',
          };
        });
      }

      setProgress(extended);
      setLoaded(true);
    });
  }, []);

  // ── Derived state ─────────────────────────────────────────────
  const activeWordIds = useMemo(
    () => Object.values(progress).filter((wp) => wp.state === 'active').map((wp) => wp.wordId),
    [progress]
  );

  const masteredWordIds = useMemo(
    () => Object.values(progress).filter((wp) => wp.state === 'mastered').map((wp) => wp.wordId),
    [progress]
  );

  const inactiveCount = useMemo(
    () => allWords.filter((w) => !progress[w.id] || progress[w.id].state === 'inactive').length,
    [progress]
  );

  // Current word being studied
  const currentWordId = activeWordIds[currentIndex % Math.max(activeWordIds.length, 1)];
  const currentWord = allWords.find((w) => w.id === currentWordId);
  const currentProgress = currentWordId ? progress[currentWordId] : null;

  // ── Internal: save and update progress ───────────────────────
  const updateProgress = useCallback(
    async (wordId: string, updater: (wp: WordProgressExtended) => WordProgressExtended) => {
      setProgress((prev) => {
        const current = prev[wordId] ?? {
          wordId,
          level: 1,
          correctCount: 0,
          sentenceIndex: 0,
          difficult: false,
          state: 'active' as const,
        };
        const updated = updater(current);
        const next = { ...prev, [wordId]: updated };
        saveProgress(next);
        return next;
      });
    },
    []
  );

  // ── Internal: activate next inactive word ────────────────────
  const activateNextWord = useCallback(() => {
    setProgress((prev) => {
      const activeCount = Object.values(prev).filter((wp) => wp.state === 'active').length;
      if (activeCount >= MAX_ACTIVE) return prev;

      const nextWord = allWords.find(
        (w) => !prev[w.id] || prev[w.id].state === 'inactive'
      );
      if (!nextWord) return prev;

      const next = {
        ...prev,
        [nextWord.id]: {
          wordId: nextWord.id,
          level: 1,
          correctCount: 0,
          sentenceIndex: 0,
          difficult: false,
          state: 'active' as const,
        },
      };
      saveProgress(next);
      return next;
    });
  }, []);

  // ── Internal: advance to next card ───────────────────────────
  const nextCard = useCallback(() => {
    setCurrentIndex((i) => i + 1);
  }, []);

  // ── Answer handlers ──────────────────────────────────────────

  // Correct answer
  const handleCorrect = useCallback(async () => {
    if (!currentWordId) return;

    await updateProgress(currentWordId, (wp) => {
      const newCorrectCount = wp.correctCount + 1;
      const levelUp = newCorrectCount >= CORRECT_TO_LEVEL_UP;
      const newLevel = levelUp ? wp.level + 1 : wp.level;
      const mastered = newLevel > MAX_LEVEL;

      return {
        ...wp,
        correctCount: levelUp ? 0 : newCorrectCount,
        level: mastered ? MAX_LEVEL : newLevel,
        sentenceIndex: wp.sentenceIndex + 1,
        state: mastered ? 'mastered' : 'active',
      };
    });

    // Check if word was mastered or leveled up → add new word
    const wp = progress[currentWordId];
    if (wp) {
      const newCorrectCount = wp.correctCount + 1;
      const levelUp = newCorrectCount >= CORRECT_TO_LEVEL_UP;
      if (levelUp) {
        activateNextWord();
      }
    }

    nextCard();
  }, [currentWordId, progress, updateProgress, activateNextWord, nextCard]);

  // Wrong answer
  const handleWrong = useCallback(async () => {
    if (!currentWordId) return;
    await updateProgress(currentWordId, (wp) => ({
      ...markWrong(wp),
      state: wp.state,
    }));
    nextCard();
  }, [currentWordId, updateProgress, nextCard]);

  // Swipe up: fast forward to next level
  const handleFastForward = useCallback(async () => {
    if (!currentWordId) return;
    await updateProgress(currentWordId, (wp) => {
      const newLevel = wp.level + 1;
      const mastered = newLevel > MAX_LEVEL;
      return {
        ...wp,
        level: mastered ? MAX_LEVEL : newLevel,
        correctCount: 0,
        sentenceIndex: wp.sentenceIndex + 1,
        state: mastered ? 'mastered' : 'active',
      };
    });
    activateNextWord();
    nextCard();
  }, [currentWordId, updateProgress, activateNextWord, nextCard]);

  // Swipe down: mark difficult
  const handleDifficult = useCallback(async () => {
    if (!currentWordId) return;
    await updateProgress(currentWordId, (wp) => ({
      ...markDifficult(wp),
      state: wp.state,
    }));
    nextCard();
  }, [currentWordId, updateProgress, nextCard]);

  // ── Distractors for Multiple Choice ──────────────────────────
  const getDistractors = useCallback(
    (wordId: string, count = 2): string[] => {
      const active = activeWordIds.filter((id) => id !== wordId);
      const shuffled = [...active].sort(() => Math.random() - 0.5);
      return shuffled
        .slice(0, count)
        .map((id) => allWords.find((w) => w.id === id)?.target ?? '');
    },
    [activeWordIds]
  );

  // ── Return ────────────────────────────────────────────────────
  return {
    loaded,

    // Current card
    currentWord,
    currentProgress,

    // Stats
    activeCount: activeWordIds.length,
    masteredCount: masteredWordIds.length,
    inactiveCount,
    totalWords: allWords.length,

    // Actions
    correct: handleCorrect,
    wrong: handleWrong,
    fastForward: handleFastForward,
    difficult: handleDifficult,

    // Multiple choice helpers
    getDistractors,

    // Debug (remove in production)
    _progress: progress,
    _activeWordIds: activeWordIds,
  };
}