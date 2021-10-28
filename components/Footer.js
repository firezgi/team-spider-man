import React from "react";
import { View, Text, Linking } from "react-native";

function Footer() {
  return (
    <View>
      <Text>Brought to you by your friendly neighborhood team-spider-man</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "blue" }} onPress={() => Linking.openURL("")}>
          About
        </Text>
        <Text style={{ color: "blue" }} onPress={() => Linking.openURL("")}>
          Rules
        </Text>
        <Text style={{ color: "blue" }} onPress={() => Linking.openURL("")}>
          Contact
        </Text>
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("")}
        >
          Terms
        </Text>
      </View>
      <View  style={{ textAlign:'center'}}>
      <Text>©2021 MarvelSpace. All Rights Reserved.</Text>
      </View>
      
    </View>
  );
}

export default Footer;
