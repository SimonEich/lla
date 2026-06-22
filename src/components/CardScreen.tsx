import { View, Text, StyleSheet } from 'react-native';
import { MultiData } from '@/types/session';
import { MultipleChoice } from './levels/MultipleChoice';
import { FillBlank } from './levels/FillBlank';
import { WordMark } from './levels/WordMark';
import { FreeInput } from './levels/FreeInput';

type Props = {
  data: MultiData;
  onAnswer: (correct: boolean) => void;
  activeCount: number;
};

export default function CardScreen({ data, onAnswer, activeCount }: Props) {
  const { level, correctCount } = data.progress;

  const levelProps = { data, onAnswer };
  const LevelNode =
    level <= 2 ? <MultipleChoice {...levelProps} /> :
    level === 3 ? <FillBlank    {...levelProps} /> :
    level === 4 ? <WordMark     {...levelProps} /> :
                  <FreeInput    {...levelProps} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.levelLabel}>Level {level}</Text>
          <Text style={styles.stackLabel}>{activeCount} Wörter im Stapel</Text>
        </View>
        <View style={styles.dots}>
          {[0, 1, 2].map(i => (
            <View key={i} style={[styles.dot, i < correctCount && styles.dotFilled]} />
          ))}
        </View>
      </View>
      {LevelNode}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 4,
  },
  levelLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888',
  },
  stackLabel: {
    fontSize: 11,
    color: '#bbb',
    marginTop: 2,
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
  dotFilled: {
    backgroundColor: '#0F6E56',
  },
});
