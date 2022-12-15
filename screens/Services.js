import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { COLORS, assets } from '../constants';
// import { FocusedStatusBar } from '../components';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CircleButton } from '../components';

const Services = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <View style={styles.nameContainer}>
                    <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 24 }}>Dịch vụ</Text>
                    <CircleButton
                        imgUrl={assets.left}
                        handlePress={() => navigation.goBack()}
                        left={15}
                        top={5}
                    />
                </View>
            </View>


        </SafeAreaView>
    );
};

export default Services;