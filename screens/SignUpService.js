import { View, Text, SafeAreaView, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { CircleButton } from '../components';
import { COLORS, assets, bills, SIZES } from '../constants';

const SignUpService = () => {
    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Đăng ký wifi', value: '1' },
        { label: 'Đăng ký gửi xe', value: '2' },
        { label: 'Đăng ký dọn dẹp', value: '3' }
    ]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.nameContainer}>
                        <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 24 }}>Đăng ký dịch vụ</Text>
                        <CircleButton
                            imgUrl={assets.left}
                            handlePress={() => navigation.goBack()}
                            left={15}
                            top={5}
                        />
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Loại dịch vụ</Text>
                        <View style={{ paddingTop: 20 }}>
                            <DropDownPicker style={{
                                width: 355,
                            }}
                                placeholder="Chọn dịch vụ"
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                            />
                        </View>
                    </View>
                    {/*  */}
                    <View style={{ marginLeft: 20, paddingTop: 20 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 16, paddingBottom: 15 }}>Họ và tên</Text>
                        <TextInput style={styles.inputView}
                            placeholder="i.e Phạm Văn Đạt"
                            placeholderTextColor="#808080"
                            onChangeText={(name) => setName(name)} />
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 16, paddingBottom: 15 }}>Số điện thoại</Text>
                        <TextInput style={styles.inputView}
                            placeholder="i.e 0123456789"
                            placeholderTextColor="#808080"
                            onChangeText={(phone) => setPhone(phone)} />
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 16, paddingBottom: 15 }}>Ngày</Text>
                        <TextInput style={styles.inputView}
                            placeholder="i.e 15/12/2022"
                            placeholderTextColor="#808080"
                            onChangeText={(date) => setDate(date)} />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", paddingTop: 150 }}>
                        <TouchableOpacity style={styles.loginBtn} >
                            <Text style={{
                                color: COLORS.white,
                                textAlign: "center"
                            }}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: COLORS.primary,
        paddingTop: 10
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
    bill: {
        height: 150,
        width: 373,
        borderWidth: 2,
        borderRadius: 15,
        marginTop: 15
    },
    billText: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 10
    },
    inputView: {
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
        width: 355,
        height: 45,
        marginBottom: 20,
        alignItems: "baseline",
        paddingLeft: 10
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        textAlign: "left"
    },
    loginBtn: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        width: 150,
        alignItems: "center",
        padding: SIZES.small,
        justifyContent: "center"
    },
});
export default SignUpService;