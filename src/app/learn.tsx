import { View, Text } from 'react-native';

export default function LearnScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Learn screen</Text>
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