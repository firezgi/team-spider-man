import React, {useCallback, useState} from 'react';
import { View, Button, Text, StyleSheet, TextInput, Linking } from "react-native";
import { Link } from "react-router-dom";
import Footer from './Footer';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const finalUser = username;
    const finalPassword = password;

        
    return (
        <View style={styles.loginPage}>
            <Text style={styles.header}>MarvelSpace</Text>
                <View style={styles.login}>
                    <Text style={styles.usernameTitle}>Username</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setUsername}
                    />
                    {console.log(finalUser)}
                    <Text style={styles.passwordTitle}>Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                    />
                    {console.log(finalPassword)}
                    <Button
                        title="Login"
                    />
                    <Text onPress={() =>Linking.openURL('http://localhost:19006/#/resetpassword')}>reset password</Text>
                </View>
                <View style={styles.signupKey}>
                    
                    <Button
                    style={styles.signupbutton}
                    title="Sign Up"
                    onPress={() =>Linking.openURL('http://localhost:19006/#/signup')}
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