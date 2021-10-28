import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './Header'


function PhotoGallery() {
    return (

      <View style={StyleSheet.photoGalleryContainer}>
          <View style={StyleSheet.uploadPhoto}>
            <Button
            onPress={''}
            title="Add a New Photo"
            //color="#841584"
            style={{height: 20}}
            accessibilityLabel="Learn more about this purple button"> 
            </Button>

          </View>
















      </View>
    )
}

export default PhotoGallery
