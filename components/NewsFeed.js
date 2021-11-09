import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Image,
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
      <>
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
      </>
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
      <View>
        {generatePosts}
        {newPosts}
        <View style={styles.contentContainer}>
        <TextInput
          // style={{
          //   width:"50%",
          //   borderColor: "gray",
          //   borderWidth: 2,
          //   borderRadius:5,
          //   margin: "20px",
          // }}
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
    //flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    width: "50%",
    backgroundColor: "gray",
    margin: 10,
    // border: "black solid 2px",
    textAlign: "center",
    // borderRadius: "5px",
  },
  contentContainer: {
    alignItems: "center",
    // height:20
  },
  buttons: {
    flexDirection: "row",
    width: "50%",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 2,
    margin: 2,
    width: "13%",
    height: 20,
    borderRadius:5,
  },
});

export default NewsFeed;
