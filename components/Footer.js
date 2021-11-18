import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function Footer({ navigation }) {
  return (
    <View style={styles.footerMain}>
      <Text style={{ textAlign: "center", color: "#fff" }}>Brought to you by your friendly neighborhood team-spider-man</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-around" ,}}>
        <Text style={styles.white} onPress={() => navigation.navigate("About")}>
          About
        </Text>
        <Text style={styles.white} onPress={() => navigation.navigate("Rules")}>
          Rules
        </Text>
        <Text style={styles.white} onPress={() => navigation.navigate("Contact")}>
          Contact
        </Text>
        <Text style={styles.white} onPress={() => navigation.navigate("Terms")}>
          Terms
        </Text>
      </View>
      <View style={styles.centerText}>
        <Text style={styles.centerText}>©2021 MarvelSpace. All Rights Reserved.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  white: {
    color: "#000",
    paddingTop: 10,
    paddingBottom: 10,
  },
  centerText: {
    textAlign: "center",
    color: "#fff",
  },
  footerMain: {
    borderTopWidth: 3,
    backgroundColor: "#16769E",
    padding: 5,
    // marginTop: 'auto',
  }
});
