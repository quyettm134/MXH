import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { CircleButton } from '../components';
import { COLORS, assets, bills } from '../constants';

const Bills = () => {
	const navigation = useNavigation();

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [items, setItems] = useState([
		{ label: 'Tháng 12', value: '12' },
		{ label: 'Tháng 11', value: '11' },
		{ label: 'Tháng 10', value: '10' }
	]);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.nameContainer}>
						<Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 24 }}>Bills Management</Text>
						<CircleButton
							imgUrl={assets.left}
							handlePress={() => navigation.goBack()}
							left={15}
							top={5}
						/>
					</View>
				</View>
				<View style={styles.body}>
					<View style={{ marginLeft: 10 }}>
						<Text style={{ fontWeight: "bold", fontSize: 16 }}>Phân loại theo tháng</Text>
						<View style={{ paddingTop: 20 }}>
							<DropDownPicker style={{
								width: 355,
							}}
								placeholder="Chọn tháng"
								open={open}
								value={value}
								items={items}
								setOpen={setOpen}
								setValue={setValue}
								setItems={setItems}
							/>
						</View>
					</View>

					<View style={styles.bodyContent}>
						<TouchableOpacity style={styles.bill} onPress={() => navigation.navigate("BillDetails")}>
							<View style={{ paddingLeft: 10, paddingTop: 6 }}>
								<Text style={{ fontWeight: "bold", fontSize: 16 }}>Tiền điện tháng 12</Text>
							</View>
							<View style={{ height: 1, width: 370, borderWidth: 1, marginTop: 10 }}></View>
							<View style={{ height: '100%', width: '100%', paddingLeft: 10 }}>
								<Text style={styles.billText}>Giá: <Text style={{ color: "green" }}>{bills[0].price}</Text></Text>
								<Text style={styles.billText}>Trạng thái: <Text style={{ color: "green" }}>{bills[0].status}</Text></Text>
								<Text style={styles.billText}>Thanh toán hoàn tất vào ngày: <Text style={{ color: "green" }}>{bills[0].date}</Text></Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.bill} onPress={() => navigation.navigate("BillDetails")}>
							<View style={{ paddingLeft: 10, paddingTop: 6 }}>
								<Text style={{ fontWeight: "bold", fontSize: 16 }}>Tiền nước tháng 12</Text>
							</View>
							<View style={{ height: 1, width: 370, borderWidth: 1, marginTop: 10 }}></View>
							<View style={{ height: '100%', width: '100%', paddingLeft: 10 }}>
								<Text style={styles.billText}>Giá: <Text style={{ color: "gray" }}>{bills[1].price}</Text></Text>
								<Text style={styles.billText}>Trạng thái: <Text style={{ color: "gray" }}>{bills[1].status}</Text></Text>
								<Text style={styles.billText}>Hạn thanh toán vào ngày: <Text style={{ color: "gray" }}>{bills[1].date}</Text></Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.bill} onPress={() => navigation.navigate("BillDetails")}>
							<View style={{ paddingLeft: 10, paddingTop: 6 }}>
								<Text style={{ fontWeight: "bold", fontSize: 16 }}>Tiền mạng tháng 12</Text>
							</View>
							<View style={{ height: 1, width: 370, borderWidth: 1, marginTop: 10 }}></View>
							<View style={{ height: '100%', width: '100%', paddingLeft: 10 }}>
								<Text style={styles.billText}>Giá: <Text style={{ color: "red" }}>{bills[2].price}</Text></Text>
								<Text style={styles.billText}>Trạng thái: <Text style={{ color: "red" }}>{bills[2].price}</Text></Text>
								<Text style={styles.billText}>Thanh toán quá hạn vào ngày: <Text style={{ color: "red" }}>{bills[2].date}</Text></Text>
							</View>
						</TouchableOpacity>
					</View>
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
	}
});
export default Bills;