import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Screen from "./components/Screen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header title="Guess a Number" />
      <Screen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
