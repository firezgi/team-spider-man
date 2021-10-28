import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { posts, users} from './components/WPAPI';
import Footer from './components/Footer';
import Header from './components/Header';
import { LoginPage } from './components/LoginPage';

export default function App() {
  posts();
  // console.log(posts)
  users();
  return (
    <View style={styles.container}>
      <Header />
      <LoginPage/>
      <Footer/>
      <StatusBar style="auto" />
      
    </View>


  );
}
<LoginPage/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoginPage: {

  }
});
