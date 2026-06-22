import { useRef } from 'react';
import { View, Text, PanResponder, StyleSheet, Animated } from 'react-native';
import { MultiData } from '@/types/session';

type Props = {
  data: MultiData;
  isCorrect: boolean;
  activeCount: number;
  onSwipeRight: () => void;
  onSwipeUp: () => void;
  onSwipeLeft: () => void;
  onSwipeDown: () => void;
};

const SWIPE_THRESHOLD = 60;

export default function FeedbackScreen({
  data,
  isCorrect,
  activeCount,
  onSwipeRight,
  onSwipeUp,
  onSwipeLeft,
  onSwipeDown,
}: Props) {
  const pan = useRef(new Animated.ValueXY()).current;
  const { sentence, word, progress } = data;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, { dx, dy }) => {
        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);

        if (absDx > absDy && absDx > SWIPE_THRESHOLD) {
          dx > 0 ? onSwipeRight() : onSwipeLeft();
        } else if (absDy > absDx && absDy > SWIPE_THRESHOLD) {
          dy < 0 ? onSwipeUp() : onSwipeDown();
        }

        Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
      },
    })
  ).current;

  const rotate = pan.x.interpolate({
    inputRange: [-150, 0, 150],
    outputRange: ['-8deg', '0deg', '8deg'],
  });

  return (
    <View style={styles.outer}>
      <Animated.View
        style={[
          styles.card,
          { transform: [{ translateX: pan.x }, { translateY: pan.y }, { rotate }] },
        ]}
        {...panResponder.panHandlers}
      >
        {/* Result badge */}
        <View style={[styles.badge, isCorrect ? styles.badgeCorrect : styles.badgeWrong]}>
          <Text style={styles.badgeText}>{isCorrect ? 'Richtig ✓' : 'Falsch ✗'}</Text>
        </View>

        {/* Word */}
        <Text style={styles.wordNative}>{word.native}</Text>
        <Text style={styles.wordTarget}>{word.target}</Text>

        {/* Example sentence */}
        <View style={styles.sentenceBox}>
          <Text style={styles.sentenceNative}>{sentence.native}</Text>
          <Text style={styles.sentenceTarget}>{sentence.target}</Text>
          {sentence.pers_pron_form && (
            <Text style={styles.form}>{sentence.pers_pron_form}: {sentence.target_word_form}</Text>
          )}
        </View>

        {/* Level info */}
        <View style={styles.levelRow}>
          <Text style={styles.levelInfo}>Level {progress.level} · {progress.correctCount}/3 richtig</Text>
          <Text style={styles.stackInfo}>{activeCount} Wörter im Stapel</Text>
        </View>
      </Animated.View>

      {/* Swipe hints */}
      <View style={styles.hints}>
        <Text style={styles.hint}>← Falsch</Text>
        <View style={styles.hintCenter}>
          <Text style={styles.hint}>↑ Einfach</Text>
          <Text style={styles.hint}>→ Gewusst</Text>
          <Text style={styles.hint}>↓ Schwer</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
  },
  card: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
    gap: 16,
  },
  badge: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 100,
    marginBottom: 8,
  },
  badgeCorrect: {
    backgroundColor: '#E1F5EE',
  },
  badgeWrong: {
    backgroundColor: '#FAECE7',
  },
  badgeText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  wordNative: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1a1a1a',
  },
  wordTarget: {
    fontSize: 24,
    fontWeight: '600',
    color: '#555',
    marginTop: -8,
  },
  sentenceBox: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    borderRadius: 14,
    padding: 16,
    gap: 6,
    marginTop: 8,
  },
  sentenceNative: {
    fontSize: 15,
    color: '#888',
  },
  sentenceTarget: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  form: {
    fontSize: 13,
    color: '#aaa',
    marginTop: 4,
  },
  levelRow: {
    alignItems: 'center',
    marginTop: 4,
    gap: 2,
  },
  levelInfo: {
    fontSize: 14,
    color: '#bbb',
  },
  stackInfo: {
    fontSize: 11,
    color: '#ccc',
  },
  hints: {
    position: 'absolute',
    bottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    opacity: 0.5,
  },
  hintCenter: {
    flexDirection: 'row',
    gap: 12,
  },
  hint: {
    fontSize: 13,
    color: '#666',
  },
});
