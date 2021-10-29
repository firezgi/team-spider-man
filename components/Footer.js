import React from "react";
import { View, Text, Linking } from "react-native";

function Footer() {
  return (
    <View>
      <Text>Brought to you by your friendly neighborhood team-spider-man</Text>
      <View >
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("")}
        >
          About
        </Text>
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("")}
        >
          Rules
        </Text>
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("")}
        >
          Contact
        </Text>
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          Terms
        </Text>
      </View>
      <a>©2021 MarvelSpace. All Rights Reserved.</a>
    </View>
  );
}

export default {Footer};
