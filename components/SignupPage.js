import React, {useState} from 'react';
import { View, Button, Text, StyleSheet, TextInput, Linking } from "react-native";
import ThemeLoggedOut from './ThemeLoggedOut';
import NewsFeed from './NewsFeed';

function SignupPage ({ navigation }) {
    return (
        <ThemeLoggedOut navigation={navigation}>
            <View style={styles.resetPage}>
                <Text>Enter your first name</Text>
                <TextInput 
                    style={styles.input}
                />
                <Text>Enter your last name</Text>
                <TextInput 
                    style={styles.input}
                />
                <Text>Enter a Username</Text>
                <TextInput 
                    style={styles.input}
                />
                <Text>Enter a valid email address</Text>
                <TextInput 
                    style={styles.input}
                />
                <Text>Enter a unique password</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                />
                <Text>Re-enter your password</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                />
                <Button
                title="Sign Up!"
                onPress={() =>navigation.navigate('NewsFeed')}
                />
            </View>
        </ThemeLoggedOut>
    )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    resetPage: {
        
      }
  });

export default SignupPage;