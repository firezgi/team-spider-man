import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import ThemeLoggedOut from './ThemeLoggedOut';

const LoginPage = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const checker = "root";

    const verifier = () => {
        if (username == checker && password == checker)
        return (
            console.log('right credentials'),
            navigation.navigate('NewsFeed')
        )
            console.log('wrong credentials');
    }

    return (
        <ThemeLoggedOut  navigation={navigation}>
            <View style={styles.loginPage}>
                <Image
                    style={{width: "100%", height: 64 }}
                    onPress={() => navigation.navigate("NewsFeed")}
                    source={require("./img/marvelSpace.png")}
                ></Image> 
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
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.signupButton}
                        onPress={() => verifier()}
                    >
                        <Text style={styles.white}>Login</Text>
                    </TouchableOpacity>
                    {/* <Button
                        title="Login"
                        // onPress={() => console.log("password: ", password, "username:", username)}
                        onPress={() => verifier()}
                    /> */}
                    <Text 
                        style={styles.resetText}
                        onPress={() =>navigation.navigate('ResetPassword')}>reset password</Text>
                </View>
                <View style={styles.signupKey}> 
                    <TouchableOpacity
                        style={styles.signupButton}
                        onPress={() =>navigation.navigate('SignupPage')}
                    >
                        <Text style={styles.white}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ThemeLoggedOut>
    )
}
const styles = StyleSheet.create({
    input: {
        margin: 12,
        borderWidth: 3,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        fontWeight: "bold",
    },
    login:{
        marginTop: 15
    },
    header:{
        // display: 'flex',
        // justifyContent: 'center',
    },
    usernameTitle:{
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        fontSize: 20,
    },
    passwordTitle:{
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        fontSize: 20,
    },
    resetText: {
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        fontSize: 20,
    },
    loginPage:{
        // flex: 1,
        height: 745,
        // backgroundColor: "#fff",
    },
    signupButton:{
        backgroundColor: "#16769E",
        padding: 10,
        alignItems: "center",
        margin: 12,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#000"
    },
    white: {
        color: "#fff",
    }
});

export default LoginPage;