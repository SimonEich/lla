import { View, Text, Pressable } from 'react-native';

type Props = {
  runDebug: () => void;
  wordCount: number
};

export function Debug({ runDebug, wordCount }: Props) {


  return (
    <View>
      <Text>Hello Debug</Text>
      <Text>Word count: {wordCount}</Text>

      <Pressable onPress={runDebug}>
        <Text>Run Debug</Text>
      </Pressable>
    </View>
  );
}