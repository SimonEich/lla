import { Pressable, Text, StyleSheet } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
  variant?: 'default' | 'correct' | 'wrong';
};

export function Button({ label, onPress, variant = 'default' }: Props) {
  return (
    <Pressable style={[styles.btn, styles[variant]]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    borderRadius: 16,
    height: 80,
    alignItems: 'center',
    marginBottom: '30%',
    justifyContent: 'center',
    borderWidth: 1.5,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  default: {
    backgroundColor: '#ffffff',
    borderColor: '#e0e0e0',
  },
  correct: {
    backgroundColor: '#E1F5EE',
    borderColor: '#0F6E56',
  },
  wrong: {
    backgroundColor: '#FAECE7',
    borderColor: '#993C1D',
  },
});