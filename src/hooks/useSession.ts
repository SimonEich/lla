import { useState, useEffect } from "react";
import { progressService } from "@/services/progressService";
import { wordsService } from "@/services/wordsService";
import { getRandomIndex, buildAnswerArray } from "@/utils/random";
import { MultiData } from "@/types/session";
import { initProgress } from "@/utils/initProgress";

export function useSession() {
  const [data, setData] = useState<MultiData | null>(null);

  useEffect(() => {
    runSession();
  }, []);

  async function runSession() {
    console.log('[useSession] Starting the Session...');
    
    try {
      // 1. Run and AWAIT your initialization utility to seed words if needed
      await initProgress();

      // 2. Load the freshly synced progress records 
      const progress = await progressService.load();

      // 3. Extract the active words
      const active = progressService.getActive(progress);
      
      if (!active || active.length === 0) {
        console.warn('[useSession] No active words found even after initialization.');
        return;
      }

      const activeIDs = active.map(wp => wp.wordId);
      const numActive = active.length;
      const activeData = await wordsService.getByIds(activeIDs);

      // 4. Pick random word + distractors + sentence
      const randomNumber = getRandomIndex(numActive);

      const chosenWord = activeData[randomNumber.correct];
      const chosenProgress = active[randomNumber.correct];
      
      // Safety validation
      if (!chosenWord || !chosenProgress) {
        console.error('[useSession] Could not resolve chosen word or progress record.', { randomNumber });
        return;
      }

      // 🌟 FIX: Pass the whole Sentence object instead of just the text string string
      const chosenSentence = chosenWord.sentences[randomNumber.sentence];
      
      const answerArray = buildAnswerArray(
        activeData[randomNumber.correct],
        activeData[randomNumber.distractor1],
        activeData[randomNumber.distractor2],
      );

      // Debugging Logs
      console.log('[useSession] SUCCESS! chosen word:', chosenWord.native);
      console.log('[useSession] number of active Words:', activeData.length);
      console.log('[useSession] level:', chosenProgress.level);
      console.log('[useSession] sentence object:', chosenSentence);
      console.log('[useSession] answerArray:', answerArray.map(w => w?.native));

      // 5. Build data object matching your exact MultiData structure
      setData({
        questionData: chosenWord, // Word object
        answerData: chosenWord,   // Word object
        sentence: chosenSentence, // Passed as Sentence object
        progress: chosenProgress, // WordProgress object
        answerArray,              // Word[] array
      });

    } catch (error) {
      console.error('[useSession] Fatal execution crash caught:', error);
    }
  }

  return { runSession, data };
}