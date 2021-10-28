import React from 'react'
import { View, Text, Linking,TextInput,Button} from "react-native";
function Messages() {
    return (
        <View>
            <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
    //   value={value}
    />
    <Button
title="Press button"
// onPress={() => {function}} //change "function" with your function for the button pressing
/>
            
        </View>
    )
}

export default Messages
