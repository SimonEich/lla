import { useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import CardScreen from '@/components/CardScreen';
import FeedbackScreen from '@/components/FeedbackScreen';
import { useSession } from '@/hooks/useSession';

type Phase = 'question' | 'feedback';

export default function LearnScreen() {
  const { data, activeCount, swipeRight, swipeUp, swipeLeft, swipeDown } = useSession();
  const [phase, setPhase] = useState<Phase>('question');
  const [isCorrect, setIsCorrect] = useState(false);

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
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
