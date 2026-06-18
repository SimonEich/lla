import { Sentence, Word } from '@/data/words';
import { WordProgress } from '@/services/progressService';

export type MultiData = {
  Word: Word;
  sentence: Sentence;
  progress: WordProgress;
  answerArray: Word[];  // 3 shuffled words – correct + 2 distractors
};