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


export default function Messages({ navigation, storedToken, setLoggedin }) {
  const [messageArr, setMessageArr] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});


  useEffect(() => {
    WP_GET("members").then((data) => {
      setUserData(data);
    });
    WP_GET("messages", "", storedToken).then((data) => {
      setMessageArr([data]);
    });
  }, [selectedUser]);

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

  const generateConversation = messageArr.map((message, index) => (
    <View key={index}>
      {console.log(message[0])}
      <Text>{message[0]?.excerpt.rendered}</Text>
      <Button key={index} onPress={() => deleteMessage(index)} title="Delete" />
    </View>
  ));

  const MessageWindow = () => {
    return selectedUser ? (
      <View>
        <Image
          style={styles.image}
          source={{ uri: selectedUser.avatar_urls?.["24"] }}
        />

        <ScrollView>{messageArr ? generateConversation : null}</ScrollView>
        <Text>{selectedUser.name}</Text>
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
    ) : null;
  };

  return (
    <ThemeLoggedIn navigation={navigation} setLoggedin={setLoggedin}>
      <View>
        <View style={styles.sidebar}>{userList}</View>
        <View style={styles.container}>{MessageWindow()}</View>
      </View>
    </ThemeLoggedIn>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  sidebar: {
    // float: "left",
  },
  image: {
    // height: 24,
    // width: 24,
  },
});
