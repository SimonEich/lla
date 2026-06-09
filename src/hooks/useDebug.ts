import { wordsService } from "@/services/wordsService";
import { loadProgress, saveProgress } from "@/store/progress";
import { useState } from "react";

export function useDebug() {
  const [wordCount, setWordCount] = useState(0);
  const [firstWord, setFirstWord] = useState('');
  const [count, setCount] = useState(0);

  async function runDebug() {
    // words
    const words = await wordsService.getAll();
    setWordCount(words.length);
    setFirstWord(words[0].native);
    console.log('[useDebug] Anzahl Wörter:', words.length);
    console.log('[useDebug] First Word', words[0].sentences[0]);

    // progress – use first word id as key
    const id = words[0].id;
    const progress = await loadProgress();
    const current = progress[id] ?? 0;
    const updated = { ...progress, [id]: current + 1 };
    await saveProgress(updated);
    setCount(updated[id]);
    console.log('[useDebug] Progress:', updated);
  }

  return { runDebug, data: { wordCount, firstWord, count } };
}