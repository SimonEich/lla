import { View } from 'react-native';
import { useSession } from '../hooks/useSession';
import { useDebug } from '../hooks/useDebug';
import { Debug } from '@/components/debugcard';

export default function SessionDebugScreen() {
  const session = useSession();
  const { runDebug } = useDebug();

  return (
    <View style={{ flex: 1 }}>
      <Debug session={session} runDebug={runDebug} />
    </View>
  );
}