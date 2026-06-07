import { useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { Word } from '../data/words';

type Props = {
  word: Word;
  sentenceIndex: number; // welcher Satz aus der Rotation
};

export default function FlashCard({ word, sentenceIndex }: Props) {
  const [flipped, setFlipped] = useState(false);
  const sentence = word.sentences[sentenceIndex % word.sentences.length];

  return (
    <Pressable onPress={() => setFlipped(!flipped)} style={styles.card}>
      {!flipped ? (
        <View style={styles.side}>
          <Text style={styles.label}>Deutsch</Text>
          <Text style={styles.word}>{word.native}</Text>
          <Text style={styles.hint}>Tippen zum Umdrehen</Text>
        </View>
      ) : (
        <View style={styles.side}>
          <Text style={styles.label}>Spanisch</Text>
          <Text style={styles.word}>{word.target}</Text>
          <Text style={styles.sentence}>{sentence.target}</Text>
          <Text style={styles.translation}>{sentence.native}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', // Setze es zum Testen mal auf '#e0e0e0', um zu sehen ob sie auftaucht!
    borderRadius: 16,
    padding: 32,
    marginHorizontal: 24,
    minHeight: 220,
    
    // HIER DIE RETTUNG: Zwingt die Karte, sich im HomeScreen breit zu machen
    alignSelf: 'stretch', 
    
    justifyContent: 'center',
    alignItems: 'center',
    
    // Schatten-Fix für manche Android-Geräte (elevation braucht oft eine background-color)
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  side: {
    alignItems: 'center',
    gap: 12,
  },
  label: {
    fontSize: 13,
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  word: {
    fontSize: 32,
    fontWeight: '600',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  sentence: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 8,
  },
  translation: {
    fontSize: 13,
    color: '#aaa',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  hint: {
    fontSize: 13,
    color: '#bbb',
    marginTop: 16,
  },
});