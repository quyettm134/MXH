import { Text, View, SafeAreaView, Image, StatusBar, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { COLORS, SIZES, assets } from '../constants';
import { CircleButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components';

const DetailsHeader = ({ data, navigation }) => {
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
    <View style={{ width: '100%', height: 373 }}>
      <Image
        source={data.image}
        resizeMode='cover'
        style={{ width: '100%', height: '100%' }}
      />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />

      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  )
}

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
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
            onPress={
              () => {
                showConfirmDialog();
                navigation.navigate("RoomInfo");
              }
            }
        >
            <Text style={{
                fontSize: SIZES.large,
                color: COLORS.white,
                textAlign: "center"
            }}>Đăng ký phòng</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text style={{
                  fontSize: SIZES.font,
                  color: COLORS.primary
                }}>
                  Review
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  )
}

export default Details;