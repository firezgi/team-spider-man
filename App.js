import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import NavigationContainer from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfilePage } from './components/ProfilePage';
import PhotoGallery from "./components/PhotoGallery";
import Messages from "./components/Messages";
import NewsFeed from "./components/NewsFeed";
import  LoginPage  from "./components/LoginPage";
import  ResetPassword from "./components/ResetPassword";
import SignupPage from "./components/SignupPage";


const Stack = createNativeStackNavigator();

export default function App() {

  // const[user,setUser]=useState([])
  // useEffect(() => users().then((data) => setUser(data)), []);
  // console.log(user);

  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="Sign Up" component={SignupPage}/>
        <Stack.Screen name="Newsfeed" component={NewsFeed}/>
        <Stack.Screen name="Sign Up" component={SignupPage}/>
        <Stack.Screen name="Messages" component={Messages}/>
        <Stack.Screen name="Sign Up" component={SignupPage}/>
        <Stack.Screen name="Photo Gallery" component={PhotoGallery}/>
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
}
);
