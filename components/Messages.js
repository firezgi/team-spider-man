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
  TouchableOpacity,
} from "react-native";
import ThemeLoggedIn from "./ThemeLoggedIn";
import { WP_GET,WP_POST  } from "./WPAPI";


export default function Messages({ navigation, storedToken, setLoggedin }) {
  const [messageArr, setMessageArr] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  
  useEffect(() => {
    if (loading) {
      WP_POST(
        "messages",
        "",
        {
          context: "edit",
          subject: "Message from Spider man",
          message: `${messageInput}`,
          slug: `${new Date()}`,
          recipients: [4, 13],
        },
        storedToken
      ).then((data) => {
        data.data?.status !== 200 ? formError(data) : setMessageInput("");
        setLoading(false);
      });
    }
    WP_GET("members").then((data) => {
      setUserData(data);
    });
    WP_GET("messages", "", storedToken).then((data) => {
      setMessageArr(data);
    });
  }, [loading]);
  console.log(messageArr);
  const onSubmit = () => {
    setLoading(true);
  };
  const formError = (data) => {
    const regex = /<[^>]*>/g;
    data?.message ? setError(data.message.replaceAll(regex, "")) : "";
  };
  // console.log(messageArr);
  const generateChat = messageArr.map((message, index) => (
    <View key={index}>
      <Text>{message.excerpt.rendered}</Text>
    </View>
  ));
  const userList = userData.map((user, index) => (
    <View key={index}>
      <Pressable onPress={() => setSelectedUser(user)}>
        <Text>{user.name}</Text>
      </Pressable>
    </View>
  ));

  const MessageWindow = () => {
    return selectedUser ? (
      <View>
        <Image
          style={styles.image}
          source={{ uri: selectedUser.avatar_urls?.["24"] }}
        />
        <ScrollView>{messageArr ? generateChat : null}</ScrollView>
        <Text>{selectedUser.name}</Text>
      </View>
    ) : null;
  };

  return (
    <ThemeLoggedIn navigation={navigation} setLoggedin={setLoggedin}>
      <View>
        <View style={styles.sidebar}>{userList}</View>
        <View style={styles.container}>{MessageWindow()}</View>

        {storedToken ? (
          <View style={styles.contentContainer}>
            <TextInput
              style={styles.postsButtons}
              onChangeText={setMessageInput}
              placeholder="What is on your mind?"
              onSubmitEditing={onSubmit}
              multiline={true}
              numberOfLines={4}
              value={messageInput}
            />
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
              <Text>Send</Text>
            </TouchableOpacity>
            <Text>{loading && "Loading"}</Text>
            <Text>{error}</Text>
          </View>
        ) : null}
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
  textContainer: {
    backgroundColor: "#fff",
    justifyContent: "center",
    width: "50%",
    backgroundColor: "gray",
    margin: 10,
    textAlign: "center",
  },
  contentContainer: {
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 2,
    margin: 2,
    width: "15%",
    height: 20,
  },
  postsButtons: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 20,
  },
});
