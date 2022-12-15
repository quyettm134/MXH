import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CircleButton } from '../components';
import { assets, COLORS, accounts } from '../constants';

const BillDetails = () => {
    const navigation = useNavigation();

    const [roomInfo, setRoomInfo] = useState(true);
    const [memberInfo, setMemberInfo] = useState(false);

    const user1 = accounts[0];
    const user2 = accounts[2];
    const user3 = accounts[3];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.nameContainer}>
                    <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 24 }}>Thông tin phòng</Text>
                    <CircleButton
                        imgUrl={assets.left}
                        handlePress={() => navigation.goBack()}
                        left={15}
                        top={5}
                    />
                    </View>  
                </View>

                <View style={{
                    paddingTop: 10,
                    paddingBottom: -10
                }}>
                  <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => {
                      if (roomInfo === true && memberInfo === false) {}
                      else {
                        setRoomInfo(true);
                        setMemberInfo(false);
                      }
                    }}>
                      <Text style={roomInfo ? { fontWeight: "bold", paddingLeft: 50, fontSize: 24, color: COLORS.primary } : { fontWeight: "bold", paddingLeft: 50, fontSize: 24 }}>Thông tin</Text>
                    </TouchableOpacity>
                    <View style={{ height: 30, width: 1, borderWidth: 1, borderColor: COLORS.primary }}></View>
                    <TouchableOpacity onPress={() => {
                      if (memberInfo === true && roomInfo === false) {}
                      else {
                        setRoomInfo(false);
                        setMemberInfo(true);
                      }
                    }}>
                      <Text style={memberInfo ? { fontWeight: "bold", paddingRight: 50, fontSize: 24, color: COLORS.primary } : { fontWeight: "bold", paddingRight: 50, fontSize: 24 }}>Thành viên</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {roomInfo && <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <View style={styles.bill}>                            
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <View style={{ paddingLeft: 10, paddingTop: 10, alignItems: 'center' }}>
                                    <Text style={{
                                      fontWeight: "bold",
                                      fontSize: 16,
                                      marginTop: 5,
                                      marginBottom: 10,
                                      paddingLeft: 17
                                    }}>Diện tích</Text>
                                    <Text style={{
                                      fontWeight: "bold",
                                      fontSize: 16,
                                      marginTop: 5,
                                      marginBottom: 10,
                                      paddingLeft: 17,
                                      color: "red"
                                    }}>25m x 25m</Text>
                                </View>
                                <View style={{ paddingRight: 10, paddingTop: 10, alignItems: 'center' }}>
                                    <Text style={{
                                      fontWeight: "bold",
                                      fontSize: 16,
                                      marginTop: 5,
                                      marginBottom: 10,
                                      paddingRight: 30
                                    }}>Phòng số</Text>
                                    <Text style={{
                                      fontWeight: "bold",
                                      fontSize: 16,
                                      marginTop: 5,
                                      marginBottom: 10,
                                      paddingRight: 30,
                                      color: "red"
                                    }}>4</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                                <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                                    <Text style={{
                                      fontWeight: "bold",
                                      fontSize: 16,
                                      marginTop: 5,
                                      marginBottom: 10,
                                      paddingRight: 30
                                    }}>Số người ở tối đa</Text>
                                    <Text style={{
                                      fontWeight: "bold",
                                      fontSize: 16,
                                      marginTop: 5,
                                      marginBottom: 10,
                                      color: "red",
                                      paddingLeft: 30
                                    }}>4 người</Text>
                                </View>
                                <View style={{ paddingRight: 10, paddingTop: 10, alignItems: 'center' }}>
                                    <Text style={{
                                      fontWeight: "bold",
                                      fontSize: 16,
                                      marginTop: 5,
                                      marginBottom: 10,
                                      paddingLeft: 30
                                    }}>Số người ở hiện tại</Text>
                                    <Text style={{
                                      fontWeight: "bold",
                                      fontSize: 16,
                                      marginTop: 5,
                                      marginBottom: 10,
                                      color: "red",
                                      paddingLeft: 30
                                    }}>4 người</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                                <View style={{ paddingLeft: 10, paddingTop: 10, alignItems: 'center' }}>
                                    <Text style={{
                                      fontWeight: "bold",
                                      fontSize: 16,
                                      marginTop: 5,
                                      marginBottom: 10,
                                      paddingLeft: 17
                                    }}>Đối tượng</Text>
                                    <Text style={{
                                      fontWeight: "bold",
                                      fontSize: 16,
                                      marginTop: 5,
                                      marginBottom: 10,
                                      color: "red",
                                      paddingLeft: 17
                                    }}>Hộ gia đình</Text>
                                </View>
                                <View style={{ paddingRight: 10, paddingTop: 10 }}>
                                    <Text style={{
                                      fontWeight: "bold",
                                      fontSize: 16,
                                      marginTop: 5,
                                      marginBottom: 10,
                                      paddingRight: 10
                                    }}>Đơn giá / tháng</Text>
                                    <Text style={{
                                      fontWeight: "bold",
                                      fontSize: 16,
                                      marginTop: 5,
                                      marginBottom: 10,
                                      paddingLeft: 10,
                                      color: "red"
                                    }}>2.500.000đ</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>}

                {roomInfo && <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 24, paddingBottom: 20 }}>Ảnh chụp</Text>
                    <Image
                      source={assets.nft01}
                      style={{
                        width: 373,
                        height: 200,
                      }}
                    />
                </View>}

                {memberInfo && <View style={styles.body}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 40 }}>
                      <TouchableOpacity onPress={() => navigation.navigate("AccountInfo")} style={{
                        height: 150,
                        width: 150,
                        borderWidth: 1,
                        borderRadius: 15,
                        marginLeft: 30,
                        alignItems: 'center',
                      }}>
                        <Image source={assets.user} style={styles.icon}/>
                        <Text style={{ marginTop: 10, fontWeight: "bold", color: COLORS.primary }}>Nguyễn Sỹ Quyết</Text>
                        <Text style={{ marginTop: 10, fontWeight: "bold" }}>0123456789</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => navigation.navigate("UserInfo")} style={{
                        height: 150,
                        width: 150,
                        borderWidth: 1,
                        borderRadius: 15,
                        marginRight: 30,
                        alignItems: 'center',
                      }}>
                        <Image source={assets.user} style={styles.icon}/>
                        <Text style={{ marginTop: 10, fontWeight: "bold" }}>{user1.name}</Text>
                        <Text style={{ marginTop: 10, fontWeight: "bold" }}>{user1.phoneNumber}</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 40 }}>
                      <TouchableOpacity onPress={() => navigation.navigate("UserInfo")} style={{
                        height: 150,
                        width: 150,
                        borderWidth: 1,
                        borderRadius: 15,
                        marginLeft: 30,
                        alignItems: 'center',
                      }}>
                        <Image source={assets.user} style={styles.icon}/>
                        <Text style={{ marginTop: 10, fontWeight: "bold" }}>{user2.name}</Text>
                        <Text style={{ marginTop: 10, fontWeight: "bold" }}>{user2.phoneNumber}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => navigation.navigate("UserInfo")} style={{
                        height: 150,
                        width: 150,
                        borderWidth: 1,
                        borderRadius: 15,
                        marginRight: 30,
                        alignItems: 'center',
                      }}>
                        <Image source={assets.user} style={styles.icon}/>
                        <Text style={{ marginTop: 10, fontWeight: "bold" }}>{user3.name}</Text>
                        <Text style={{ marginTop: 10, fontWeight: "bold" }}>{user3.phoneNumber}</Text>
                      </TouchableOpacity>
                    </View>
                </View>}
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
        marginTop: 0,
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
        marginTop: 0,
    },
    member: {
      height: 50,
      width: 50,
      borderWidth: 1,
      borderRadius: 15,
      marginTop: 0,
    },
    icon: {
      width: 70,
      height: 70,
      marginTop: 10
    }
});
  
export default BillDetails;