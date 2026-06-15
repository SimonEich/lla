const COOLDOWN_ROUNDS = 5;
const cooldownHistory: number[] = [];

export function getRandomIndex(length: number): {
  correct: number;
  distractor1: number;
  distractor2: number;
} {
  // safety reset if all numbers are in cooldown
  if (cooldownHistory.length >= length) {
    cooldownHistory.length = 0;
  }

  // 1. correct number with cooldown
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

  // 2. two unique distractors
  let distractor1: number;
  let distractor2: number;

  do {
    distractor1 = Math.floor(Math.random() * length);
  } while (distractor1 === correctNumber);

  do {
    distractor2 = Math.floor(Math.random() * length);
  } while (distractor2 === correctNumber || distractor2 === distractor1);

  return {
    correct: correctNumber,
    distractor1,
    distractor2,
  };
}