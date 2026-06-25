import { useState, useEffect } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { settingsService, AppSettings } from '@/services/settingsService';

const GREEN = '#0F6E56';
const STACK_OPTIONS = [5, 10, 15, 20, 30, 40, 50];

export default function SettingsScreen() {
  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    settingsService.load().then(setSettings);
  }, []);

  async function handleSave(next: AppSettings) {
    setSettings(next);
    // Invalidate session cache so it picks up new settings on next load
    await settingsService.save(next);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  async function handleResetProgress() {
    Alert.alert(
      'Fortschritt zurücksetzen',
      'Alle Lernfortschritte werden gelöscht. Diese Aktion kann nicht rückgängig gemacht werden.',
      [
        { text: 'Abbrechen', style: 'cancel' },
        {
          text: 'Zurücksetzen',
          style: 'destructive',
          onPress: async () => {
            await AsyncStorage.multiRemove(['word_progress', 'practice_stats']);
            Alert.alert('Erledigt', 'Fortschritt wurde zurückgesetzt.');
          },
        },
      ]
    );
  }

  if (!settings) return null;

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>

      {/* Stack size */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>STAPELGRÖSSE</Text>
        <Text style={styles.sectionDesc}>
          Wie viele Wörter gleichzeitig aktiv trainiert werden. Neue Wörter kommen hinzu wenn du ein Level aufsteigst.
        </Text>
        <View style={styles.optionRow}>
          {STACK_OPTIONS.map(n => (
            <Pressable
              key={n}
              style={[styles.option, settings.maxStackSize === n && styles.optionActive]}
              onPress={() => handleSave({ ...settings, maxStackSize: n })}
            >
              <Text style={[styles.optionText, settings.maxStackSize === n && styles.optionTextActive]}>
                {n}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.hint}>Aktuell: {settings.maxStackSize} Wörter im Stapel</Text>
      </View>

      {/* Saved indicator */}
      {saved && (
        <View style={styles.savedBadge}>
          <Text style={styles.savedText}>Gespeichert ✓</Text>
        </View>
      )}

      {/* Danger zone */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>GEFAHRENZONE</Text>
        <Pressable style={styles.dangerBtn} onPress={handleResetProgress}>
          <Text style={styles.dangerText}>Lernfortschritt zurücksetzen</Text>
        </Pressable>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: '#f5f5f5' },
  container: { padding: 24, gap: 24, paddingBottom: 48 },

  section: {
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
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#aaa',
    letterSpacing: 1,
  },
  sectionDesc: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  optionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  option: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  optionActive: {
    backgroundColor: GREEN,
    borderColor: GREEN,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  optionTextActive: {
    color: '#fff',
  },
  hint: {
    fontSize: 13,
    color: '#aaa',
  },

  savedBadge: {
    backgroundColor: '#E1F5EE',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
  },
  savedText: {
    color: GREEN,
    fontWeight: '700',
    fontSize: 15,
  },

  dangerBtn: {
    borderWidth: 1.5,
    borderColor: '#993C1D',
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
  },
  dangerText: {
    color: '#993C1D',
    fontWeight: '600',
    fontSize: 15,
  },
});
