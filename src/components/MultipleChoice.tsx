import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function MultipleChoice() {

  return (
    <View style={styles.container}>

      <View style={styles.questionBox}>
        <Text style={styles.questionText}>ser</Text>
      </View>

      <View style={styles.optionsRow}>
        <Pressable style={styles.optionBtn}>
          <Text style={styles.optionText}>sein</Text>
        </Pressable>
        <Pressable style={styles.optionBtn}>
          <Text style={styles.optionText}>gehen</Text>
        </Pressable>
        <Pressable style={styles.optionBtn}>
          <Text style={styles.optionText}>haben</Text>
        </Pressable>
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
  questionBox: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  questionText: {
    fontSize: 52,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  optionsRow: {
    flexDirection: 'row',
    width: '100%',
    gap: 12,
    height: 80,
  },
  optionBtn: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    textAlign: 'center',
  },
});