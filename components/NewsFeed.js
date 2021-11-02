import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Button, Image } from "react-native";
import ThemeLoggedIn from "./ThemeLoggedIn";
import { posts, media } from "./WPAPI";

function NewsFeed({ navigation }) {
  console.log(media());
  console.log(posts());
  const [allPosts, setAllPosts] = useState([]);
  const [displayPicture, setDisplayPicture] = useState(false);
  useEffect(() => posts().then((data) => setAllPosts(data)), []);
  const [allmedias, setAllmedias] = useState([]);
  useEffect(() => media().then((data) => setAllmedias(data)), []);
    const [featureMedia, setFeaturedMedia] = useState("");
  const generatemedia = allmedias.map((med, index) => {
    return (
      <View key={index}>
        <Image style={{ width: 100, height: 50 }} source={med.source_url} />
      </View>
    );
  });

  const generatePosts = allPosts.map((posted, index) => {
    return (<>
    {()=>setFeatureMedia(posted.featured_media)}
    <View key={index}>
        <Text>{posted.title.rendered}</Text>
        {/* <Text>{posted.featured_media}</Text> */}
        {generatemedia}
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
    </>
      
    );
  });
  console.log(featureMedia);
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

export default NewsFeed;
