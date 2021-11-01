import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import ThemeLoggedIn from './ThemeLoggedIn';
import {posts} from './WPAPI'


function NewsFeed ({ navigation }) {
  console.log(posts())
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() =>posts().then((data) => setAllPosts(data)), []);
  console.log(allPosts);
  
  const generatePosts = allPosts.map((allpost,index) => {
    return (
      
      <View key={index}>
        <Text >{allpost.title.rendered}</Text>
          <View style={{ flexDirection: "Row" }}>
          <Button
            style={{ margin: 10 }}
            title="like"
            // onPress={() => {function}} //change "function" with your function for the button pressing
          />

          <Button
            title="dislike"
            //     // onPress={() => {function}} //change "function" with your function for the button pressing
          />
        </View>
      </View>
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
};

export default NewsFeed;
