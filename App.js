import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HashRouter, Switch, Route } from "react-router-dom";

//API Endpoints
import { posts, users, media } from "./components/WPAPI";

//components
import Footer from './components/Footer';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import Messages from "./components/Messages";
import NewsFeed from "./components/NewsFeed";
import { LoginPage } from './components/LoginPage';
import { ResetPassword } from './components/ResetPassword';
import { SignupPage } from './components/SignupPage';


export default function App() {
  const[user,setUser]=useState([])
  useEffect(() => users().then((data) => setUser(data)), []);
  console.log(user);
  
  
  return (
    <HashRouter>
      {/* <Switch> */}
      {user.map((ind, index) => (
        <Text key={ind.id}>{ind.link}
      </Text>))}
      <SignupPage/>
      <Header /> 
      <NewsFeed posts={posts}/>
      <Messages/>
      <Footer />
      
      {/* </Switch> */}
      <StatusBar style="auto" />
      </HashRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  LoginPage: {

  }
});
