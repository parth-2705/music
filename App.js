import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Album from './components/Album';
export default function App() {
  return (
    <View style={styles.container}>
      <Header ></Header>
      <Album></Album>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    
  },

  text:{
    color: '#fff',
  }
});
