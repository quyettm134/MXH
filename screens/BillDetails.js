import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CircleButton } from '../components';
import { assets, COLORS, SIZES } from '../constants';

const BillDetails = () => {
    const navigation = useNavigation();
    const [showBox, setShowBox] = useState(true);

    const showConfirmDialog = () => {
        return Alert.alert(
            "Xác nhận",
            "Bạn chắc chắn muốn thanh toán?",
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        setShowBox(false);
                        navigation.navigate("Bills");
                    }
                },
                {
                    text: 'No',
                }
            ]
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.nameContainer}>
                        <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 24 }}>Chi tiết hóa đơn</Text>
                        <CircleButton
                            imgUrl={assets.left}
                            handlePress={() => navigation.goBack()}
                            left={15}
                            top={5}
                        />
                    </View>
                </View>

                <View style={{
                    paddingTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontWeight: "bold", fontSize: 24 }}>Tiền nước tháng 12</Text>
                </View>

                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <View style={styles.bill}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <View style={{ paddingLeft: 0, paddingTop: 10, alignItems: 'center' }}>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        marginTop: 5,
                                        marginBottom: 10,
                                        paddingLeft: 10
                                    }}>Thời hạn thanh toán</Text>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        marginTop: 5,
                                        marginBottom: 10,
                                        paddingLeft: 10,
                                        color: "red"
                                    }}>14/12/2022</Text>
                                </View>
                                <View style={{ paddingRight: 0, paddingTop: 10, alignItems: 'center' }}>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        marginTop: 5,
                                        marginBottom: 10,
                                        paddingRight: 10
                                    }}>Thành tiền</Text>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        marginTop: 5,
                                        marginBottom: 10,
                                        paddingRight: 10,
                                        color: "red"
                                    }}>20.000đ / 1 khối</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                                <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                                    <Text style={styles.billText}>Chỉ số nước (Trước)</Text>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        marginTop: 5,
                                        marginBottom: 10,
                                        color: "red",
                                        paddingLeft: 30
                                    }}>5.5 khối</Text>
                                </View>
                                <View style={{ paddingRight: 10, paddingTop: 10, alignItems: 'center' }}>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        marginTop: 5,
                                        marginBottom: 10,
                                        paddingLeft: 30
                                    }}>Chỉ số nước (Sau)</Text>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        marginTop: 5,
                                        marginBottom: 10,
                                        color: "red",
                                        paddingLeft: 30
                                    }}>7 khối</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                                <View style={{ paddingLeft: 0, paddingTop: 10, alignItems: 'center' }}>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        marginTop: 5,
                                        marginBottom: 10,
                                        paddingLeft: 15
                                    }}>Số tiền cần trả</Text>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        marginTop: 5,
                                        marginBottom: 10,
                                        color: "red",
                                        paddingLeft: 15
                                    }}>140.000đ</Text>
                                </View>
                                <View style={{ paddingRight: 0, paddingTop: 10 }}>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        marginTop: 5,
                                        marginBottom: 10,
                                        paddingLeft: 30
                                    }}>Tình trạng</Text>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        marginTop: 5,
                                        marginBottom: 10,
                                        paddingRight: 10,
                                        color: "red"
                                    }}>Chưa thanh toán</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 400 }}>
                    <TouchableOpacity
                        style={{
                            width: 200,
                            backgroundColor: COLORS.primary,
                            borderRadius: SIZES.extraLarge,
                            padding: SIZES.small,
                        }}
                        onPress={() => showConfirmDialog()}>
                        <Text style={{
                            color: COLORS.white,
                            textAlign: "center"
                        }}>Thanh toán</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
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
        height: 320,
        width: 373,
        borderWidth: 2,
        borderRadius: 15,
        marginTop: 15,
    },
});

export default BillDetails;