import { useState, useEffect, useCallback } from 'react';
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

export function useProgress() {
  const [progress, setProgress] = useState<Record<string, WordProgress>>({});
  const [loaded, setLoaded] = useState(false);

  // Beim Start laden
  useEffect(() => {
    loadProgress().then((p) => {
      setProgress(p);
      setLoaded(true);
    });
  }, []);

  // Intern: progress updaten und speichern
  const update = useCallback(
    async (wordId: string, updater: (wp: WordProgress) => WordProgress) => {
      setProgress((prev) => {
        const current = getWordProgress(prev, wordId);
        const updated = updater(current);
        const next = { ...prev, [wordId]: updated };
        saveProgress(next); // async aber fire-and-forget ist ok
        return next;
      });
    },
    []
  );

  // Fortschritt eines Wortes holen
  const getProgress = useCallback(
    (wordId: string) => {
      return getWordProgress(progress, wordId);
    },
    [progress]
  );

  return {
    loaded,
    getProgress,
    correct:      (wordId: string) => update(wordId, markCorrect),
    wrong:        (wordId: string) => update(wordId, markWrong),
    fastForward:  (wordId: string) => update(wordId, markFastForward),
    difficult:    (wordId: string) => update(wordId, markDifficult),
  };
}