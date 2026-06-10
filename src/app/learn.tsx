import MultipleChoice from '@/components/MultipleChoice';
import { View, Text } from 'react-native';


export default function LearnScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MultipleChoice/>
    </View>
  );
}