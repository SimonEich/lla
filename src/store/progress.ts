import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'progress';

export async function loadProgress(): Promise<Record<string, number>> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

export async function saveProgress(progress: Record<string, number>) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}