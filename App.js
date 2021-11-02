import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProfilePage } from './components/ProfilePage';
import { HashRouter, Switch, Route } from "react-router-dom";
import PhotoGallery from "./components/PhotoGallery";
import Messages from "./components/Messages";
import NewsFeed from "./components/NewsFeed";
import { LoginPage } from "./components/LoginPage";
import { ResetPassword } from "./components/ResetPassword";
import { SignupPage } from "./components/SignupPage";

export default function App() {
  // const[user,setUser]=useState([])
  // useEffect(() => users().then((data) => setUser(data)), []);
  // console.log(user);


  return (
    <HashRouter>
      <Switch>
        <Route path="/signin">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/photogallery">
          <PhotoGallery />
        </Route>
        <Route path="/newsfeed">
          <NewsFeed/>
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route path="/resetpassword">
          <ResetPassword />
        </Route>
        <Route path="/profilepage">
          <ProfilePage />
        </Route>
      </Switch>
    </HashRouter>
  );
}


