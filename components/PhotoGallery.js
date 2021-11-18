import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { WP_GET } from "./WPAPI";
import ThemeLoggedIn from "./ThemeLoggedIn";

function PhotoGallery({ navigation, setLoggedin }) {
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    WP_GET("media").then((data) => {
      setImageArray(data);
    });
  }, []);

  const generateGallery = imageArray.map((img, index) => {
    const imageWidth = 300;
    const imageHeight =
      (img.media_details.height / img.media_details.width) * imageWidth;

    return (
      <View key={index}>
        <Image
          style={{
            minWidth: imageWidth,
            minHeight: imageHeight,
            margin: 10,
            borderWidth: 3,
            borderRadius: 10,
          }}
          source={{ uri: img.source_url }}
        />
      </View>
    );
  });

  return (
    <ThemeLoggedIn navigation={navigation} setLoggedin={setLoggedin}>
      <View style={styles.galleryMainContainer}>
        <Text style={styles.photoTitle}>Your Photos</Text>

        <ScrollView style={styles.scrollViewContainer}>
          {generateGallery}
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </ThemeLoggedIn>
  );
}

const styles = StyleSheet.create({
  galleryMainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputField: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  photoTitle: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  photoGalleryContainer: {
    borderWidth: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollViewContainer: {
    flex: 1,
    margin: 20,
    flexDirection: 'row',
  },
});
export default PhotoGallery;
