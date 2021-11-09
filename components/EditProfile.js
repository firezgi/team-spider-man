import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import ThemeLoggedIn from "./ThemeLoggedIn";
import { WP_GET } from "./WPAPI";

export default function EditProfile({ navigation, userId = 1 }) {

    const [usersName, setUsersName] = useState(userName);
    const [description, setDescription] = useState('');

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
                        console.log(userData.name)
                    }), []);
                    const userName = userData.name;

    return (
        <ThemeLoggedIn navigation={navigation}>
            <View style={profileStyles.profileWrap}>
                <View style={profileStyles.profileLeft}>
                    <Image
                        style={profileStyles.profileImage}
                        source={{uri: buddypressData.avatar_urls?.full}}
                    />
                    <Button
                        title="Change Profile Image"
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
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'flex-start',
        // width: 960,
        // margin: 'auto',
    },
    profileLeft: {
        // width: '100%',
        // padding: 10,
        // margin: 5,
        // alignItems: 'center',
    },
    profileRight: {
        // flex: 1,
        // width: '100%',
        // height: 400,
        // padding: 10,
        // margin: 5,
    },
    profileImage: {
        // width: 150,
        // height: 150,
        // margin: 5,
    },
    descriptionInput: {
        // borderWidth: 2,
        // minHeight: 100,
        // padding: 10,
        // margin: 10,
    },
    nameInput: {
        // borderWidth: 2,
        // padding: 10,
        // margin: 10,
    },
});