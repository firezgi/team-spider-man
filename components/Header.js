import React from 'react'
import { StyleSheet, View, Text, Image, TextInput, Button, Linking } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";

function Header({ navigation }) {

    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}> 
        <View style={styles.logoContainer}
        onPress={() => navigation.navigate('NewsFeed')}>
            <Image source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }}
                style={{ width: 50, height: 50,}}>
            </Image>
            <Text>MarvelSpace</Text>
        </View>
            <View style={styles.searchBar}>
              <TextInput style={{ height: 40, borderColor: 'black', borderWidth: 1, marginRight:10 }}
                defaultValue=""
              />
              <Button
                onPress={''}
                title="Search"
                color="#841584"
                style={{height: 20}}
              />
            </View>
            
            <View style={styles.loginLink}>
              <Text 
                onPress={() =>navigation.navigate('SignupPage')}>Logout 
              </Text>
            </View>

        </View>

        <View style={styles.navBar}>
          <Text 
            onPress={() => navigation.navigate('NewsFeed')}>NewsFeed</Text>
          <Text
            onPress={() => navigation.navigate('https://www.google.com/')}>Friends</Text>
          <Text
            onPress={() =>navigation.navigate('Profile')}>Profile</Text>
          <Text
            onPress={() => navigation.navigate('PhotoGallery')}>Photo Gallery</Text>
          <Text
            onPress={() => navigation.navigate('Messages')}>Messages</Text>
        </View>
      </View>
    )  
};

const styles = StyleSheet.create({
    headerContainer: {
      display: 'flex',
      position: 'top',
      width: '100%',
      borderWidth: 1,
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'center',
      margin: 10,
      padding: 5,
    },
   logoContainer: {

    },
    navBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        marginTop: 10,
    },
  searchBar: {
    flexDirection: 'row',
    height: 40,
},
  });


export default Header;
