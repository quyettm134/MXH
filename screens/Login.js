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
} from "react-native";
import { assets } from "../constants";
// import { RectButton } from "../components";
import { COLORS, SIZES } from "../constants";

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={assets.logo} />

            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#808080"
                    onChangeText={(email) => setEmail(email)}
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


            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Home")}>
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