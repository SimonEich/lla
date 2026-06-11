import { View, StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
  flex?: boolean;
};

export function Card({ children, flex }: Props) {
  return (
    <View style={[styles.card, flex && { flex: 1 }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginHorizontal: '5%',
    marginVertical: '20%',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
});