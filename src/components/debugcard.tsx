import { View, Text, Pressable } from 'react-native';

type Props = {
  runDebug: () => void;
};

export function Debug({ runDebug }: Props) {


  return (
    <View>
      <Text>Hello Debug</Text>
      <Pressable onPress={runDebug}>
        <Text>Run Debug</Text>
      </Pressable>
    </View>
  );
}