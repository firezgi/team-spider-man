import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Footer from './Footer';
import Header from "./Header";
import {posts} from './WPAPI'
const NewsFeed = () => {
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
    <View>
      <Header/>
      {generatePosts}
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          margin: "20px",
        }}
        onChangeText={(text) => onChangeText(text)}
        placeholder="What is in your mind"
        //   value={value}
      />
      <Footer/>
    </View>
  );
};

export default NewsFeed;
