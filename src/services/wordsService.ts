import { words } from '../data/words';
import { Word } from '../data/words';

export const wordsService = {

  async getAll(): Promise<Word[]> {
    console.log('[wordsService] getAll aufgerufen');
    const result = words;
    console.log('[wordsService] Anzahl Wörter:', result.length);
    console.log(words)
    console.log('here come the words')
    return result;
  },

};