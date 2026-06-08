import { wordsService } from "@/services/wordsService";

export function useDebug() {
  async function runDebug() {
    console.log('[useDebug] start');

    const words = await wordsService.getAll();
    console.log('[useDebug] Anzahl Wörter:', words.length);
  }

  return { runDebug };
}