import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//components
import ProfilePage from "./components/ProfilePage";
import PhotoGallery from "./components/PhotoGallery";
import Messages from "./components/Messages";
import NewsFeed from "./components/NewsFeed";
import LoginPage from "./components/LoginPage";
import ResetPassword from "./components/ResetPassword";
import SignupPage from "./components/SignupPage";
// import Friends from "./components/Friends";
import EditProfile from "./components/EditProfile";
import Search from "./components/Search";
import AboutPage from './components/AboutPage';
import Rules from './components/RulesPage';
import Contact from './components/ContactPage';
import Terms from './components/TermsPage';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatLists/> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="Login" component={LoginPage} /> */}
          {/* <Stack.Screen name="SignupPage" component={SignupPage} /> */}
          {/* <Stack.Screen name="NewsFeed" component={NewsFeed} /> */}
          {/* <Stack.Screen name="ResetPassword" component={ResetPassword} /> */}
          {/* <Stack.Screen name="Friends" component={Friends} /> */}
          <Stack.Screen name="Profile" component={ProfilePage} />
          {/* <Stack.Screen name="Messages" component={Messages} /> */}
          {/* <Stack.Screen name="PhotoGallery" component={PhotoGallery} /> */}
          <Stack.Screen name="EditProfile" component={EditProfile} />
          {/* <Stack.Screen name="Search" component={Search} /> */}
          <Stack.Screen name="About" component={AboutPage} />
          <Stack.Screen name="Rules" component={Rules} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Terms" component={Terms} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ed1d24",
  },
});
