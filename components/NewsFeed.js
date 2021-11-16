import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ThemeLoggedIn from "./ThemeLoggedIn";
import { WP_GET } from "./WPAPI";

function NewsFeed({ navigation }) {
  const [allPosts, setAllPosts] = useState([]);
  const [displayPicture, setDisplayPicture] = useState(false);
  const [postArr, setPostArr] = useState([{ post: "New to this app" }]);
  const [inputToPost, setInputToPost] = useState("");

  useEffect(() => {
    WP_GET("posts").then((data) => {
      setAllPosts(data);
    });
  }, []);

  const generatePosts = allPosts.map((posted, index) => {
    let excerpt = posted.excerpt.rendered;
    excerpt = excerpt.replace("<p>", "");
    excerpt = excerpt.replace("</p>", "");

    

    return (
        <View key={index} style={styles.contentContainer}>
          <Text style={styles.textContainer}>{excerpt}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={""}>
              <Text>Like</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={""}>
              <Text>Dislike</Text>
            </TouchableOpacity>
            <Text> posted in {posted.date}</Text>
            <Text> by {posted.author}</Text>
            
          </View>
        </View>
    );
  });
  const deletePost = (index) => {
    setPostArr(postArr.filter((text, selected) => selected != index));
  };

  const sendPost = () => {
    setPostArr([...postArr, { post: inputToPost }]);
    setInputToPost("");
  };
  const newPosts= postArr.map((text, index) => (
    <View style={styles.contentContainer}key={index}>
      <Text style={styles.textContainer}>{text.post}</Text>
      <TouchableOpacity key={index} style={styles.button} onPress={() => deletePost(index)}>
              <Text>Delete</Text>
            </TouchableOpacity>
    
    </View>
  ));
  
  return (
    <ThemeLoggedIn navigation={navigation}>
      <View style={styles.newsfeed}>
        {generatePosts}
        {newPosts}
        <View style={styles.contentContainer}>     
        <TextInput
          style={styles.postsButtons}
          onChangeText={(inputToPost) => setInputToPost(inputToPost)}
          placeholder="What is on your mind?"
          onSubmitEditing={sendPost}
          value={inputToPost}
        />
        <TouchableOpacity style={styles.button} onPress={sendPost}>
              <Text>Post</Text>
            </TouchableOpacity>        
        </View>
        
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
  buttons:{
    flexDirection:'row',
    width:'50%',
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 2,
    margin:2,
    width:'15%',
    height:20
  },
  postsButtons: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 20,
  },
  newsfeed: {
    // backgroundColor: "#fff",
    // borderWidth: 3,
    width: "90%",
    margin: "auto",
    marginBottom: 30,
    marginTop: 30,
    padding: 10,
    borderRadius: 10
  }
});

export default NewsFeed;
