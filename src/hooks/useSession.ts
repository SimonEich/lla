import { useState, useEffect } from "react";
import { progressService } from "@/services/progressService";
import { wordsService } from "@/services/wordsService";
import { getRandomIndex } from "@/utils/random";
import { MultiData } from "@/types/session";
import { initProgress } from "@/utils/initProgress";

export function useSession() {
  const [data, setData] = useState<MultiData | null>(null);

  useEffect(() => {
    runSession();
  }, []);

  async function runSession() {
    try {
      await initProgress();

      const progress = await progressService.load();
      const active = progressService.getActive(progress);

      if (!active || active.length === 0) {
        console.warn('[useSession] No active words found.');
        return;
      }

      const activeIDs = active.map(wp => wp.wordId);
      const numActive = active.length;
      const activeData = await wordsService.getByIds(activeIDs);

      const randomNumber = getRandomIndex(numActive);
      console.log(randomNumber);

      const chosenWord = activeData[randomNumber.correct];
      const chosenProgress = active[randomNumber.correct];

      if (!chosenWord || !chosenProgress) {
        console.error('[useSession] Could not resolve chosen word.');
        return;
      }
    } catch {
      console.log('🦖');
    }
  }

  return { runSession, data };
}
