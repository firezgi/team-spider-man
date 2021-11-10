import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import ThemeLoggedOut from './ThemeLoggedOut';

const LoginPage = ({ navigation }) => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const checker = "root";

    // const verifier = () => {
    //     if (username == checker && password == checker)
    //     return (
    //         console.log('right credentials'),
    //         navigation.navigate('NewsFeed')
    //     )
    //         console.log('wrong credentials');
    // }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [token, setToken] = useState('');

    useEffect(
        () => {
        if(loading) {
            const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': `${username}`,
                'password': `${password}`
            })
            };
            
            fetch(`https://jualuc1.dreamhosters.com/wp-json/jwt-auth/v1/token`, options)
            .then(response => response.json())
            .then(data => {
                data.token 
                ? formSuccess(data)
                : formError(data)
            })
            }
        },
        [loading]
    );

    const onFormSubmit = () => {
    setError('');
    setLoading(true);
    };

    const formSuccess = (data) => {
        setToken(data.token);
        setLoggedin(true);
        setLoading(false);
        setUsername('');
        setPassword('');
        navigation.navigate('Newsfeed');
    }

    const formError = (data) => {
        const regex = /<[^>]*>/g;
        setLoading(false);
        setPassword('');
        data?.message 
            ? setError(
            data.message
            .replaceAll(regex, "")
        )
        :'';
        console.log(data);
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