import React from 'react'
import { StyleSheet, View, ScrollView } from "react-native";
import Footer from "./Footer";

function ThemeLoggedOut({ children, navigation }) {
    return (
        <View style={styles.container}>
			<ScrollView>
				{/* <View>
					<HeaderLogPage navigation={navigation} />
				</View> */}

				{children}

				<View>
					<Footer navigation={navigation} />
				</View>
			</ScrollView>
		</View>
    )
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});

export default ThemeLoggedOut;
