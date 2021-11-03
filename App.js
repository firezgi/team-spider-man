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
import { posts, users } from "./components/WPAPI";

const Stack = createNativeStackNavigator();

export default function App() {
  // posts();
  // users();
  // const[user,setUser]=useState([])
  // useEffect(() => users().then((data) => setUser(data)), []);
  // console.log(user);

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
          {/* <Stack.Screen name="Profile" component={ProfilePage} /> */}
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="PhotoGallery" component={PhotoGallery} />
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
