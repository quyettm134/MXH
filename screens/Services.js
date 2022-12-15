import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { CircleButton } from '../components';
import { COLORS, assets, bills, SIZES } from '../constants';

const Services = () => {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.nameContainer}>
						<Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 24 }}>Dịch vụ phòng 4</Text>
						<CircleButton
							imgUrl={assets.left}
							handlePress={() => navigation.goBack()}
							left={15}
							top={5}
						/>
					</View>
				</View>
				<View style={styles.body}>

					<View style={styles.bodyContent}>
						<TouchableOpacity style={styles.bill} onPress={() => navigation.navigate("ServiceInfo")}>
							<View style={{ paddingLeft: 10, paddingTop: 6 }}>
								<Text style={{ fontWeight: "bold", fontSize: 16 }}>Đăng ký dịch vụ Wifi</Text>
							</View>
							<View style={{ height: 1, width: 370, borderWidth: 1, marginTop: 10 }}></View>
							<View style={{ height: '100%', width: '100%', paddingLeft: 10 }}>
								<Text style={styles.billText}>Trạng thái: <Text style={{ color: "red" }}>Đang duyệt</Text></Text>
								<Text style={styles.billText}>Ngày tạo yêu cầu: <Text>{bills[0].date}</Text></Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.bill} onPress={() => navigation.navigate("ServiceInfo")}>
							<View style={{ paddingLeft: 10, paddingTop: 6 }}>
								<Text style={{ fontWeight: "bold", fontSize: 16 }}>Đăng ký gửi xe</Text>
							</View>
							<View style={{ height: 1, width: 370, borderWidth: 1, marginTop: 10 }}></View>
							<View style={{ height: '100%', width: '100%', paddingLeft: 10 }}>
								<Text style={styles.billText}>Trạng thái: <Text style={{ color: "red" }}>Đang duyệt</Text></Text>
								<Text style={styles.billText}>Ngày tạo yêu cầu: <Text>{bills[0].date}</Text></Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.bill} onPress={() => navigation.navigate("ServiceInfo")}>
							<View style={{ paddingLeft: 10, paddingTop: 6 }}>
								<Text style={{ fontWeight: "bold", fontSize: 16 }}>Đăng ký dọn phòng</Text>
							</View>
							<View style={{ height: 1, width: 370, borderWidth: 1, marginTop: 10 }}></View>
							<View style={{ height: '100%', width: '100%', paddingLeft: 10 }}>
								<Text style={styles.billText}>Trạng thái: <Text style={{ color: "green" }}>Đã duyệt</Text></Text>
								<Text style={styles.billText}>Ngày tạo yêu cầu: <Text>{bills[0].date}</Text></Text>
							</View>
						</TouchableOpacity>
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
						backgroundColor: COLORS.primary,
						borderRadius: SIZES.extraLarge,
						minWidth: 170,
						padding: SIZES.small,
					}}
					onPress={() => navigation.navigate("AddService")}
				>
					<Text style={{
						fontSize: SIZES.large,
						color: COLORS.white,
						textAlign: "center"
					}}>Tạo yêu cầu mới</Text>
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
		height: 150,
		width: 373,
		borderWidth: 2,
		borderRadius: 15,
		marginTop: 15,
	},
	billText: {
		fontWeight: "bold",
		fontSize: 16,
		marginTop: 20
	}
});
export default Services;