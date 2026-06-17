import { View, Text, Pressable } from 'react-native';
import { DebugLevel } from './levels/debug_level';


type Props = {
};

export function Debug() {
  
  return (
    <View>
      <DebugLevel pressDebug={() => console.log('[debugLevel, Debucard]')}/>
    </View>
  );
}