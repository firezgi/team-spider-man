import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HashRouter, Switch, Route } from "react-router-dom";
import { posts, users,media } from "./components/WPAPI";
import Footer from "./components/Footer";
import Messages from "./components/Messages";
import Header from "./components/Header";
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
      {/* <SignupPage/> */}
    
      <Header /> 
      <NewsFeed posts={posts}/>
      <Messages/>
      {/* <Footer />  */}
      
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
