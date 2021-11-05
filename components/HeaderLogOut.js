import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  Linking,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

function HeaderLogOut ({ navigation }) {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View
            style={styles.logoContainer}
            onPress={() => navigation.navigate("NewsFeed")}
          >
            <Image
              source={require('./img/marvelSpace.png')}
              style={{ 
                flex: 1, 
                width: 200, 
                height: 100, 
                resizeMode: 'contain',
              }}>
              </Image>
          </View>
          <View style={styles.loginLink}>
            <Text onPress={() => navigation.navigate("SignupPage")}>Logout</Text>
            </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    headerContainer: {
      display: "flex",
      position: "top",
      width: "100%",
      borderWidth: 1,
    },
    header: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      textAlign: "center",
      margin: 10,
      padding: 5,
      
    },
    logoContainer: {

    },
   
  });
  
  export default HeaderLogOut;
  