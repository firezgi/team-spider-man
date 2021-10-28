import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { posts, users} from './components/WPAPI';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';

export default function App() {
  posts();
  users();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <PhotoGallery />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
