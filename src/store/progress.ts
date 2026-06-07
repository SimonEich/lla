import AsyncStorage from '@react-native-async-storage/async-storage';

export type WordProgress = {
  wordId: string;
  level: number;          // 1-5
  correctCount: number;   // richtig im aktuellen Level (0-3)
  sentenceIndex: number;  // welcher Satz als nächstes (0-5)
  difficult: boolean;     // als schwierig markiert
  state: 'inactive' | 'active' | 'mastered';
};

const STORAGE_KEY = 'word_progress';

// Alle Fortschritte laden
export async function loadProgress(): Promise<Record<string, WordProgress>> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

// Einen Fortschritt speichern
export async function saveProgress(progress: Record<string, WordProgress>) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

// Fortschritt für ein einzelnes Wort holen (oder neu erstellen)
export function getWordProgress(
  progress: Record<string, WordProgress>,
  wordId: string
): WordProgress {
  return progress[wordId] ?? {
    wordId,
    level: 1,
    correctCount: 0,
    sentenceIndex: 0,
    difficult: false,
  };
}

// Nach richtig: correctCount erhöhen, ggf. Level steigen
export function markCorrect(wp: WordProgress): WordProgress {
  const newCount = wp.correctCount + 1;
  const levelUp = newCount >= 3;
  return {
    ...wp,
    correctCount: levelUp ? 0 : newCount,
    level: levelUp ? Math.min(wp.level + 1, 5) : wp.level,
    sentenceIndex: wp.sentenceIndex + 1,
  };
}

// Nach falsch: correctCount zurücksetzen
export function markWrong(wp: WordProgress): WordProgress {
  return {
    ...wp,
    correctCount: 0,
    sentenceIndex: wp.sentenceIndex + 1,
  };
}

// Swipe nach oben: direkt nächstes Level
export function markFastForward(wp: WordProgress): WordProgress {
  return {
    ...wp,
    correctCount: 0,
    level: Math.min(wp.level + 1, 5),
    sentenceIndex: wp.sentenceIndex + 1,
  };
}

// Swipe nach unten: als schwierig markieren
export function markDifficult(wp: WordProgress): WordProgress {
  return {
    ...wp,
    difficult: true,
    correctCount: 0,
    sentenceIndex: wp.sentenceIndex + 1,
  };
}