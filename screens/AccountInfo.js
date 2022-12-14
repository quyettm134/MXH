import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, assets } from '../constants';
import { FocusedStatusBar } from '../components';
import { useNavigation } from '@react-navigation/native';

const AccountInfo = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary}/>

            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={assets.person01}/>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                      <View style={styles.nameContainer}>
                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 32 }}>Quyet Nguyen</Text> 
                      </View>  
                                  
                      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("RoomInfo")}>
                        <Text style={{ color: "#FFFFFF" }}>Current room</Text> 
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Bills")}>
                        <Text style={{ color: "#FFFFFF" }}>Bills</Text> 
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={{ color: "#FFFFFF" }}>Services</Text> 
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 200,
        backgroundColor: COLORS.primary
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

export default AccountInfo;