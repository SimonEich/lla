import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import { MultiData } from '@/types/session';
import { Card } from '@/components/ui/Card';

type Props = {
  data: MultiData;
  onAnswer: (correct: boolean) => void;
};

export function WordMark({ data, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const { sentence, word } = data;

  // Split sentence into tokens, preserving punctuation as part of the word
  const tokens = sentence.target.split(' ');

  function handlePress(token: string) {
    if (selected) return;
    // Strip punctuation for comparison
    const clean = token.replace(/[.,!?;:]/g, '');
    const isCorrect = clean.toLowerCase() === sentence.target_word_form.toLowerCase();
    setSelected(token);
    setTimeout(() => {
      setSelected(null);
      onAnswer(isCorrect);
    }, 200);
  }

  return (
    <View style={styles.container}>
      <Card flex>
        <Text style={styles.word}>{data.word.native}</Text>
        <Text style={styles.prompt}>Tippe das richtige Wort an</Text>
        <View style={styles.tokenRow}>
          {tokens.map((token, i) => {
            const clean = token.replace(/[.,!?;:]/g, '');
            const isTarget = clean.toLowerCase() === sentence.target_word_form.toLowerCase();
            let bg = '#f0f0f0';
            if (selected === token) {
              bg = isTarget ? '#E1F5EE' : '#FAECE7';
            }
            return (
              <Pressable
                key={i}
                onPress={() => handlePress(token)}
                style={[styles.token, { backgroundColor: bg }]}
              >
                <Text style={styles.tokenText}>{token}</Text>
              </Pressable>
            );
          })}
        </View>
      </Card>
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
  },
  word: {
    fontSize: 42,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
    textAlign: 'center',
  },
  prompt: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 20,
    textAlign: 'center',
  },
  tokenRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  token: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  tokenText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a1a',
  },
});
