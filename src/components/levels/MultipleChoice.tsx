import { View, Text, StyleSheet } from 'react-native';
import { MultiData } from '@/types/session';

type Props = {
  data: MultiData;
};

export function MultipleChoice() {
  return(
    <View>
      <Text>
        MultipleChoice
      </Text>
    </View>
  )
}

//  const question = data.progress.level === 1
//    ? data.questionData.target   // show Spanish → pick German
//    : data.questionData.native;  // show German → pick Spanish
//
//  return (
//    <View style={styles.container}>
//
//      <Card flex>
//        <Text style={styles.question}>{question}</Text>
//      </Card>
//
//      <View style={styles.optionsRow}>
//        {data.answerArray.map((word, index) => (
//          <Button
//            key={index}
//            label={data.progress.level === 1 ? word.native : word.target}
//            onPress={() => console.log('pressed:', word.native)}
//          />
//        ))}
//      </View>
//
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    paddingHorizontal: 20,
//    paddingTop: 20,
//    paddingBottom: 48,
//    backgroundColor: '#f5f5f5',
//    justifyContent: 'space-between',
//  },
//  question: {
//    fontSize: 52,
//    fontWeight: '700',
//    color: '#1a1a1a',
//  },
//  optionsRow: {
//    flexDirection: 'row',
//    gap: 12,
//  },
//});