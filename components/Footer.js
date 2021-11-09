import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function Footer({ navigation }) {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>Brought to you by your friendly neighborhood team-spider-man</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-around" ,}}>
        <Text style={styles.blue} onPress={() => navigation.navigate("")}>
          About
        </Text>
        <Text style={styles.blue} onPress={() => navigation.navigate("")}>
          Rules
        </Text>
        <Text style={styles.blue} onPress={() => navigation.navigate("")}>
          Contact
        </Text>
        <Text style={styles.blue} onPress={() => navigation.navigate("")}>
          Terms
        </Text>
      </View>
      <View style={styles.textAlign}>
        <Text>©2021 MarvelSpace. All Rights Reserved.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blue: {
    // color: "blue",
  },
  centerText: {
    // textAlign: "center",
  }
});
