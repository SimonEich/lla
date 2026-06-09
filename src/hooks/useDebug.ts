import { Word } from "@/data/words";
import { wordsService } from "@/services/wordsService";
import { useState } from "react";

export function useDebug() {
  const [ wordCount, setWordCount ] = useState<number>(0);
  const [ firstWord, setFirstWord ] = useState('');
  async function runDebug() {
    console.log('[useDebug] start');

    const words = await wordsService.getAll();
    console.log('[useDebug] Anzahl Wörter:', words.length);
    console.log('[useDebug] First Word', words[0].sentences[0]);
    setWordCount(words.length);
    setFirstWord(words[0].native);

  }

  return { runDebug, wordCount, firstWord };
}