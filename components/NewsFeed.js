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

function NewsFeed({ navigation, storedToken }) {
  const [allPosts, setAllPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [error, setError] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

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
        data.data?.status !== 200
          ? formError(data)
          : setNewPostText("");
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
    // setNewPostText("");
  };

  const formError = (data) => {
    const regex = /<[^>]*>/g;
    data?.message ? setError(data.message.replaceAll(regex, "")) : "";
  };
  const memberById = (id) => {
    return members.find((member) => member.id === id);
  };
  const regex = /<[^>]*>/g;
  const likeHandler = (index) => {
    // setAllPosts(allPosts.find(post => post[i] === index));
    setLikeCount(() => likeCount + 1);
  };

  const dislikeHandler = (index) => {
    // setAllPosts(allPosts.filter((count, i) => i === index));
    setDislikeCount((index) => dislikeCount + 1);
  };

  const generatePosts = allPosts.map((posted, index) => {
    return (
      <View key={index} style={{ marginTop: 15 }}>
        <View style={styles.contentContainer}>
          <Image
            style={{ width: 90, height: 90 }}
            source={{ uri: memberById(posted.author)?.avatar_urls.full }}
          />
          <Text>{memberById(posted.author)?.name}</Text>
          <Text>{posted.date}</Text>
          <Text style={styles.textContainer}>
            {posted.excerpt.rendered?.replace(regex, "")}
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={likeHandler}>
              <Text>Like</Text>
            </TouchableOpacity>
            <Text>{likeCount}</Text>

            <TouchableOpacity style={styles.button} onPress={dislikeHandler}>
              <Text>Dislike</Text>
            </TouchableOpacity>
            <Text>{dislikeCount}</Text>
          </View>
        </View>
      </View>
    );
  });

  return (
    <ThemeLoggedIn navigation={navigation}>
      <View style={styles.newsfeed}>
        {generatePosts}

        {storedToken ? (
          <View style={styles.contentContainer}>
            <TextInput
              style={styles.postsButtons}
              onChangeText={setNewPostText}
              placeholder="What is on your mind?"
              onSubmitEditing={onSubmit}
              multiline={true}
              numberOfLines={4}
              value={newPostText}
            />
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
              <Text>Post</Text>
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
  textContainer: {
    justifyContent: "center",
    width: "80%",
    margin: 10,
    textAlign: "center",
  },
  contentContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderWidth: 2,
    width: "100%",
    margin: "auto",
    padding: 8,
    marginBottom: 10,
    borderRadius: 10
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
  newsfeed: {
    width: "90%",
    margin: "auto",
    marginBottom: 30,
    marginTop: 30,
    padding: 10,
    borderRadius: 10
  }
});

export default NewsFeed;