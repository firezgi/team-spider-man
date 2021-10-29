import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput, StatusBar} from 'react-native';



function PhotoGallery() {

  //const [uploadPhoto, setUploadPhoto] = useState(false);



  // onUpload = e =>[
  //   photos = Array.from(e.target.photos),
  //   setUploadPhoto(true)
  //   ];

  //   const formData = photos.forEach((photo, index) => {
  //     formData.append(index, photo)
  //   });

  // const displayGallery = photos.map((photo, index) => (
  //   <View key={index} style={styles.photoGalleryContainer}>
  //     <Image
  //     source={{
  //       uri: 'https://unsplash.com/photos/qU7E8cfnxao',
  //       }}
  //       style={{ width: 225, height: 3000,}}>{item.todo}
  //     </Image>
  //   </View>))


    return (

      <View style={styles.galleryMainContainer}>
          <View style={styles.uploadPhoto}>
              <Text style={styles.photoTitle}>Your Photos</Text>

              <Button
                onPress={''}
                title="Add a New Photo"
                //color="#841584"
                style={{height: 20}}
                //accessibilityLabel="Learn more about this purple button"
              /> 
        </View>

          <ScrollView style={styles.scrollViewContainer}>
            
          <Image
                source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                  }}
                style={{ width: 225, height: 300,}}>
            </Image>
            <Image
                source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                  }}
                style={{ width: 225, height: 300,}}>
            </Image>
            <Image
                source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                  }}
                style={{ width: 225, height: 300,}}>
            </Image>
            <Image
                source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                  }}
                style={{ width: 300, height: 225,}}>
            </Image>
          </ScrollView>
{/*   
                                        <TextInput
                                          placeholder="Add a task..."
                                          style={styles.textInputField}
                                          onChangeText={(text) => setNewPhoto(photo)}
                                          value={newPhoto}
                                        />
                                        <Button title="Add to List" onPress={''} />
                                        <Button title="delete" onPress={() => setNewPhoto("")} /> */}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadPhoto: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoTitle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoGalleryContainer: {
    //flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'left',
  },
  scrollViewContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'red',
    
  },
});
export default PhotoGallery
