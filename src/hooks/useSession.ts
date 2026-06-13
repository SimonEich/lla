import { useState } from "react";
import { progressService } from "@/services/progressService";
import { wordsService } from "@/services/wordsService";

export function useSession() {
  const [countActive, setCountActive] = useState(0);

  async function runSession() {
    // 1. load progress first
    const progress = await progressService.load();
    
    // 2. count active – pass progress as argument
    const numActive = progressService.getActiveCount(progress);
    console.log('[useSession] Anzahl Active:', numActive.toString());

    setCountActive(numActive);
  }

  return { runSession, countActive };
}