import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function Footer({ navigation }) {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>Brought to you by your friendly neighborhood team-spider-man</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-around" ,}}>
        <Text style={Styles.blue} onPress={() => navigation.navigate("")}>
          About
        </Text>
        <Text style={Styles.blue} onPress={() => navigation.navigate("")}>
          Rules
        </Text>
        <Text style={Styles.blue} onPress={() => navigation.navigate("")}>
          Contact
        </Text>
        <Text style={Styles.blue} onPress={() => navigation.navigate("")}>
          Terms
        </Text>
      </View>
      <View style={Styles.textAlign}>
        <Text>©2021 MarvelSpace. All Rights Reserved.</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  blue: {
    // color: "blue",
  },
  centerText: {
    // textAlign: "center",
  }
});
