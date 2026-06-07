import { useState } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useSession } from '../hooks/useSession';

export default function SessionDebugScreen() {
  const {
    loaded,
    currentWord,
    currentProgress,
    activeCount,
    masteredCount,
    inactiveCount,
    totalWords,
    correct,
    wrong,
    fastForward,
    difficult,
    getDistractors,
    _activeWordIds,
  } = useSession();

  const [log, setLog] = useState<string[]>([]);

  if (!loaded) {
    return (
      <View style={styles.center}>
        <Text>Laden...</Text>
      </View>
    );
  }

  if (!currentWord || !currentProgress) {
    return (
      <View style={styles.center}>
        <Text>Keine Karten mehr 🎉</Text>
      </View>
    );
  }

  const distractors = getDistractors(currentWord.id);
  const sentence = currentWord.sentences[currentProgress.sentenceIndex % currentWord.sentences.length];
  const addLog = (msg: string) =>
    setLog((prev) => [`${new Date().toLocaleTimeString()} – ${msg}`, ...prev.slice(0, 19)]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>

      <Text style={{ fontSize: 12, color: 'red', marginBottom: 16 }}>
        loaded: {String(loaded)} {'\n'}
        activeCount: {activeCount} {'\n'}
        currentWordId: {currentWord?.id ?? 'undefined'} {'\n'}
        currentProgress: {currentProgress ? 'ok' : 'undefined'}
      </Text>

      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statNum}>{activeCount}</Text>
          <Text style={styles.statLabel}>aktiv</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNum}>{masteredCount}</Text>
          <Text style={styles.statLabel}>gemeistert</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNum}>{inactiveCount}</Text>
          <Text style={styles.statLabel}>wartend</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNum}>{totalWords}</Text>
          <Text style={styles.statLabel}>gesamt</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.level}>Level {currentProgress.level}</Text>
          <Text style={styles.correct}>{currentProgress.correctCount}/3 richtig</Text>
          {currentProgress.difficult && (
            <Text style={styles.difficult}>⚠ schwierig</Text>
          )}
        </View>
        <Text style={styles.native}>{currentWord.native}</Text>
        <Text style={styles.target}>{currentWord.target}</Text>
        <Text style={styles.sentence}>{sentence?.target}</Text>
        <Text style={styles.sentenceNative}>{sentence?.native}</Text>
        <Text style={styles.meta}>ID: {currentWord.id} · {currentWord.kind}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Distraktoren</Text>
        <Text style={styles.distractorCorrect}>✓ {currentWord.target}</Text>
        {distractors.map((d, i) => (
          <Text key={i} style={styles.distractorWrong}>✗ {d}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Aktionen</Text>
        <View style={styles.btnRow}>
          <Pressable style={[styles.btn, styles.btnCorrect]}
            onPress={() => { correct(); addLog(`✓ ${currentWord.native}`); }}>
            <Text style={styles.btnText}>✓ Richtig</Text>
          </Pressable>
          <Pressable style={[styles.btn, styles.btnWrong]}
            onPress={() => { wrong(); addLog(`✗ ${currentWord.native}`); }}>
            <Text style={styles.btnText}>✗ Falsch</Text>
          </Pressable>
        </View>
        <View style={styles.btnRow}>
          <Pressable style={[styles.btn, styles.btnFast]}
            onPress={() => { fastForward(); addLog(`⬆ ${currentWord.native}`); }}>
            <Text style={styles.btnText}>⬆ Level skip</Text>
          </Pressable>
          <Pressable style={[styles.btn, styles.btnDiff]}
            onPress={() => { difficult(); addLog(`⚠ ${currentWord.native}`); }}>
            <Text style={styles.btnText}>⚠ Schwierig</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Aktive Wörter ({_activeWordIds.length})</Text>
        <Text style={styles.meta}>{_activeWordIds.join(', ')}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Log</Text>
        {log.length === 0 && <Text style={styles.meta}>Noch keine Aktionen</Text>}
        {log.map((entry, i) => (
          <Text key={i} style={styles.logEntry}>{entry}</Text>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  statsRow: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  stat: { flex: 1, backgroundColor: '#fff', borderRadius: 12, padding: 12, alignItems: 'center' },
  statNum: { fontSize: 22, fontWeight: '600', color: '#1a1a1a' },
  statLabel: { fontSize: 11, color: '#888', marginTop: 2 },
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 20, marginBottom: 16 },
  cardHeader: { flexDirection: 'row', gap: 12, marginBottom: 12, alignItems: 'center' },
  level: { backgroundColor: '#E1F5EE', color: '#085041', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, fontSize: 13, fontWeight: '500' },
  correct: { fontSize: 13, color: '#555' },
  difficult: { fontSize: 12, color: '#854F0B', backgroundColor: '#FAEEDA', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 },
  native: { fontSize: 28, fontWeight: '600', color: '#1a1a1a', marginBottom: 6 },
  target: { fontSize: 22, color: '#0F6E56', marginBottom: 10 },
  sentence: { fontSize: 14, color: '#555', fontStyle: 'italic', marginBottom: 4 },
  sentenceNative: { fontSize: 13, color: '#aaa', fontStyle: 'italic', marginBottom: 10 },
  meta: { fontSize: 11, color: '#bbb' },
  section: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12 },
  sectionTitle: { fontSize: 12, fontWeight: '500', color: '#888', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 },
  distractorCorrect: { fontSize: 15, color: '#0F6E56', marginBottom: 4 },
  distractorWrong: { fontSize: 15, color: '#993C1D', marginBottom: 4 },
  btnRow: { flexDirection: 'row', gap: 10, marginBottom: 10 },
  btn: { flex: 1, padding: 14, borderRadius: 12, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: '600', fontSize: 14 },
  btnCorrect: { backgroundColor: '#0F6E56' },
  btnWrong: { backgroundColor: '#993C1D' },
  btnFast: { backgroundColor: '#534AB7' },
  btnDiff: { backgroundColor: '#854F0B' },
  logEntry: { fontSize: 12, color: '#555', marginBottom: 4 },
});