import React, { FC, ReactElement, useState } from "react";
import { Alert, Button, StyleSheet, TextInput } from "react-native";
import Parse from "parse/react-native";
import { useNavigation } from "@react-navigation/native";

export const UserRegistration = () => {
    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const doUserRegistration = async function () {
        // Note that these values come from state variables that we've declared before
        const usernameValue = username;
        const passwordValue = password;
        // Since the signUp method returns a Promise, we need to call it using await
        return await Parse.User.signUp(usernameValue, passwordValue)
            .then((createdUser) => {
                // Parse.User.signUp returns the already created ParseUser object if successful
                Alert.alert(
                    "Success!",
                    `User ${createdUser.get("username")} was successfully created!`
                );
                navigation.navigate("Home");
                return true;
            })
            .catch((error) => {
                // signUp can fail if any parameter is blank or failed an uniqueness check on the server
                Alert.alert("Error!", error.message);
                return false;
            });
    };

    return (
        <>
            <TextInput
                style={styles.input}
                value={name}
                placeholder={"Họ và tên"}
                onChangeText={(text) => setName(text)}
                autoCapitalize={"none"}
            />
            <TextInput
                style={styles.input}
                value={phoneNumber}
                placeholder={"Số điện thoại"}
                onChangeText={(text) => setPhoneNumber(text)}
                autoCapitalize={"none"}
            />
            <TextInput
                style={styles.input}
                value={email}
                placeholder={"Email"}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize={"none"}
            />
            <TextInput
                style={styles.input}
                value={username}
                placeholder={"Username"}
                onChangeText={(text) => setUsername(text)}
                autoCapitalize={"none"}
            />
            <TextInput
                style={styles.input}
                value={password}
                placeholder={"Password"}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <Button title={"Sign Up"} onPress={() => doUserRegistration()} />
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 10,
        backgroundColor: "#fff",
    },
});