import { useState, useEffect } from "react";
import { progressService } from "@/services/progressService";
import { wordsService } from "@/services/wordsService";
import { getRandomIndex, buildAnswerArray } from "@/utils/random";
import { MultiData } from "@/types/session";

export function useSession() {
  const [data, setData] = useState<MultiData | null>(null);

  useEffect(() => {
    initSession();
  }, []);

  async function initSession() {
    // 1. load progress
    const progress = await progressService.load();

    // 2. get active words
    const active = progressService.getActive(progress);
    const activeIDs = active.map(wp => wp.wordId);
    const numActive = active.length;
    const activeData = await wordsService.getByIds(activeIDs);

    // 3. pick random word + distractors + sentence
    const randomNumber = getRandomIndex(numActive);

    const chosenWord = activeData[randomNumber.correct];
    const chosenProgress = active[randomNumber.correct];
    const chosenSentence = chosenWord.sentences[randomNumber.sentence];
    const answerArray = buildAnswerArray(
      activeData[randomNumber.correct],
      activeData[randomNumber.distractor1],
      activeData[randomNumber.distractor2],
    );

    console.log('[useSession] chosen word:', chosenWord.native);
    console.log('[useSession] level:', chosenProgress.level);
    console.log('[useSession] sentence:', chosenSentence);
    console.log('[useSession] answerArray:', answerArray.map(w => w.native));

    // 4. build data object based on level
    const level = chosenProgress.level;

    setData({
      questionData: chosenWord,
      answerData: chosenWord,
      sentence: chosenSentence,
      progress: chosenProgress,
      answerArray,
    });
  }

  return { initSession, data };
}