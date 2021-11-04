import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
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
import Friends from "./components/Friends";
import Practice from "./components/Practice";
// import Practice2 from "./components/Members";
import Members from "./components/Members";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="SignupPage" component={SignupPage} />
          <Stack.Screen name="NewsFeed" component={NewsFeed} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="Friends" component={Friends} />
          <Stack.Screen name="Profile" component={ProfilePage} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="PhotoGallery" component={PhotoGallery} />
          <Stack.Screen name="Members" component={Members} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
