// src/components/CardScreen.tsx
import { View, Text } from 'react-native';
import { MultipleChoice } from './levels/MultipleChoice';


export default function CardScreen() {
  if (true) {
    return <MultipleChoice/>;
  }else{
    return(
      <View>
        <Text>
          Soon available
        </Text>
      </View>
    )
  }
}