import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { posts, users} from './components/WPAPI';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  posts();
  // console.log(posts)
  users();
  return (
    <View style={styles.container}>
      <Header />
      <ProfilePage />
      <Footer/>
      <StatusBar style="auto" />
      
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
