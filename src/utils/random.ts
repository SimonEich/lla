import { Word } from '@/data/words';

const COOLDOWN_ROUNDS = 5;
const cooldownHistory: number[] = [];

export function getRandomIndex(length: number): {
  correct: number;
  distractor1: number;
  distractor2: number;
  sentence: number;
} {
  if (cooldownHistory.length >= length) {
    cooldownHistory.length = 0;
  }

  let correctNumber: number = 0;
  let isTooRecent = true;

  while (isTooRecent) {
    correctNumber = Math.floor(Math.random() * length);
    isTooRecent = cooldownHistory.includes(correctNumber);
  }

  cooldownHistory.push(correctNumber);
  if (cooldownHistory.length > COOLDOWN_ROUNDS) {
    cooldownHistory.shift();
  }

  let distractor1: number;
  let distractor2: number;

  do {
    distractor1 = Math.floor(Math.random() * length);
  } while (distractor1 === correctNumber);

  do {
    distractor2 = Math.floor(Math.random() * length);
  } while (distractor2 === correctNumber || distractor2 === distractor1);

  const sentence = Math.floor(Math.random() * 6);

  return { correct: correctNumber, distractor1, distractor2, sentence };
}

export function buildAnswerArray(
  correctWord: Word,
  distractor1: Word,
  distractor2: Word
): Word[] {
  return [correctWord, distractor1, distractor2].sort(() => Math.random() - 0.5);
}