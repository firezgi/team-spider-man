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
  const [selectedUserId, setSelectedUserId] = useState("");
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
          recipients: [4,selectedUserId],
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
  const onSubmit = () => {
    setLoading(true);
  };
  const formError = (data) => {
    const regex = /<[^>]*>/g;
    data?.message ? setError(data.message.replaceAll(regex, "")) : "";
  };
  const memberById = (id) => {
    return userData.find((member) => member.id === id);
  };
  const generateChat = messageArr.map((message, index) => (
    <View key={index}>
      <Text>{message.excerpt.rendered}</Text>

      <Image
            style={{ width: 30, height: 30 }}
            source={{
              uri: memberById(message.last_sender_id)?.avatar_urls.full.startsWith(
                "https:"
              )
                ? memberById(message.last_sender_id)?.avatar_urls.full
                : "https://www.gravatar.com/avatar/?d=identicon",
            }}
          />
    
      <Text>sent by {memberById(message.last_sender_id)?.name}</Text>
      
    </View>
  ));
  const userList = userData.map((user, index) => (
    <View key={index}>
      <Pressable onPress={() => {
      setSelectedUserId(user.id);
      setSelectedUser(user)
      }
      }>
        <Text style={styles.singleListName}>{user.name}</Text>
      </Pressable>
      {console.log(selectedUserId)}
    </View>
  ));

  const MessageWindow = () => {
    return selectedUser ? (
      <View>
        <Image
          style={styles.image}
          source={{ uri: selectedUser.avatar_urls?.["24"] }}
        />
        <Text style={styles.singleUser}>{selectedUser.name}</Text>
        <ScrollView style={styles.messageContent}>{messageArr ? generateChat : null}</ScrollView>
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
  messageContent:{
    margin: 10, 
    borderRadius: 8,
    display: "flex",
    borderWidth: 3,
    backgroundColor: "#fff",
  },
  singleListName: {
    margin: 10,
    borderRadius: 10,
    display: "flex",
    borderWidth: 3,
    backgroundColor: "#fff",
    padding: 5,
  },
  singleUser: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 8,
    display: "flex",
    borderWidth: 3,
    backgroundColor: "#fff",
  },
  userList: {
    display: "flex",
    flexDirection: "row",


  },
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  sidebar: {
    flexWrap: 'wrap',
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    // borderWidth: 3,
    // backgroundColor: "#fff",
  },
  image: {
        // height: 50,
        // width: 50,
        // margin: 5,
        // borderRadius: 10,
        // borderColor: '#000',
        // borderWidth: 3,
  },
  textContainer: {
    backgroundColor: "#fff",
    justifyContent: "center",
    width: "50%",
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
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#16769E",
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
    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "black"
  },
});
