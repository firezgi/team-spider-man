import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar} from 'react-native';
import { media } from './WPAPI'


function PhotoGallery() {

 const [imageArray, setImageArray] = useState([]);
 useEffect(() => {media()
    .then((data) => setImageArray(data))
  }, [])

console.log(imageArray);

const deleteImage = (index) => {
  setImageArray(
      imageArray.filter((image, selected) => selected != index)
      );
}

const generateGallery = imageArray.map((img, index) => {
    const imageWidth = 300;
    const imageHeight = (img.media_details.height / img.media_details.width) * imageWidth;
      
      return(
        <View key={index}>
          <Image 
            style={{width: imageWidth, height: imageHeight}}
            source={img.source_url} 
          />

          <Button
            key={index}
            onPress={() => deleteImage(index)}
            title='Delete'
          />

        </View>
    )
  }
)

      return (

      <View style={styles.galleryMainContainer}>
          <View style={styles.uploadPhoto}>
              <Text style={styles.photoTitle}>Your Photos</Text>

              <Button
                onPress={''}
                title="Add a New Photo"
                style={{height: 20}}
              /> 
          </View>

          <ScrollView style={styles.scrollViewContainer}>
            {generateGallery}
          </ScrollView>                                     
        <StatusBar style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
  galleryMainContainer: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputField: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadPhoto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoGalleryContainer: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
  },
  scrollViewContainer: {
    flex: 1,
    //width: '100%',
    flexDirection: 'row',
    backgroundColor: 'red',
    
  },
});
export default PhotoGallery
