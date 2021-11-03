import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { media, users, members, WP_GET } from "./WPAPI";

export function ProfilePage() {

    // console.log(media()); <--- For test

    // media function from WPAPI wasn't working right
    // Currently is set up for testing
    // const images = () => {
    //     return fetch('https://jualuc1.dreamhosters.com/buddypress/v1')
    //         .then(response => response.json())
    //         .catch(error => error)
    // }
    // console.log(images()); <-- For testing

    let userId = 1;


    const [profileImage, setProfileImage] = useState([]);
    useEffect(() => media()
                    .then(
                        (data) => setProfileImage(data)
                    ), []);
    // console.log(profileImage); <-- For testing


    const getProfileImage = profileImage.filter(img => (img.author === userId));
    const imgData = getProfileImage.map(data => {
        return data.source_url;
    });
    const profileImg = imgData[0];
    console.log(getProfileImage);

    const [userData, setUserData] = useState([]);
    useEffect(() => users().then((data) => setUserData(data)), []);
    console.log(userData);

    const getUserData = userData.filter(user => (user.id === userId));
    const userDisplayName = getUserData.map(name => {
        return name.name;
    })

    const userDescription = getUserData.map(about => {
        return about.description;
    })


    return (
        <View style={profileStyles.profileWrap}>
            <View style={profileStyles.profileLeft}>
                <Image
                    style={profileStyles.profileImage}
                    source={profileImg}
                />
                <View style={profileStyles.nameWrap}>
                    <Text>{userDisplayName}</Text>
                </View>
                <View style={profileStyles.locationWrap}>
                    <Text>City: </Text>
                </View>
                <Button
                    style={profileStyles.editProfile}
                    title="Edit profile"
                />
            </View>
            <View style={profileStyles.profileRight}>
                <Text>About Me</Text>
                <View style={profileStyles.descriptionWrap}>
                    <Text>{userDescription}</Text>
                </View>
            </View>
        </View>
    )
}

const profileStyles = StyleSheet.create({
    profileWrap: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '960px',
        margin: 'auto',
    },
    profileLeft: {
        maxWidth: '250px',
        height: 400,
        borderWidth: '1px',
        borderColor: '#000',
        borderStyle: 'solid',
        padding: '10px',
        margin: '5px',
        alignItems: 'center',
    },
    profileRight: {
        flex: 1,
        height: 400,
        borderWidth: '1px',
        borderColor: '#000',
        borderStyle: 'solid',
        padding: '10px',
        margin: '5px',
    },
    profileImage: {
        width: '200px',
        height: '200px',
        borderRadius: '10px',
        margin: '5px',
    }
});