import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { MultiData } from '@/types/session';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

type Props = {
  data: MultiData;
  onAnswer: (correct: boolean) => void;
};

export function FillBlank({ data, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const { word, sentence, answerArray } = data;

  // Replace the target word form with a blank in the Spanish sentence
  const blankSentence = sentence.target.replace(sentence.target_word_form, '___');

  // Options: correct form + distractor base forms
  const options = answerArray.map((w) =>
    w.id === word.id ? sentence.target_word_form : w.target
  );

  function handlePress(option: string) {
    if (selected) return;
    const isCorrect = option === sentence.target_word_form;
    setSelected(option);
    setTimeout(() => {
      setSelected(null);
      onAnswer(isCorrect);
    }, 200);
  }

  return (
    <View style={styles.container}>
      <Card flex>
        <Text style={styles.native}>{sentence.native}</Text>
        <Text style={styles.blank}>{blankSentence}</Text>
      </Card>

      <View style={styles.options}>
        {options.map((opt, i) => {
          let variant: 'default' | 'correct' | 'wrong' = 'default';
          if (selected === opt) {
            variant = opt === sentence.target_word_form ? 'correct' : 'wrong';
          }
          return (
            <Button
              key={i}
              label={opt}
              variant={variant}
              onPress={() => handlePress(opt)}
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
  native: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  blank: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  options: {
    gap: 12,
  },
});
