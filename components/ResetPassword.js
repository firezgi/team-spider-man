import React, {useState} from 'react';
import { View, Button, Text, StyleSheet, TextInput } from "react-native";
import SignupPage from './SignupPage';
import ThemeLoggedOut from './ThemeLoggedOut';
    
export const ResetPassword = ({ navigation }) => {
    const [signupUsername, setSignupUsername] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [verifyNewPassword, setVerifyNewPassword] = useState("")
    return (
        <ThemeLoggedOut navigation={navigation}>
        <View style={styles.resetPage}>
            <Text>Username</Text>
            <TextInput 
                style={styles.input}
                onChangeText={setSignupUsername}
            />
            <Text>Enter current password</Text>
            <TextInput 
                style={styles.input}
                onChangeText={setCurrentPassword}
            />
            <Text>Enter new password</Text>
            <TextInput 
                style={styles.input}
                onChangeText={setNewPassword}
            />
            <Text>Re-enter new password</Text>
            <TextInput 
                style={styles.input}
                onChangeText={setVerifyNewPassword}
            />
            <Button
            title="Reset password"
            onPress={() => console.log("username: ", signupUsername, "Current Password: ", currentPassword, "New Password: ", newPassword, "Verified Password: ", verifyNewPassword)}
            onPress={() => navigation.navigate({SignupPage})}
            />
        </View>
        </ThemeLoggedOut>
        
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

export default ResetPassword;