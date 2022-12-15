import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { CircleButton } from '../components';
import { COLORS, assets, SIZES } from '../constants';

const Services = () => {
	const navigation = useNavigation();

    const [showBox, setShowBox] = useState(true);

    const showConfirmDialog = () => {
        return Alert.alert(
            "Xác nhận",
            "Bạn chắc chắn hủy yêu cầu?",
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        setShowBox(false);
                        navigation.navigate("Services");
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
						<Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 24 }}>Chi tiết dịch vụ</Text>
						<CircleButton
							imgUrl={assets.left}
							handlePress={() => navigation.goBack()}
							left={15}
							top={5}
						/>
					</View>
				</View>
				<View style={styles.body}>
                    <View style={{ marginLeft: 50 }}><Text style={{ fontWeight: "bold", paddingLeft: 50, fontSize: 24 }}>Thông tin yêu cầu</Text></View>
                    
					<View>
                        <View style={{
                            paddingTop: 50,
                            paddingLeft: 20
                        }}>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 16
                            }}>
                                Họ và tên
                            </Text>
                        </View>
                        <View style={styles.bill}>
                            <View style={{ paddingLeft: 10, paddingTop: 6 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Phạm Thành Đạt</Text>
                            </View>
                        </View>
                    </View>

                    <View >
                        <View style={{
                            paddingTop: 20,
                            paddingLeft: 20
                        }}>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 16
                            }}>
                                Số điện thoại
                            </Text>
                        </View>
                        <View style={styles.bill}>
                            <View style={{ paddingLeft: 10, paddingTop: 6 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 16 }}>0123456789</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={{
                            paddingTop: 20,
                            paddingLeft: 20
                        }}>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 16
                            }}>
                                Biển số xe
                            </Text>
                        </View>
                        <View style={styles.bill}>
                            <View style={{ paddingLeft: 10, paddingTop: 6 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 16 }}>92E1 - 888.88</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={{
                            paddingTop: 20,
                            paddingLeft: 20
                        }}>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 16
                            }}>
                                Tháng đăng ký
                            </Text>
                        </View>
                        <View style={styles.bill}>
                            <View style={{ paddingLeft: 10, paddingTop: 6 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 16 }}>12/2022</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={{
                            paddingTop: 20,
                            paddingLeft: 20
                        }}>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 16
                            }}>
                                Trạng thái
                            </Text>
                        </View>
                        <View style={styles.bill}>
                            <View style={{ paddingLeft: 10, paddingTop: 6 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 16, color: "red" }}>Đang chờ duyệt</Text>
                            </View>
                        </View>
                    </View>
				</View>
			</View>

            <View style={{
                width: '100%',
                position: 'absolute',
                bottom: 20,
                paddingVertical: SIZES.font,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                zIndex: 1
            }}>
                <TouchableOpacity 
                    style={{
                        backgroundColor: "white",
                        borderRadius: SIZES.extraLarge,
                        minWidth: 170,
                        padding: SIZES.small,
                        borderWidth: 1,
                        borderColor: COLORS.primary
                    }}
                    onPress={() => showConfirmDialog()}
                >
                    <Text style={{
                        fontSize: SIZES.large,
                        color: COLORS.primary,
                        textAlign: "center"
                    }}>Hủy</Text>
                </TouchableOpacity>
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
		height: 40,
		width: 360,
		borderWidth: 1,
		borderRadius: 5,
        marginTop: 10,
        marginLeft: 15
	},
	billText: {
		fontWeight: "bold",
		fontSize: 16,
		marginTop: 20
	}
});
export default Services;