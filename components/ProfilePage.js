import React from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import ThemeLoggedIn from './ThemeLoggedIn';
import { media } from "./WPAPI";

export default function ProfilePage({ navigation }) {
    return (
        <ThemeLoggedIn navigation={navigation}>
            <View style={profileStyles.profileWrap}>
                <View style={profileStyles.profileLeft}>
                    <Image
                        style={profileStyles.profileImage}
                        source={'https://jualuc1.dreamhosters.com/wp-json/wp/v2/users/1'}
                    />
                    <View style={profileStyles.nameWrap}>
                        <Text>Professor Xavier</Text>
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
        </ThemeLoggedIn>
    )
}

const profileStyles = StyleSheet.create({
    profileWrap: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '960px',
        margin: 'auto',
        // borderWidth: '1px',
        // borderColor: 'red',
        // borderStyle: 'solid',
    },
    profileLeft: {
        maxWidth: '250px',
        height: 400,
        // borderWidth: '1px',
        // borderColor: '#000',
        // borderStyle: 'solid',
        padding: '10px',
        margin: '5px',
        alignItems: 'center',
    },
    profileRight: {
        flex: 1,
        height: 400,
        // borderWidth: '1px',
        // borderColor: '#000',
        // borderStyle: 'solid',
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