// import React from "react";
// import { View, TextInput, Button} from "react-native";
// import { SearchBar } from 'react-native-elements';
// import ThemeLoggedIn from './ThemeLoggedIn';

// function Messages({ navigation }) {

//   return (
//     <ThemeLoggedIn navigation={navigation}>
//     <View>
//       <SearchBar
//         placeholder="Search a friend"
//         // onChangeText={}
//         // value={}
//       />

//       <View style={{ flexDirection:"row",justifyContent:"space-evenly",margin:'20px'}}>
//       <TextInput
//         style={{ height: 40, borderColor: "gray", borderWidth: 1 ,margin:'20px'}}
//         onChangeText={(text) => onChangeText(text)}
//         placeholder="What is in your mind"
//         //   value={value}
//       />
//       <Button style={{ height: 20}}
//         title="Send"
//         // onPress={() => {function}} //change "function" with your function for the button pressing
//       />
//       </View>
//       <Button
//         title="Delete"
//         // onPress={() => {function}} //change "function" with your function for the button pressing
//       />
//     </View>
//     </ThemeLoggedIn>
//   );
// }

// export default Messages;

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import ThemeLoggedIn from "./ThemeLoggedIn";
import { WP_GET } from "./WPAPI";
export default function Messages({ navigation }) {
  const [messageArr, setMessageArr] = useState([{ message: "heeey :)" }]);
  const [messageInput, setMessageInput] = useState("");
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  useEffect(() => {
    WP_GET("users").then((data) => {
      setUserData(data);
    });
  }, [selectedUser]);
  console.log(userData);
  const sendMessage = () => {
    setMessageArr([...messageArr, { message: messageInput }]);
    setMessageInput("");
  };

  const deleteMessage = (index) => {
    setMessageArr(messageArr.filter((text, selected) => selected != index));
  };

  // click on name to get messages with specific id
  const userList = userData.map((user, index) => (
    <View key={index}>
      <Pressable onPress={() => setSelectedUser(user)}>
        <Text>{user.name}</Text>
      </Pressable>
    </View>
  ));

  const generateConversation = messageArr.map((text, index) => (
    <View key={index}>
      <Text>{text.message}</Text>
      <Button key={index} onPress={() => deleteMessage(index)} title="Delete" />
    </View>
  ));

  const MessageWindow = () => {
    return (
      selectedUser && (
        <View>
          <Image
            style={styles.image}
            source={{ uri: selectedUser.avatar_urls?.["24"] }}
          />
          <Text>{selectedUser.name}</Text>
          <ScrollView>{generateConversation}</ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(messageInput) => setMessageInput(messageInput)}
              onSubmitEditing={sendMessage}
              value={messageInput}
              placeholder="Write a message..."
            />
          </View>
          <Button onPress={sendMessage} title="Send" />
        </View>
      )
    );
  };

  return (
    <ThemeLoggedIn navigation={navigation}>
      <View>
        <View style={styles.sidebar}>{userList}</View>
        <View style={styles.container}>{MessageWindow()}</View>
      </View>
    </ThemeLoggedIn>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sidebar: {
    float: "left",
  },
  image: {
    height: 24,
    width: 24,
  },
});
