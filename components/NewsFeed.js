import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,TextInput, Button } from "react-native";
const NewsFeed=({posts})=> {
    const [allPosts, setAllPosts] = useState([]);
  useEffect(() => posts().then((data) => setAllPosts(data)), []);
  console.log(allPosts);
  
    return (
        <View>
            {allPosts.map((allpost, index) => (
        <Text key={allPosts.id}>{allpost.title.rendered}
        <View style={{flexDirection:'Row'}}>
      <Button style={{margin:10}}
        title="like"
        // onPress={() => {function}} //change "function" with your function for the button pressing
      />
      
      <Button
        title="dislike"
    //     // onPress={() => {function}} //change "function" with your function for the button pressing
      />
      </View>
      
        </Text>
        
      ))}
         {/* {allPosts.map((allpost, index) => (
        <Text key={allPosts.id}>{allPosts.id}</Text>
      ))} */}
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 ,margin:'20px'}}
        onChangeText={(text) => onChangeText(text)}
        placeholder="What is in your mind"
        //   value={value}
      />
      
        </View>
    )
}

export default NewsFeed
