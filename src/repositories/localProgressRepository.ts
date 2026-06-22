import AsyncStorage from '@react-native-async-storage/async-storage';
import { WordProgress } from '@/services/progressService';
import { IProgressRepository } from './types';

const KEY = 'word_progress';

export const localProgressRepository: IProgressRepository = {
  async load() {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  },

  async save(progress) {
    await AsyncStorage.setItem(KEY, JSON.stringify(progress));
  },

  // For local storage saveOne just does a full save (no row concept)
  async saveOne(wp) {
    const current = await this.load();
    await this.save({ ...current, [wp.wordId]: wp });
  },
};
