import React, {useState} from 'react';
import { View, Button, Text, StyleSheet, TextInput } from "react-native";
import Footer from './Footer';

const LoginPage = () => {
    return (
        <View style={styles.loginPage}>
            <Text style={styles.header}>MarvelSpace</Text>
                <View style={styles.login}>
                    <Text style={styles.usernameTitle}>Username</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.passwordTitle}>Password</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Button
                        title="Login"
                    />
                    <Text>reset password</Text>
                </View>
                <View style={styles.signupKey}>
                    <Button
                    style={styles.signupbutton}
                    title="Sign Up"
                    />
                </View>
                <Footer/>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    login:{
    },
    header:{
        // display: 'flex',
        // justifyContent: 'center',
    },
    usernameTitle:{
        // display: 'flex',
        // justifyContent: 'center',
    },
    passwordTitle:{
        // display: 'flex',
        // justifyContent: 'center',
    },
    loginPage:{
    },
    signupButton:{
    }
  });

export {LoginPage}