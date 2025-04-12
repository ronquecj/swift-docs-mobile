import { Camera, CameraView } from 'expo-camera';
import { Stack, useNavigation, useRouter } from 'expo-router';
import {
  AppState,
  Linking,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);
  const router = useRouter();
  const navigation = useNavigation();

  const storeData = async (data) => {
    try {
      await AsyncStorage.setItem('DATA_ID', JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save data:', e);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const data_saved = await AsyncStorage.getItem('DATA_ID');
    };
    getData();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      (nextAppState) => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          qrLock.current = false;
        }
        appState.current = nextAppState;
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <Stack.Screen
        options={{
          title: 'Overview',
          headerShown: false,
        }}
      />
      {Platform.OS === 'android' ? <StatusBar hidden /> : null}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={async ({ data }) => {
          if (data && !qrLock.current) {
            qrLock.current = true;
            await storeData(data);
            router.push('/signup');
          }
        }}
      />
    </SafeAreaView>
  );
}
