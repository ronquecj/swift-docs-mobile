'use dom';

import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
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
