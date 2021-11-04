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
  return (
    <ThemeLoggedIn navigation={navigation}>
      <View>
        {generatePosts}

        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            margin: "20px",
          }}
          onChangeText={(text) => onChangeText(text)}
          placeholder="What is on your mind?"
          //   value={value}
        />
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
    border: "black solid 2px",
    textAlign: "center",
    borderRadius: "5px"
  },
  contentContainer: {
    alignItems: "center",
    // height:20
  },
  buttons:{
flexDirection:'row',
width:'50%',
alignText:'center'
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 2,
    margin:2,
    width:'15%',
    height:20

  },
});

export default NewsFeed;
