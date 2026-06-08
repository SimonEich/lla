import { View, Text, Pressable } from 'react-native';

type Props = {
  session: ReturnType<typeof import('../hooks/useSession').useSession>;
  runDebug: () => void;
};

export function Debug({ session, runDebug }: Props) {
  if (!session.loaded) {
    return (
      <View>
        <Text>Laden...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Hello Debug</Text>
      <Pressable onPress={runDebug}>
        <Text>Run Debug</Text>
      </Pressable>
    </View>
  );
}