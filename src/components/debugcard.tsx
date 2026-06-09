import { View, Text, Pressable } from 'react-native';

type Data = {
  wordCount :number;
  firstWord : string;
}

type Props = {
  runDebug: () => void;
  data: Data
};

export function Debug({ runDebug, data }: Props) {


  return (
    <View>
      <Text>Hello Debug</Text>
      <Text>Word count: {data.wordCount}</Text>
      <Text>Forst Word: {data.firstWord}</Text>

      <Pressable onPress={runDebug}>
        <Text>Run Debug</Text>
      </Pressable>
    </View>
  );
}