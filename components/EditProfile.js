import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import ThemeLoggedIn from "./ThemeLoggedIn";
import { WP_GET } from "./WPAPI";

export default function EditProfile({ navigation, userId = 1 }) {

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

    
    const [name, setName] = useState(userData.name);
    const [description, setDescription] = useState(userData.description);
    

    return (
        <ThemeLoggedIn navigation={navigation}>
            <View style={profileStyles.profileWrap}>
                <View style={profileStyles.profileLeft}>
                    <Image
                        style={profileStyles.profileImage}
                        source={buddypressData.avatar_urls?.full}
                    />
                    {/* MAKE Linkable */}
                    <Button
                        title="Change Profile Image"
                    />
                </View>
                <View style={profileStyles.profileRight}>
                    <Text>Name</Text>
                    <View style={profileStyles.nameWrap}>
                            <TextInput
                                style={profileStyles.nameInput}
                                value={userData.name}
                                onChangeText={setName}
                            />
                    </View>
                    <Text>About Me</Text>
                    <View style={profileStyles.descriptionWrap}>  
                        <TextInput
                            style={profileStyles.descriptionInput}
                            value={userData.description}
                            onChangeText={setDescription}
                            multiline={true}
                        />
                        {/* <Text>{userData.description}</Text> */}
                    </View>
                    <View style={profileStyles.buttonRow}>
                        <Button
                            style={profileStyles.btn}
                            title="Save Changes"
                        />
                        <Button
                            style={profileStyles.btn}
                            title="Cancel"
                            onPress={() =>navigation.navigate('Profile')}
                        />
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
        width: 960,
        margin: 'auto',
    },
    profileLeft: {
        width: '100%',
        padding: 10,
        margin: 5,
        alignItems: 'center',
    },
    profileRight: {
        // flex: 1,
        width: '100%',
        height: 400,
        padding:10,
        margin: 5,
    },
    profileImage: {
        width: 150,
        height: 150,
        margin: 5,
    },
    descriptionInput: {
        borderWidth: 2,
        minHeight: 100,
        padding: 10,
        margin: 10,
    },
    nameInput: {
        borderWidth: 2,
        padding: 10,
        margin: 10,
    },
    buttonRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});