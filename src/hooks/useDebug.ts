import { wordsService } from "@/services/wordsService";
import { useState } from "react";

export function useDebug() {
  const [ wordCount, setWordCount ] = useState<number>(0);
  async function runDebug() {
    console.log('[useDebug] start');

    const words = await wordsService.getAll();
    console.log('[useDebug] Anzahl Wörter:', words.length);
    setWordCount(words.length);

  }

  return { runDebug, wordCount };
}