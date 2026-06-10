// src/components/CardScreen.tsx
import MultipleChoice from './MultipleChoice';
import GapFill from './levels/GapFill';
import WordTap from './levels/WordTap';
import FreeInput from './levels/FreeInput';

type Props = {
  level: number;
  word: Word;
  onCorrect: () => void;
  onWrong: () => void;
};

export default function CardScreen({ level, word, onCorrect, onWrong }: Props) {
  if (level === 1 || level === 2) {
    return <MultipleChoice word={word} level={level} onCorrect={onCorrect} onWrong={onWrong} />;
  }
  if (level === 3) {
    return <GapFill word={word} onCorrect={onCorrect} onWrong={onWrong} />;
  }
  if (level === 4) {
    return <WordTap word={word} onCorrect={onCorrect} onWrong={onWrong} />;
  }
  if (level === 5) {
    return <FreeInput word={word} onCorrect={onCorrect} onWrong={onWrong} />;
  }
  return null;
}