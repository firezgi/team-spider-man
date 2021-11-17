import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import LoginPage from "./LoginPage";
import { NavigationContainer } from "@react-navigation/native";

function Header({ navigation, setLoggedin }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
      <View style={styles.logoutLink}>
            <Text 
            onPress={() => {
              setLoggedin(false);
              navigation.navigate("Login");
              }
            }
            >Logout</Text>
          </View>
      <View
          style={styles.logoContainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate("NewsFeed")}>
              <Image
                source={require("./img/marvelSpace.png")}
                style={
                  {
                  width: 200,
                  height: 100,
                  resizeMode: 'contain',
                }
                }
              ></Image>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.navBar}>
        <Text style={styles.navText} onPress={() => navigation.navigate("NewsFeed")}>NewsFeed</Text>
        <Text style={styles.navText} onPress={() => navigation.navigate("Friends")}>Friends</Text> 
        <Text style={styles.navText} onPress={() => navigation.navigate("Profile")}>Profile</Text>
        <Text style={styles.navText} onPress={() => navigation.navigate("PhotoGallery")}>Photos</Text>
        <Text style={styles.navText} onPress={() => navigation.navigate("Messages")}>Messages</Text>
        <Text style={styles.navText} onPress={() => navigation.navigate("Search")}>Search</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#16769E",
     display: "flex",
     top: 0,
     width: "100%",
     //borderWidth: 3,
     
  },
  header: {
    flex: 1,
    padding: 5,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutLink: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  navBar: { 
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    textAlign: "center",
    fontWeight: 'bold',
  },
  navText: {
    paddingTop: 25,
  },
});

export default Header;
