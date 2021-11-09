import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity, FlatList } from 'react-native';
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
                <View style={styles.friendButtons}>

                {/* <TouchableOpacity 
                        style={styles.addFriendButton}
                        onPress={''}
                    >
                        <Text style={styles.friendText}>Add Friend</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity
                        style={styles.deleteFriendButton}
                        onPress={() => deleteFriend(index)}
                    >
                        <Text style={styles.friendText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    })
    
    const deleteFriend = (index) => {
        setFriends(
            friends.filter((friends, selected) => selected != index)
        );
    }

    return (
        <ThemeLoggedIn navigation={navigation}>
            <View styles={styles.friendsMainContainer}>
                <View style={styles.friendSearchBar}>
                    <TextInput
                        style={{ height: 40, borderColor: 'black', borderWidth: 1, marginRight:10 }}
                    />
                    <Button
                        onPress={''}
                        title="Find Friends"
                        color="#841584"
                        // style={{height: 20}}
                    />
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
        // flex: 1,
        // backgroundColor: 'black',
    },
    friendSearchBar: {
        // flexDirection: 'row',
        // height: 40,
        // justifyContent: 'center',
    },
    friendCard: {
        // flex:1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // minWidth: 250,
        // maxWidth: 250,
        // minHeight: 100,
        // margin: 10,
        // borderColor: 'black',
        // borderWidth: 3,
    },
    friendListContainer: {
        // flex: 1,
        // display: 'flex',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
    },
    friendImage: {
        // height: 50,
        // width: 50,
        // margin: 5,
    },
    friendName: {
        // flexDirection: 'row',
        // padding: 10,
        // alignContent:'flex-start',
    },
    // addFriendButton: {
    //     flexDirection: 'row',
    //     backgroundColor: 'blue',
    //     width: 80,
    //     height: 35,
    //     color:"white",
    //     borderRadius: 5,
    //     margin: 5,
    // },
    deleteFriendButton: {
        // flexDirection: 'row',
        // backgroundColor: 'gray',
        // width: 80,
        // height: 35,
        // color:"green",
        // borderRadius: 5,
        // margin: 5,
    },
    namePhotoContainer: {
        // flexDirection: 'row',
    },
    friendButtons: {
        // flexDirection: 'row',
        // margin: 4,
    },
    friendText: {
        // color: 'white',
        // padding: 5,
    },
});

export default Friends;