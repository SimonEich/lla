import { words } from '../data/words';
import { Word } from '../data/words';

export const wordsService = {

  async getAll(): Promise<Word[]> {
    const result = words;
    return result;
  },

  async getByIds(ids: string[]): Promise<Word[]> {
    return words.filter(w => ids.includes(w.id));
  },
};