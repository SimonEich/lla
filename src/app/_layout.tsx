import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="learn" options={{ title: 'Lernen', headerBackTitle: 'Start' }} />
      <Stack.Screen name="difficult" options={{ title: 'Schwierige Wörter', headerBackTitle: 'Start' }} />
      <Stack.Screen name="settings" options={{ title: 'Einstellungen', headerBackTitle: 'Start' }} />
    </Stack>
  );
}
