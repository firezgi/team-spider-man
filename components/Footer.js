import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

function Footer({ navigation }) {
  return (
    <View>
      <Text>Brought to you by your friendly neighborhood Team Spiderman</Text>

      <View
      // style={{ flexDirection: "row", justifyContent: "space-around" ,}}
      >
        <Text onPress={() => navigation.navigate("")}>About</Text>
        <Text onPress={() => navigation.navigate("")}>Rules</Text>
        <Text onPress={() => navigation.navigate("")}>Contact</Text>
        <Text onPress={() => navigation.navigate("")}>Terms</Text>
      </View>
      <View
      // style={{ textAlign: "center" }}
      >
        <Text>©2021 MarvelSpace. All Rights Reserved.</Text>
      </View>
    </View>
  );
}

export default Footer;
