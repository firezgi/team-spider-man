import { StatusBar } from "expo-status-bar";
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import PhotoGallery from "./components/PhotoGallery";
import Messages from "./components/Messages";
import NewsFeed from "./components/NewsFeed";
import { LoginPage } from "./components/LoginPage";
import { ResetPassword } from "./components/ResetPassword";
import { SignupPage } from "./components/SignupPage";

export default function App() {


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
      </Switch>
    </HashRouter>
  );
}


