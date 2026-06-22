import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import { MultiData } from '@/types/session';
import { Card } from '@/components/ui/Card';
import { fuzzyMatch } from '@/utils/fuzzy';

type Props = {
  data: MultiData;
  onAnswer: (correct: boolean) => void;
};

export function FreeInput({ data, onAnswer }: Props) {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null);
  const { word } = data;

  function handleSubmit() {
    if (result || !input.trim()) return;
    const isCorrect = fuzzyMatch(input, word.target);
    setResult(isCorrect ? 'correct' : 'wrong');
    setTimeout(() => {
      setInput('');
      setResult(null);
      onAnswer(isCorrect);
    }, 200);
  }

  const borderColor =
    result === 'correct' ? '#0F6E56' : result === 'wrong' ? '#993C1D' : '#e0e0e0';
  const inputBg =
    result === 'correct' ? '#E1F5EE' : result === 'wrong' ? '#FAECE7' : '#fff';

  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.prompt}>Wie heißt das auf Spanisch?</Text>
        <Text style={styles.word}>{word.native}</Text>
      </Card>

      <View style={styles.inputArea}>
        <TextInput
          style={[styles.input, { borderColor, backgroundColor: inputBg }]}
          value={input}
          onChangeText={setInput}
          onSubmitEditing={handleSubmit}
          returnKeyType="done"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Antwort eingeben..."
          placeholderTextColor="#aaa"
        />
        <Pressable style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitText}>Prüfen</Text>
        </Pressable>
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
  prompt: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    paddingTop: 28,
    paddingHorizontal: 20,
  },
  word: {
    fontSize: 48,
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  inputArea: {
    gap: 12,
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontSize: 22,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  submitBtn: {
    backgroundColor: '#1a1a1a',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
