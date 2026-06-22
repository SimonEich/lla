// 🔌 Switch backends here — swap local ↔ supabase without touching any other file
import { localProgressRepository } from './localProgressRepository';
import { localWordsRepository } from './localWordsRepository';
// import { supabaseProgressRepository } from './supabaseProgressRepository';

export const progressRepo = localProgressRepository;
export const wordsRepo    = localWordsRepository;
