import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { MultiData } from '@/types/session';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

type Props = {
  data: MultiData;
  onAnswer: (correct: boolean) => void;
};

export function MultipleChoice({ data, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const level = data.progress.level;

  // L1: see Spanish → pick German | L2: see German → pick Spanish
  const question = level === 1 ? data.word.target : data.word.native;
  const context  = level === 1 ? data.sentence.target : data.sentence.native;
  const getLabel = (word: typeof data.word) =>
    level === 1 ? word.native : word.target;

  function handlePress(wordId: string) {
    if (selected) return;
    const isCorrect = wordId === data.word.id;
    setSelected(wordId);
    setTimeout(() => {
      setSelected(null);
      onAnswer(isCorrect);
    }, 200);
  }

  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.question}>{question}</Text>
        <Text style={styles.context}>{context}</Text>
      </Card>

      <View style={styles.options}>
        {data.answerArray.map((word) => {
          let variant: 'default' | 'correct' | 'wrong' = 'default';
          if (selected === word.id) {
            variant = word.id === data.word.id ? 'correct' : 'wrong';
          }
          return (
            <Button
              key={word.id}
              label={getLabel(word)}
              variant={variant}
              onPress={() => handlePress(word.id)}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 48,
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
  },
  question: {
    fontSize: 48,
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    paddingTop: 32,
    paddingHorizontal: 20,
  },
  context: {
    fontSize: 15,
    color: '#999',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 28,
  },
  options: {
    gap: 12,
  },
});
