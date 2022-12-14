import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    LogBox,
    Alert,
} from "react-native";
import { assets } from "../constants";
import { COLORS, SIZES } from "../constants";
import { checkAccount } from "../constants/account";

const Login = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const doCheckAccount = async () => {
        const usernameValue = username;
        const passwordValue = password;

        const resultUser = await checkAccount(usernameValue, passwordValue);

        if (resultUser.err) {
            Alert.alert("Error!", resultUser.err);
        }
        else {
            navigation.navigate("Home");
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={assets.logo} />

            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Username"
                    placeholderTextColor="#808080"
                    onChangeText={(email) => setUsername(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#808080"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.loginBtn} onPress={() => doCheckAccount()}>
                <Text style={{
                    color: COLORS.white,
                    textAlign: "center"
                }}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
        // width: 130,
        // height: 130,
        // borderRadius: 63,
        // borderWidth: 4,
        // borderColor: "white",
        // alignSelf: 'center',
        // position: 'absolute',
        // marginTop: 130
    },

    inputView: {
        // backgroundColor: "#FFC0CB",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "baseline",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        textAlign: "left"
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: 150,
        padding: SIZES.small,
    },
});

export default Login;