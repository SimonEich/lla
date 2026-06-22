// Swap this in when you connect Supabase.
// Replace every `TODO` with your actual table/column names.
//
// import { supabase } from '@/lib/supabase';
import { WordProgress } from '@/services/progressService';
import { IProgressRepository } from './types';

export const supabaseProgressRepository: IProgressRepository = {
  async load() {
    // const { data, error } = await supabase
    //   .from('word_progress')          // TODO: your table name
    //   .select('*')
    //   .eq('user_id', currentUserId);  // TODO: auth user id
    // if (error) throw error;
    // return Object.fromEntries(data.map((row: WordProgress) => [row.wordId, row]));
    throw new Error('supabaseProgressRepository.load: not yet wired up');
  },

  async save(progress) {
    // Supabase: upsert all rows at once
    // const rows = Object.values(progress).map(wp => ({ ...wp, user_id: currentUserId }));
    // const { error } = await supabase.from('word_progress').upsert(rows);
    // if (error) throw error;
    throw new Error('supabaseProgressRepository.save: not yet wired up');
  },

  async saveOne(wp) {
    // Supabase: upsert a single row — much cheaper than save() for frequent writes
    // const { error } = await supabase
    //   .from('word_progress')
    //   .upsert({ ...wp, user_id: currentUserId });
    // if (error) throw error;
    throw new Error('supabaseProgressRepository.saveOne: not yet wired up');
  },
};
