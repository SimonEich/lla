import { View, Text } from 'react-native';
import { useSession } from '@/hooks/useSession';
import { MultipleChoice } from '@/components/levels/MultipleChoice';

export default function LearnScreen() {
  return (
    <View>
      <Text>
        Learn screen
      </Text>
    </View>
  )
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