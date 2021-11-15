import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import ProfilePage from "./components/ProfilePage";
// import PhotoGallery from "./components/PhotoGallery";
// import Messages from "./components/Messages";
// import NewsFeed from "./components/NewsFeed";
// import LoginPage from "./components/LoginPage";
// import Friends from "./components/Friends";
// import Members from "./components/Members";


function Header({ navigation }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View
          style={styles.logoContainer}
          onPress={() => navigation.navigate("NewsFeed")}
        >
          <Image
            onPress={() => navigation.navigate("NewsFeed")}
            source={require("./img/marvelSpace.png")}
             style={
               {
               flex: 1,
               width: 200,
               height: 100,
               resizeMode: 'contain',
             }
             }
          ></Image>
        </View>
        <View style={styles.loginLink}>
          <Text onPress={() => navigation.navigate("SignupPage")}>Logout</Text>
        </View>
      </View>
      <View style={styles.navBar}>
        <Text onPress={() => navigation.navigate("NewsFeed")}>NewsFeed</Text>
        <Text onPress={() => navigation.navigate("Friends")}>Friends</Text> 
        <Text onPress={() => navigation.navigate("Profile")}>Profile</Text>
        <Text onPress={() => navigation.navigate("PhotoGallery")}>Photos</Text>
        <Text onPress={() => navigation.navigate("Messages")}>Messages</Text>
        <Text onPress={() => navigation.navigate("Search")}>Search</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
     display: "flex",
     position: "absolute",
     top: 0,
     width: "100%",
     borderWidth: 3,
     backgroundColor: '#'
  },
  header: {
     flex: 1,
     flexDirection: "row",
     justifyContent: "space-between",
     textAlign: "center",
     margin: 10,
     padding: 5,
  },
  logoContainer: {

  },
  navBar: {
     flex: 1,
     flexDirection: "row",
     justifyContent: "space-evenly",
     textAlign: "center",
     marginTop: 10,
  },
});

export default Header;
