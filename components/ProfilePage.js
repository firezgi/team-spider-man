import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import ThemeLoggedIn from "./ThemeLoggedIn";
import { WP_GET } from "./WPAPI";

export default function ProfilePage({ navigation, userId = 1 }) {

    const [buddypressData, setBuddypressData] = useState([]);
    useEffect(() => WP_GET("members", `/${userId}`)
                    .then(
                        (data) => {
                            setBuddypressData(data);
                        }
                    ), []);

    const [userData, setUserData] = useState([]);
    useEffect(() => WP_GET("users", `/${userId}`)
                    .then((data) => {
                        setUserData(data);
                    }), []);
    

    return (
        <ThemeLoggedIn navigation={navigation}>
            <View style={profileStyles.profileWrap}>
                <View style={profileStyles.profileLeft}>
                    <Image
                        style={profileStyles.profileImage}
                        source={{uri: buddypressData.avatar_urls?.full}}
                    />
                    <View style={profileStyles.nameWrap}>
                        <Text>{userData.name}</Text>
                    </View>
                    <Button
                        title="Edit Profile"
                        onPress={() =>navigation.navigate('EditProfile')}
                    />
                </View>
                <View style={profileStyles.profileRight}>
                    <Text>About Me</Text>
                    <View style={profileStyles.descriptionWrap}>
                        <Text>{userData.description}</Text>
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
    }
});