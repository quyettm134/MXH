import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { CircleButton } from '../components';
import { assets, COLORS } from '../constants';

const BillDetails = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.nameContainer}>
                    <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 24 }}>Room Info</Text>
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: -10
                }}>
                    <Text style={{ fontWeight: "bold", fontSize: 24 }}>Thông tin phòng ở</Text>
                </View>

                <View style={styles.body}>
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
                                    <Text style={styles.billText}>Số người ở tối đa</Text>
                                    <Text style={{
                                      fontWeight: "bold",
                                      fontSize: 16,
                                      marginTop: 5,
                                      marginBottom: 10,
                                      color: "red",
                                      paddingLeft: 30
                                    }}>3 người</Text>
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
                                    }}>2 người</Text>
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
                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 24, paddingBottom: 20 }}>Ảnh chụp</Text>
                    <Image
                      source={assets.nft01}
                      style={{
                        width: 373,
                        height: 200,
                      }}
                    />
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
});
  
export default BillDetails;