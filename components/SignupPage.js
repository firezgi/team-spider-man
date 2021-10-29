import React, {useState} from 'react';
import { View, Button, Text, StyleSheet, TextInput } from "react-native";
import Footer from './Footer';

const SignupPage = () => {
    return (
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
            />
            <Text>Re-enter your password</Text>
            <TextInput 
                style={styles.input}
            />
            <Button
            title="Sign Up!"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  });

export {SignupPage}