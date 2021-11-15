import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";


function ThemeLoggedOut({ children, navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header navigation={navigation} />

        {children}

        <Footer navigation={navigation} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ed1d24",
		paddingTop: 60,
        height: "100%",
	},
});

export default ThemeLoggedOut;
