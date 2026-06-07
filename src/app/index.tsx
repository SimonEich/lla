import { useRouter } from 'expo-router';
import { Pressable, Text, View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={() => router.push('/debug')}>
        <Text style={styles.btnText}>Debug öffnen</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={() => router.push('/learn')}>
        <Text style={styles.btnText}>Learn öffnen</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  btn: { backgroundColor: '#0F6E56', padding: 16, borderRadius: 12 },
  btnText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});