import CardScreen from '@/components/CardScreen';
import { useSession } from '@/hooks/useSession';
import { View, Text, Pressable } from 'react-native';

export default function LearnScreen() {
  const { data, runSession } = useSession();

  return (
    <View>
      <Pressable onPress={() => runSession()}>
        <Text>
          runSession
        </Text>
      </Pressable>
      <Text>Learn screen</Text>
      <CardScreen/>
    </View>
  );
}

//  const { data } = useSession();
//
//  if (!data) {
//    return <View style={styles.container} />;
//  }
//
//  return (
//    <View style={styles.container}>
//      <MultipleChoice data={data} />
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#f5f5f5',
//  },
//});