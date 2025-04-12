'use dom';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

const app = () => {
  return (
    <View>
      <h1>Welcome</h1>
      <StatusBar style="auto" />
      <Link href={'/login'} style={{ color: 'blue' }}>
        Start
      </Link>
    </View>
  );
};

export default app;
