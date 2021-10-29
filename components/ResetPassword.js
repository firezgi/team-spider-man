import React, {useState} from 'react';
import { View, Button, Text, StyleSheet, TextInput } from "react-native";
import {Footer} from './Footer';

const ResetPassword = () => {
    return (
        <View style={styles.resetPage}>
            <Text>Username</Text>
            <TextInput 
                style={styles.input}
            />
            <Text>Enter current password</Text>
            <TextInput 
                style={styles.input}
            />
            <Text>Enter new password</Text>
            <TextInput 
                style={styles.input}
            />
            <Text>Re-enter new password</Text>
            <TextInput 
                style={styles.input}
            />
            <Button
            title="Reset password"
            />
            <Footer/>
        </View>
        
    )

}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  });

export {ResetPassword}