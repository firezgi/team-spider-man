import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Footer from "./Footer";


function ThemeLoggedOut({ children, navigation }) {
    return (
        <View style={styles.container}>
			<ScrollView style={styles.wrap}>
				{children}			
				<Footer style={styles.footer} navigation={navigation} />
			</ScrollView>
		</View>
    )
};
const styles = StyleSheet.create({
	container: {
		// display: "flex",
		// flexDirection: "column",
		// alignContent: "space-between",
		// flex: 1,
		backgroundColor: "#ed1d24",
		// paddingTop: 60,
        height: "100%",
		// borderWidth: 10,
	},
	wrap: {
		height: 1000,
	},
	footer: {
		position: "relative",
		margin: 130
	}
});

export default ThemeLoggedOut;
