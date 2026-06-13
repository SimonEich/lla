import { View, Text, Pressable } from 'react-native';

type Data = {
  wordCount :number;
  firstWord : string;
}

type Props = {
  runDebug: () => void;
  data: Data;
  runSession: () => void;
  countActive: number;
};

export function Debug({ runDebug, data, runSession, countActive }: Props) {
  return (
    <View>
      <Text>Word count: {data.wordCount}</Text>
      <Text>First word: {data.firstWord}</Text>
      <Text>Active words: {countActive}</Text>
      <Pressable onPress={runDebug}>
        <Text>Run Debug</Text>
      </Pressable>
      <Pressable onPress={runSession}>
        <Text>Run Session</Text>
      </Pressable>
    </View>
  );
}