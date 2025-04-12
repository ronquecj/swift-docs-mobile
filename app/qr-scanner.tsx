import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { Link, Stack } from 'expo-router';

import { useCameraPermissions } from 'expo-camera';

export default function Scanner() {
  const [permission, requestPermission] = useCameraPermissions();
  console.log('permission status: ', permission);
  console.log(requestPermission);

  const isPermissionGranted = Boolean(permission?.granted);
  console.log(isPermissionGranted);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{ title: 'Overview', headerShown: false }}
      />
      <Text style={styles.title}>QR Code Scanner</Text>
      <View style={{ gap: 20 }}>
        <Pressable
          onPress={async () => {
            console.log('Requesting permission...');
            const response = await requestPermission();
            console.log('Permission Response:', response);
          }}
        >
          <Text style={styles.buttonStyle}>Request Permissions</Text>
        </Pressable>
        <Link href={'/scanner'} asChild>
          <Pressable disabled={!isPermissionGranted}>
            <Text
              style={[
                styles.buttonStyle,
                { opacity: !isPermissionGranted ? 0.5 : 1 },
              ]}
            >
              Scan Code
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'space-around',
    paddingVertical: 80,
  },
  title: {
    color: 'white',
    fontSize: 40,
  },
  buttonStyle: {
    color: '#0E7AFE',
    fontSize: 20,
    textAlign: 'center',
  },
});
