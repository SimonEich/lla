import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { useStats } from '@/hooks/useStats';

const GREEN = '#0F6E56';
const DAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

export default function HomeScreen() {
  const router = useRouter();
  const { stats, reload } = useStats();

  useFocusEffect(useCallback(() => { reload(); }, []));

  const learnedPct = stats
    ? Math.round((stats.masteredWords / Math.max(stats.totalWords, 1)) * 100)
    : 0;

  const maxWeek = stats ? Math.max(...stats.weekCounts, 1) : 1;

  const todayDowIdx = (new Date().getDay() + 6) % 7;
  const weekLabels = Array.from({ length: 7 }, (_, i) => {
    const idx = (todayDowIdx - 6 + i + 7) % 7;
    return DAYS[idx];
  });

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>lla</Text>
          <Text style={styles.subtitle}>Lerne Spanisch</Text>
        </View>
        <Pressable style={styles.gearBtn} onPress={() => router.push('/settings')}>
          <Text style={styles.gearIcon}>⚙️</Text>
        </Pressable>
      </View>

      {/* Vocabulary progress */}
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.cardTitle}>Vokabular</Text>
          <Text style={styles.pctLabel}>{learnedPct}%</Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${learnedPct}%` }]} />
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.cardSub}>{stats?.masteredWords ?? '–'} gemeistert</Text>
          <Text style={styles.cardSub}>{stats?.totalWords ?? '–'} gesamt</Text>
        </View>
      </View>

      {/* Stat chips */}
      <View style={styles.chipRow}>
        <View style={styles.chip}>
          <Text style={styles.chipValue}>{stats?.activeWords ?? '–'}</Text>
          <Text style={styles.chipLabel}>Im Stapel</Text>
        </View>
        <View style={[styles.chip, styles.chipAccent]}>
          <Text style={[styles.chipValue, { color: '#fff' }]}>
            {stats?.streak ?? 0} 🔥
          </Text>
          <Text style={[styles.chipLabel, { color: '#ffffffaa' }]}>Tage Serie</Text>
        </View>
        <View style={styles.chip}>
          <Text style={styles.chipValue}>{stats?.todayCount ?? 0}</Text>
          <Text style={styles.chipLabel}>Heute</Text>
        </View>
      </View>

      {/* Weekly bar chart */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Letzte 7 Tage</Text>
        <View style={styles.chart}>
          {(stats?.weekCounts ?? Array(7).fill(0)).map((count, i) => (
            <View key={i} style={styles.barCol}>
              <Text style={styles.barCount}>{count > 0 ? count : ''}</Text>
              <View style={styles.barTrack}>
                <View
                  style={[
                    styles.barFill,
                    {
                      height: `${Math.round((count / maxWeek) * 100)}%`,
                      backgroundColor: i === 6 ? GREEN : '#c8e6df',
                    },
                  ]}
                />
              </View>
              <Text style={styles.barDay}>{weekLabels[i]}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* CTA */}
      <Pressable style={styles.primaryBtn} onPress={() => router.push('/learn')}>
        <Text style={styles.primaryText}>Lernen starten</Text>
      </Pressable>

      {stats && stats.difficultWords > 0 && (
        <Pressable style={styles.secondaryBtn} onPress={() => router.push('/difficult')}>
          <Text style={styles.secondaryText}>
            Schwierige Wörter · {stats.difficultWords}
          </Text>
        </Pressable>
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>{stats?.totalAnswers ?? 0} Antworten gesamt</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: '#f5f5f5' },
  container: { padding: 24, gap: 16, paddingBottom: 48 },

  header: { marginTop: 24, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  appName: { fontSize: 48, fontWeight: '800', color: '#1a1a1a', letterSpacing: -1 },
  subtitle: { fontSize: 16, color: '#888', marginTop: 2 },
  gearBtn: { padding: 8, marginTop: 8 },
  gearIcon: { fontSize: 24 },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  cardTitle: { fontSize: 13, fontWeight: '600', color: '#aaa', textTransform: 'uppercase', letterSpacing: 0.5 },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardSub: { fontSize: 13, color: '#aaa' },
  pctLabel: { fontSize: 28, fontWeight: '800', color: '#1a1a1a' },

  progressTrack: { height: 10, backgroundColor: '#f0f0f0', borderRadius: 5, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: GREEN, borderRadius: 5 },

  chipRow: { flexDirection: 'row', gap: 12 },
  chip: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  chipAccent: { backgroundColor: GREEN },
  chipValue: { fontSize: 22, fontWeight: '800', color: '#1a1a1a' },
  chipLabel: { fontSize: 11, color: '#aaa', fontWeight: '500' },

  chart: { flexDirection: 'row', alignItems: 'flex-end', height: 100, gap: 6 },
  barCol: { flex: 1, alignItems: 'center', height: '100%', justifyContent: 'flex-end' },
  barCount: { fontSize: 10, color: '#aaa', marginBottom: 2 },
  barTrack: { width: '70%', height: 72, justifyContent: 'flex-end' },
  barFill: { width: '100%', borderRadius: 4, minHeight: 3 },
  barDay: { fontSize: 11, color: '#aaa', marginTop: 4 },

  primaryBtn: {
    backgroundColor: '#1a1a1a',
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
  },
  primaryText: { color: '#fff', fontSize: 18, fontWeight: '700' },

  secondaryBtn: {
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
  },
  secondaryText: { color: '#1a1a1a', fontSize: 16, fontWeight: '600' },

  footer: { alignItems: 'center', marginTop: 4 },
  footerText: { fontSize: 12, color: '#ccc' },
});
