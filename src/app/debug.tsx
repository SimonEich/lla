import { View, Text} from 'react-native';
import { useDebug } from '../hooks/useDebug';
import { useSession } from '@/hooks/useSession';
import { Debug } from '@/components/debugcard';

export default function SessionDebugScreen() {

  return (
    <View style={{ flex: 1 }}>
      <Text>Debug modus</Text>
    </View>
  );
}