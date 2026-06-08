import { View } from 'react-native';
import { useDebug } from '../hooks/useDebug';
import { Debug } from '@/components/debugcard';

export default function SessionDebugScreen() {
  const { runDebug } = useDebug();

  return (
    <View style={{ flex: 1 }}>
      <Debug runDebug={runDebug} />
    </View>
  );
}