import { useState } from "react";
import { progressService } from "@/services/progressService";
import { wordsService } from "@/services/wordsService";
import { getRandomIndex } from "@/utils/random";

export function useSession() {
  const [countActive, setCountActive] = useState(0);

  async function initSession() {
    // 1. load progress first
    const progress = await progressService.load();

    // 2. count active – pass progress as argument
    const active = progressService.getActive(progress);
    const activeIDs = active.map(wp => wp.wordId);
    const numActive = active.length;
    const activeData = await wordsService.getByIds(activeIDs);

    const randomNumber = getRandomIndex(numActive)//Math.floor(Math.random() * (numActive + 1));
    
    console.log('[useSession] Random Number:', randomNumber)
    console.log('[useSession] Anzahl Active:', numActive.toString());
    console.log('[useSession] Active Choosen IDs:', activeIDs[randomNumber.correct]);
    console.log('[useSession] Aktiven Choosen Word', activeData[randomNumber.correct])
    console.log('[useSession] Chossen Progress Data:', active[randomNumber.correct])


    setCountActive(numActive);
  }

  return { initSession, countActive };
}