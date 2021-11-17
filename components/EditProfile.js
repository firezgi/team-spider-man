import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import ThemeLoggedIn from "./ThemeLoggedIn";
import { WP_GET, WP_POST } from "./WPAPI";


export default function EditProfile({ navigation, storedToken, setLoggedin }) {
    const tokenParse = function (token) {
        let base64Url = token.split('.')[1];
        let decoded = JSON.parse(atob(base64Url));
    
        return decoded["data"].user.id;
    };
    const userId = tokenParse(storedToken);

    const [usersName, setUsersName] = useState('');
    const [description, setDescription] = useState('');

    const [buddypressData, setBuddypressData] = useState([]);
    useEffect(() => WP_GET("members", `/${userId}`)
                    .then(
                        (data) => {
                            setBuddypressData(data);
                            setUsersName(data.name);
                        }
                    ), []);

    const [userData, setUserData] = useState([]);
    useEffect(
        () => WP_GET("users", `/${userId}`)
                .then((data) => {
                    setUserData(data);
                    setDescription(data.description);
                }), []);

    return (
        <ThemeLoggedIn navigation={navigation} setLoggedin={setLoggedin}>
            <View style={profileStyles.profileWrap}>
                <View style={profileStyles.profileLeft}>
                    <Image
                        style={profileStyles.profileImage}
                        source={{uri: buddypressData.avatar_urls?.full}}
                    />
                </View>
                <View style={profileStyles.profileRight}>
                    <Text>Name</Text>
                    <View style={profileStyles.nameWrap}>
                            <TextInput
                                style={profileStyles.nameInput}
                                value={usersName}
                                onChangeText={text => setUsersName(text)}
                            />
                    </View>
                    <Text>About Me</Text>
                    <View style={profileStyles.descriptionWrap}>
                        <TextInput
                            style={profileStyles.descriptionInput}
                            value={description}
                            onChangeText={text => (setDescription(text))}
                            multiline={true}
                        />
                    </View>
                    <View style={profileStyles.buttonRow}>
                        <TouchableOpacity
                            style={profileStyles.saveBtn}
                            // onPress={}
                        >
                            <Text style={profileStyles.saveText}>Save Changes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={profileStyles.cancelBtn}
                            onPress={() =>navigation.navigate('Profile')}
                        >
                            <Text style={profileStyles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ThemeLoggedIn>
    )
}

const profileStyles = StyleSheet.create({
    profileWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        margin: 'auto',
    },
    profileLeft: {
        width: '100%',
        padding: 10,
        margin: 5,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderRadius: 10
    },
    profileRight: {
        // flex: 1,
        width: '100%',
        height: 400,
        padding: 10,
        margin: 5,
        backgroundColor: '#fff',
        borderWidth: 3,
        borderRadius: 10
    },
    profileImage: {
        width: 150,
        height: 150,
        margin: 5,
    },
    descriptionInput: {
        borderWidth: 2,
        minHeight: 150,
        padding: 10,
        margin: 10,
    },
    nameInput: {
        borderWidth: 2,
        padding: 10,
        margin: 10,
    },
    buttonRow: {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-around",
    },
    saveBtn: {
        backgroundColor: "#841584",
        padding: 10
    },
    saveText: {
        color: "#fff",
    },
    cancelBtn: {
        backgroundColor: "#16769E",
        padding: 10      
    },
    cancelText: {
        color: "#fff",
    },
});