import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { posts, users} from './components/WPAPI';

import Footer from './components/Footer';
import Messages from './components/Messages';

import Header from './components/Header';

export default function App() {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(
    ()=>posts().then(data=>setAllPosts(data)),
    []);
    console.log(allPosts)
    users()
  return (
    <View style={styles.container}>
      {allPosts.map((allpost,index)=>(
        <Text key={index}>{allpost.title.rendered}</Text>
      )  
      )}
      
      <Messages/>
      <Header />
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
