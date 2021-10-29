import React from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export function ProfilePage() {
    return (
        <View style={profileStyles.profileWrap}>
            <View style={profileStyles.profileLeft}>
                <Image
                    style={profileStyles.profileImage}
                    source={require('../assets/profile.webp')}
                />
                <View style={profileStyles.nameWrap}>
                    <Text>Wolverine</Text>
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
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatibus, incidunt obcaecati modi ex magnam minus suscipit et cum odit repudiandae iure praesentium nulla aperiam! Minus delectus modi ipsa alias.</Text>
                </View>
            </View>
        </View>
    )
}

const profileStyles = StyleSheet.create({
    profileWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        maxWidth: '960px',
        // borderWidth: '1px',
        // borderColor: 'red',
        // borderStyle: 'solid',
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