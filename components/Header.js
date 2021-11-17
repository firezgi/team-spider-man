import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

function Header({ navigation, setLoggedin }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("NewsFeed")}>
            <Image
              source={require("./img/marvelSpace.png")}
              style={{
                width: 200,
                height: 100,
                resizeMode: "contain",
              }}
            ></Image>
          </TouchableOpacity>
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
    top: 0,
    width: "100%",
    //borderWidth: 3,
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
    alignItems: "center",
  },
  navBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Header;
