import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Footer from "./Footer";
import HeaderLogOut from "./HeaderLogOut";

function ThemeLoggedOut({ children, navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderLogOut navigation={navigation} />

        {children}

        <Footer navigation={navigation} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
  },
});

export default ThemeLoggedOut;
