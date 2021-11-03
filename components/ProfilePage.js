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
                            console.log('Buddypress data: ',data);
                        }
                    ), []);

    const [userData, setUserData] = useState([]);
    useEffect(() => WP_GET("users", `/${userId}`)
                    .then((data) => {
                        setUserData(data);
                        console.log('Wordpress user data: ',data);
                    }), []);
    

    return (
        <ThemeLoggedIn navigation={navigation}>
            <View style={profileStyles.profileWrap}>
                <View style={profileStyles.profileLeft}>
                    <Image
                        style={profileStyles.profileImage}
                        source={buddypressData.avatar_urls?.full}
                    />
                    <View style={profileStyles.nameWrap}>
                        <Text>{userData.name}</Text>
                    </View>
                    {/* MAKE Linkable */}
                    <Button
                        title="Edit Profile"
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
        alignItems: 'flex-start',
        width: '960px',
        margin: 'auto',
    },
    profileLeft: {
        width: '100%',
        borderWidth: '1px',
        borderColor: '#000',
        borderStyle: 'solid',
        padding: '10px',
        margin: '5px',
        alignItems: 'center',
    },
    profileRight: {
        // flex: 1,
        width: '100%',
        height: 400,
        borderWidth: '1px',
        borderColor: '#000',
        borderStyle: 'solid',
        padding: '10px',
        margin: '5px',
    },
    profileImage: {
        width: '150px',
        height: '150px',
        borderRadius: '10px',
        margin: '5px',
    }
});