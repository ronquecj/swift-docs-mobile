import React, { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import SignupForm from '@/components/ui/signup-form';
import { GalleryVerticalEnd } from 'lucide-react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../global.css';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const signup = () => {
  const [qrData, setQrData] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      const getData = async () => {
        try {
          const data = await AsyncStorage.getItem('DATA_ID');
          console.log('Fetched data from AsyncStorage:', data); // Add this log
          if (data && data !== '{}') {
            setQrData(JSON.parse(data));
          }
        } catch (e) {
          console.error('Failed to load data:', e);
        }
      };
      getData();
    }, [])
  );

  return (
    <View>
      <SignupForm data={qrData || {}} />
    </View>
  );
};

export default signup;
