import { useState, useEffect, useRef, useCallback } from "react";
import { progressService, WordProgress } from "@/services/progressService";
import { progressRepo, wordsRepo } from "@/repositories";
import { getRandomIndex, buildAnswerArray } from "@/utils/random";
import { MultiData } from "@/types/session";
import { Word } from "@/data/words";

// In-memory cache — survives re-renders, cleared on app restart
const cache = {
  progress: null as Record<string, WordProgress> | null,
  words: null as Word[] | null,
  wordMap: null as Map<string, Word> | null,
};

async function ensureLoaded() {
  if (!cache.progress) {
    cache.progress = await progressRepo.load();
  }
  if (!cache.words) {
    cache.words = await wordsRepo.getAll();
    cache.wordMap = new Map(cache.words.map(w => [w.id, w]));

    // Seed initial active words if needed
    const active = progressService.getActive(cache.progress!);
    if (active.length < 10) {
      const starter = cache.words.slice(0, 10);
      starter.forEach(w => {
        cache.progress = progressService.activate(cache.progress!, w.id);
      });
      progressRepo.save(cache.progress!); // fire-and-forget
    }
  }
}

export function useSession() {
  const [data, setData] = useState<MultiData | null>(null);
  const [activeCount, setActiveCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    runSession();
    return () => { isMounted.current = false; };
  }, []);

  const runSession = useCallback(async () => {
    try {
      await ensureLoaded();

      const progress = cache.progress!;
      const wordMap = cache.wordMap!;
      const active = progressService.getActive(progress);

      if (active.length < 3) {
        console.warn('[useSession] Not enough active words.');
        return;
      }

      // Build activeData directly from map — O(1) per lookup
      const activeData = active
        .map(wp => wordMap.get(wp.wordId))
        .filter((w): w is Word => !!w);

      if (activeData.length < 3) return;

      const randomNumber = getRandomIndex(activeData.length);

      const chosenWord = activeData[randomNumber.correct];
      const chosenProgress = active.find(wp => wp.wordId === chosenWord.id)!;
      const sentenceIndex = chosenProgress.sentenceIndex % chosenWord.sentences.length;

      const answerArray = buildAnswerArray(
        chosenWord,
        activeData[randomNumber.distractor1],
        activeData[randomNumber.distractor2],
      );

      if (isMounted.current) {
        setActiveCount(activeData.length);
        setData({
          word: chosenWord,
          sentence: chosenWord.sentences[sentenceIndex],
          progress: chosenProgress,
          answerArray,
        });
      }
    } catch (error) {
      console.error('[useSession] Error:', error);
    }
  }, []);

  const MAX_STACK = 30;

  const applyAndAdvance = useCallback((
    updater: (wp: WordProgress) => WordProgress
  ) => {
    if (!data || !cache.progress) return;

    const oldWp = cache.progress[data.progress.wordId];
    const updated = updater(oldWp);
    cache.progress = { ...cache.progress, [updated.wordId]: updated };

    // Add a new word whenever a level up or mastered event happened
    const didLevelUp = updated.level > oldWp.level || updated.state === 'mastered';
    if (didLevelUp && cache.words) {
      const activeCount = progressService.getActive(cache.progress).length;
      if (activeCount < MAX_STACK) {
        const inProgress = new Set(Object.keys(cache.progress));
        const nextWord = cache.words.find(w => !inProgress.has(w.id));
        if (nextWord) {
          cache.progress = progressService.activate(cache.progress, nextWord.id);
        }
      }
    }

    progressRepo.save(cache.progress);
    runSession();
  }, [data, runSession]);

  const swipeRight = useCallback(() => applyAndAdvance(progressService.markCorrect),     [applyAndAdvance]);
  const swipeUp    = useCallback(() => applyAndAdvance(progressService.markFastForward), [applyAndAdvance]);
  const swipeLeft  = useCallback(() => applyAndAdvance(progressService.markWrong),       [applyAndAdvance]);
  const swipeDown  = useCallback(() => applyAndAdvance(progressService.markDifficult),   [applyAndAdvance]);

  return { runSession, swipeRight, swipeUp, swipeLeft, swipeDown, data, activeCount };
}
