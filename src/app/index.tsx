import { useRouter } from 'expo-router';
import { Pressable, Text, View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View>
      <Pressable onPress={() => router.push('/debug')}>
        <Text>Debug öffnen</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/learn')}>
        <Text>Learn öffnen</Text>
      </Pressable>

    </View>
  );
}
