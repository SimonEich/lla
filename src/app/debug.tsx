import { View, Text, Pressable, StyleSheet } from 'react-native';
import { runDebugConsole } from '@/hooks/useDebug';
import { useSession } from '@/hooks/useSession';
import { Debug } from '@/components/debugcard';

export default function SessionDebugScreen() {
  // Example of pulling a function from your custom hook (adjust based on your actual hook)
  // const { toggleDebug } = useDebug(); 
  const  runDebug  = runDebugConsole()


  return (
    <View style={styles.container}>
      {/* Fixed: Changed 'void' to an empty execution block '{}' */}
      <Pressable onPress={() => {console.log('[debug]')}}>
        <Text style={styles.text}>Debug modus</Text>
      </Pressable>
      <Pressable onPress={()=>runDebugConsole()}>
        <Text>Run useDebug</Text>
      </Pressable>
      <Debug/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
