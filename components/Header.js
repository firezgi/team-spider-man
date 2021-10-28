import React from 'react'
import { StyleSheet, View, Text, Image, TextInput, Button, Linking } from 'react-native'


function Header() {

    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}> 
            <Image source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
              }}
              style={{ width: 50, height: 50,}}>
              </Image>
            <View style={styles.searchBar}>
              <TextInput style={{ height: 40, borderColor: 'black', borderWidth: 1, marginRight:10 }}
                defaultValue=""
              />
              <Button
                onPress={''}
                title="Search"
                color="#841584"
                style={{height: 20}}
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
            
            <View style={styles.loginLink}>
              <Text 
                onPress={() =>Linking.openURL('https://www.google.com/')}>Login/Logout 
              </Text>
            </View>
        </View>
        <View style={styles.navBar}>
          <Text 
            onPress={() =>Linking.openURL('https://www.google.com/')}>Profile</Text>
          <Text
            onPress={() =>Linking.openURL('https://www.google.com/')}>Photos</Text>
          <Text
            onPress={() =>Linking.openURL('https://www.google.com/')}>Messages</Text>
          <Text
            onPress={() =>Linking.openURL('https://www.google.com/')}>Search</Text>
          <Text
            onPress={() =>Linking.openURL('https://www.google.com/')}>NewsFeed</Text>
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
    navBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        textAlign: 'center',
    },
  searchBar: {
    flexDirection: 'row',
    height: 40,
},
  });


export default Header
