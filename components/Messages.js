import React from "react";
import { View, TextInput, Button} from "react-native";
import { SearchBar } from 'react-native-elements';
import ThemeLoggedIn from './ThemeLoggedIn';

function Messages({ navigation }) {
    const hab=()=>{
        <View></View>

    }
  return (
    <ThemeLoggedIn navigation={navigation}>
    <View>
      <SearchBar
        placeholder="Search a friend"
        // onChangeText={}
        // value={}
      />
      
      <View style={{ flexDirection:"row",justifyContent:"space-evenly",margin:'20px'}}>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 ,margin:'20px'}}
        onChangeText={(text) => onChangeText(text)}
        placeholder="What is in your mind"
        //   value={value}
      />
      <Button style={{ height: 20}}
        title="Send"
        // onPress={() => {function}} //change "function" with your function for the button pressing
      />
      </View>
      <Button
        title="Delete"
        // onPress={() => {function}} //change "function" with your function for the button pressing
      />      
    </View>
    </ThemeLoggedIn>
  );
}

export default Messages;
