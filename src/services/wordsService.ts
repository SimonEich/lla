import { words } from '../data/words';
import { Word } from '../data/words';

export const wordsService = {

  async getAll(): Promise<Word[]> {
    const result = words;
    return result;
  },

};