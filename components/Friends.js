import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text, StyleSheet, Image,} from 'react-native';
import ThemeLoggedIn from './ThemeLoggedIn';
import { WP_GET } from './WPAPI';

function Friends({ navigation }) {

    const [friends,setFriends] = useState([]);    

    //fetching all members from Buddypress members endpoint
    useEffect(() => {
        WP_GET('members')
        .then((data) => {
            setFriends(data);
            console.log(data);
        });
    }, []);

    const generateFriendList = friends.map((friends, index) => {
        return (
            <View
                style={styles.friendCard}
                key={index}
            >
                <View style={styles.namePhotoContainer}>
                    <Image
                    style={styles.friendImage}
                    source={{uri: friends.avatar_urls.thumb}}
                    />
                    <Text style={styles.friendName}>{friends.name}</Text>
                </View>           
            </View>
        )
    })

    return (
        <ThemeLoggedIn navigation={navigation}>
            <View styles={styles.friendsMainContainer}>
                <View style={styles.friendsTitle}>
                    <Text>My Friends</Text>
                </View>
                <View style={styles.friendListContainer}>
                    {generateFriendList}
                </View>
            </View>
        </ThemeLoggedIn>
    )
}

const styles = StyleSheet.create({
    friendsMainContainer: {
        flex: 1,
    },
    friendCard: {
        flexDirection: 'column',
        justifyContent: 'center',
        minWidth: 250,
        maxWidth: 250,
        minHeight: 100,
        margin: 10,
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    friendsTitle:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
    friendListContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    friendImage: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 3,
    },
    friendName: {
        flexDirection: 'row',
        padding: 10,
        alignContent:'flex-start',
        fontWeight: 'bold',
    },
    namePhotoContainer: {
        flexDirection: 'row',
    },
});

export default Friends;