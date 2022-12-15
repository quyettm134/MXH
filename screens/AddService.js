import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, assets } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { CircleButton } from '../components';

const AddService = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <View style={styles.nameContainer}>
                    <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 24 }}>Thêm dịch vụ</Text>
                    <CircleButton
                        imgUrl={assets.left}
                        handlePress={() => navigation.goBack()}
                        left={15}
                        top={5}
                    />
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.header}></View>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <View style={styles.nameContainer}>
                            <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 32 }}></Text>
                        </View>

                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("SignUpService")}>
                            <Image source={assets.wifi} style={{
                                width: 25,
                                height: 25,
                                marginRight: 30
                            }} />
                            <Text style={{ color: "#FFFFFF", paddingRight: 30 }}>Đăng ký Wifi</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("SignUpService")}>
                            <Image source={assets.bike} style={{
                                width: 25,
                                height: 25,
                                marginRight: 30
                            }} />
                            <Text style={{ color: "#FFFFFF", paddingRight: 30 }}>Đăng ký gửi xe</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("SignUpService")}>
                            <Image source={assets.clean} style={{
                                width: 25,
                                height: 25,
                                marginRight: 30
                            }} />
                            <Text style={{ color: "#FFFFFF", paddingRight: 30 }}>Đăng ký dọn dẹp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: COLORS.primary,
        marginTop: 20
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center"
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    nameContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 20,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: COLORS.primary
    },
});

export default AddService;