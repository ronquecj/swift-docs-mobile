import { StyleSheet, Text, View } from 'react-native';
import { Slot, Stack } from 'expo-router';

import '../global.css';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen
        name="qr-scanner"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default RootLayout;
