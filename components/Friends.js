import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import ThemeLoggedIn from './ThemeLoggedIn'
import { users } from './WPAPI'


function Friends({ navigation }) {
    console.log(users())
    const [friendsArray, setFriendsArray] = useState([]);

    useEffect(() => {
        users()
        .then((data) => setFriendsArray(data))
    },[])
    console.log(friendsArray);

    const generateFriendList = friendsArray.map()

    return (
        <ThemeLoggedIn navigation={navigation}>
            <View styles={styles.friendsMainContainer}>
                <View style={styles.friendSearchBar}>
                    <TextInput style={{ height: 40, borderColor: 'black', borderWidth: 1, marginRight:10 }}
                        defaultValue=""
                    />
                    <Button
                        onPress={''}
                        title="Find Friends"
                        color="#841584"
                        style={{height: 20}}
                    />

                <View style={styles.friendListContainer}>

                </View>    
            </View>
            </View>
        </ThemeLoggedIn>
    )
}
const styles = StyleSheet.create({
    friendsMainContainer: {
      flex: 1,
      backgroundColor: "#fff",
    },
    friendSearchBar: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
      },
  });

export default Friends
