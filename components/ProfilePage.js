import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

export function ProfilePage() {
    return (
        <View style={profileStyles.profileWrap}>
            <View style={profileStyles.profileLeft}>
                <View style={profileStyles.nameWrap}>
                    <Text>Name</Text>
                </View>
                <View style={profileStyles.profileImageWrap}>
                    <Image
                        source={'https://picsum.photos/200'}
                    />
                </View>
                <View style={profileStyles.locationWrap}>
                    <Text>City:</Text>
                </View>
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
    },
    profileLeft: {
        width: '40%',
        height: 400,
        borderWidth: '1px',
        borderColor: '#000',
        borderStyle: 'solid',
        padding: '10px',
        margin: '5px',
    },
    profileRight: {
        width: '40%',
        height: 400,
        borderWidth: '1px',
        borderColor: '#000',
        borderStyle: 'solid',
        padding: '10px',
        margin: '5px',
    },
    imageWrap: {
        
    }
});