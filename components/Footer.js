import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

function Footer({ navigation }) {
  return (
    <View>
      <Text>Brought to you by your friendly neighborhood team-spider-man</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "blue" }} onPress={() => navigation.navigate("")}>
          About
        </Text>
        <Text style={{ color: "blue" }} onPress={() => navigation.navigate("")}>
          Rules
        </Text>
        <Text style={{ color: "blue" }} onPress={() => navigation.navigate("")}>
          Contact
        </Text>
        <Text style={{ color: "blue" }} onPress={() => navigation.navigate("")}>
          Terms
        </Text>
      </View>
      <View style={{ textAlign: "center" }}>
        <Text>©2021 MarvelSpace. All Rights Reserved.</Text>
      </View>
    </View>
  );
}

export default Footer;
