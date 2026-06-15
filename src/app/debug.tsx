import { View } from 'react-native';
import { useDebug } from '../hooks/useDebug';
import { useSession } from '@/hooks/useSession';
import { Debug } from '@/components/debugcard';

export default function SessionDebugScreen() {
  const { runDebug, data } = useDebug();
  const { initSession, countActive } = useSession();

  return (
    <View style={{ flex: 1 }}>
      <Debug runDebug={runDebug} data={data} runSession={initSession} countActive={countActive}/>
    </View>
  );
}