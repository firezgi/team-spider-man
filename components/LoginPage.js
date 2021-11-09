import React, { useState } from "react";
import { View, Button, Text, StyleSheet, TextInput } from "react-native";
import ThemeLoggedOut from "./ThemeLoggedOut";

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
        <ThemeLoggedOut navigation={navigation}>
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
                            secureTextEntry={true}
                        />
                        <Button
                            title="Login"
                            // onPress={() => console.log("password: ", password, "username:", username)}
                            onPress={() => verifier()}
                        />
                        <Text onPress={() =>navigation.navigate('ResetPassword')}>reset password</Text>
                    </View>
                    <View style={styles.signupKey}>                    
                        <Button
                        style={styles.signupbutton}
                        title="Sign Up"
                        onPress={() =>navigation.navigate('SignupPage')}
                        />                    
                    </View>
            </View>
        </ThemeLoggedOut>
    )
}
const styles = StyleSheet.create({
    input: {
        // height: 40,
        // margin: 12,
        // borderWidth: 1,
        // padding: 10,
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

export default LoginPage;
