import { View, Text, StyleSheet } from 'react-native';

type DebugLevelProps = {
  pressDebug: () => void;
};

// Fixed: Changed name to Capitalized 'DebugLevel'
export function DebugLevel({ pressDebug }: DebugLevelProps) {
  return (
    <View >
      <Text onPress={pressDebug}>
        Debug modus
      </Text>
    </View>
  );
}