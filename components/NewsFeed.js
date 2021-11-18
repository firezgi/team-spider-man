import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import ThemeLoggedIn from "./ThemeLoggedIn";
import { WP_GET, WP_POST } from "./WPAPI";

function NewsFeed({ navigation, storedToken, setLoggedin }) {
  const [allPosts, setAllPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [error, setError] = useState("");
  //const [likeCount, setLikeCount] = useState(0);
  //const [dislikeCount, setDislikeCount] = useState(0);

  useEffect(() => {
    if (loading) {
      WP_POST(
        "posts",
        "",
        {
          content: `${newPostText}`,
          status: "publish",
          title: `${new Date()}`,
          slug: `${new Date()}`,
        },
        storedToken
      ).then((data) => {
        data.data?.status !== 200 ? formError(data) : setNewPostText("");
        setLoading(false);
      });
    }

    WP_GET("posts").then((data) => {
      setAllPosts(data);
    });

    WP_GET("members").then((data) => {
      setMembers(data);
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
    return members.find((member) => member.id === id);
  };
  const regex = /<[^>]*>/g;


  const generatePosts = allPosts.map((posted, index) => {
    return (
      <View key={index} style={{ marginTop: 15 }}>
        <View style={styles.contentContainer}>
          <Image
            style={{ 
              width: 90, 
              height: 90,
              borderWidth: 3,
              borderRadius: 10,
              }}
            source={{
              uri: memberById(posted.author)?.avatar_urls.full.startsWith("https:")
                ? memberById(posted.author)?.avatar_urls.full
                : "https://www.gravatar.com/avatar/?d=identicon",
            }}
          />
          <Text style={styles.memberName}>{memberById(posted.author)?.name}</Text>
          <Text>{posted.date}</Text>
          <Text style={styles.textContainer}>
            {posted.excerpt.rendered?.replace(regex, "")}
          </Text>
        </View>
      </View>
    );
  });

  return (
    <ThemeLoggedIn navigation={navigation} setLoggedin={setLoggedin}>
      <View>
        {generatePosts}

        {storedToken ? (
          <View style={styles.contentContainer}></View>) : null}
      </View> 
      <View style={styles.postContainer}>
          <TextInput
            style={styles.postTextInput}
            onChangeText={setNewPostText}
            placeholder="What is on your mind?"
            onSubmitEditing={onSubmit}
            multiline={true}
            numberOfLines={4}
            value={newPostText}
          />
          <TouchableOpacity style={styles.postButton} onPress={onSubmit}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
          <Text>{loading && "Loading"}</Text>
        <Text>{error}</Text>
        </View>
    </ThemeLoggedIn>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    flexWrap: 'wrap',
    width: "80%",
    margin: 10,
    textAlign: "center",
  },
  contentContainer: {
    backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: "center",
    borderWidth: 3,
    width: "80%",
    margin: "auto",
    padding: 8,
    marginBottom: 10,
    borderRadius: 10,
  },
  memberName:{
    fontWeight: "bold",
    margin: 10,
  },
  postContainer:{
    alignItems: "center",
  },
  postButton: {
    alignItems: "center",
    backgroundColor: "#16769E",
    borderRadius: 7,
    borderWidth: 3,
    margin: 5,
    width: "15%",
    height: 25,
  },
  postButtonText: {
    color: '#fff',
  },
  postTextInput: {
    backgroundColor: '#fff',
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 10,
    width: "50%",
  },
  postsButtons: {
    height: 40,
    borderColor: "purple",
    borderWidth: 1,
    margin: 20,
  },
});

export default NewsFeed;