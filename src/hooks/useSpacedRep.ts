import { useState, useEffect } from "react";
import { progressService, WordProgress } from "@/services/progressService";
import { wordsService } from "@/services/wordsService";
import { getRandomIndex, buildAnswerArray } from "@/utils/random";
import { MultiData } from "@/types/session";

const minimalNumberWords = 10

export function useSession() {
  const [data, setData] = useState<MultiData | null>(null);

  useEffect(() => {
    runSession();
  }, []);

  async function runSession() {
    console.log('[useSession] Starting the Session...');
    
    try {
      // 1. Load progress record
      let progress = await progressService.load();

      // 2. Extract active words
      let active = progressService.getActive(progress);

      // 🌟 FIX: Seed starter words if storage is completely empty!
      if (active.length === 0) {
        console.log('[useSession] No active words found. Seeding initial words...');
        
        // Fetch all available words to kickstart progress
        const allWords = await wordsService.getAll();
        
        if (!allWords || allWords.length === 0) {
          console.warn('[useSession] Words database is completely empty. Add words first!');
          return;
        }

        // Take the first 10 words as your starter pack and activate them
        const starterPack = allWords.slice(0, minimalNumberWords);
        let updatedProgress = { ...progress };
        
        starterPack.forEach(word => {
          updatedProgress = progressService.activate(updatedProgress, word.id);
        });

        // Save our newly seeded progress state
        await progressService.save(updatedProgress);
        
        // Re-assign local working variables with the new data
        progress = updatedProgress;
        active = progressService.getActive(progress);
      }

      const activeIDs = active.map(wp => wp.wordId);
      const numActive = active.length;
      const activeData = await wordsService.getByIds(activeIDs);

      // 3. Pick random word + distractors + sentence
      const randomNumber = getRandomIndex(numActive);

      const chosenWord = activeData[randomNumber.correct];
      const chosenProgress = active[randomNumber.correct];
      
      // Safety validation before drilling down into object keys
      if (!chosenWord || !chosenProgress) {
        console.error('[useSession] Could not resolve chosen word or progress record.', { randomNumber });
        return;
      }

      const chosenSentence = chosenWord.sentences?.[randomNumber.sentence] || "No context sentence found.";
      
      const answerArray = buildAnswerArray(
        activeData[randomNumber.correct],
        activeData[randomNumber.distractor1],
        activeData[randomNumber.distractor2],
      );

      // These logs will now print beautifully!
      console.log('[useSession] SUCCESS! chosen word:', chosenWord.native);
      console.log('[useSession] number of active Words:', activeData.length);
      console.log('[useSession] level:', chosenProgress.level);
      console.log('[useSession] sentence:', chosenSentence);
      console.log('[useSession] answerArray:', answerArray.map(w => w?.native));
      console.log(data)

      // 4. Build data object based on level
      setData({
        questionData: chosenWord,
        answerData: chosenWord,
        sentence: chosenSentence,
        progress: chosenProgress,
        answerArray,
      });

    } catch (error) {
      console.error('[useSession] Fatal execution crash caught:', error);
    }
  }

  return { runSession, data };
}