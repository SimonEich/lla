import { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import CardScreen from '@/components/CardScreen';
import FeedbackScreen from '@/components/FeedbackScreen';
import { useSession } from '@/hooks/useSession';

type Phase = 'question' | 'feedback';

export default function DifficultScreen() {
  const router = useRouter();
  const { data, activeCount, empty, swipeRight, swipeUp, swipeLeft, swipeDown } =
    useSession({ difficultOnly: true });
  const [phase, setPhase] = useState<Phase>('question');
  const [isCorrect, setIsCorrect] = useState(false);

  if (empty) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyIcon}>🎉</Text>
        <Text style={styles.emptyTitle}>Keine schwierigen Wörter</Text>
        <Text style={styles.emptyText}>Du hast alle schwierigen Wörter gemeistert!</Text>
        <Pressable style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backText}>Zurück</Text>
        </Pressable>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  function handleAnswer(correct: boolean) {
    setIsCorrect(correct);
    setPhase('feedback');
  }

  function handleSwipe(action: () => void) {
    setPhase('question');
    action();
  }

  if (phase === 'feedback') {
    return (
      <FeedbackScreen
        data={data}
        isCorrect={isCorrect}
        activeCount={activeCount}
        onSwipeRight={() => handleSwipe(swipeRight)}
        onSwipeUp={() => handleSwipe(swipeUp)}
        onSwipeLeft={() => handleSwipe(swipeLeft)}
        onSwipeDown={() => handleSwipe(swipeDown)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <CardScreen data={data} onAnswer={handleAnswer} activeCount={activeCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    gap: 12,
    paddingHorizontal: 40,
  },
  emptyIcon: { fontSize: 56 },
  emptyTitle: { fontSize: 22, fontWeight: '700', color: '#1a1a1a' },
  emptyText: { fontSize: 16, color: '#888', textAlign: 'center' },
  backBtn: {
    marginTop: 16,
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 14,
  },
  backText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
