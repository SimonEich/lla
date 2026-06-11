import { View, Text, StyleSheet } from 'react-native';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function MultipleChoice() {
  return (
    <View style={styles.container}>

      <Card flex>
        <Text style={styles.question}>ser</Text>
      </Card>

      <View style={styles.optionsRow}>
        <Button label="sein" onPress={() => console.log('sein')} />
        <Button label="gehen" onPress={() => console.log('gehen')} />
        <Button label="haben" onPress={() => console.log('haben')} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 48,
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
  },
  question: {
    fontSize: 52,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  optionsRow: {
    flexDirection: 'row',
    gap: 12,
  },
});