import React, {useState} from 'react';
import { View, Button, Text, StyleSheet, TextInput } from "react-native";
import Footer from './Footer';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <View style={styles.loginPage}>
            <Text style={styles.header}>MarvelSpace</Text>
                <View style={styles.login}>
                    <Text style={styles.usernameTitle}>Username</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setUsername}
                    />
                    <Text style={styles.passwordTitle}>Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                    />
                    <Button
                        title="Login"
                        onPress={() => console.log("password: ", password, "username:", username)}
                    />
                    <a href="www.google.com">reset password</a>
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