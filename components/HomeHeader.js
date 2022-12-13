import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, assets } from '../constants';

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Image 
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />

        <View style={{ width: 45, height: 45 }}>
          <TouchableOpacity onPress={() => navigation.navigate("AccountInfo")}>
            <Image 
              source={assets.person01}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />
          </TouchableOpacity>

          <Image 
            source={assets.badge}
            resizeMode="contain"
            style={{ position: "absolute", width: 15, height: 15, bottom: 0, right: 0 }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{ fontSize: SIZES.small, color: COLORS.white }}>
          Hello, Quyết 👋
        </Text>

        <Text style={{ fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2 }}>
          Cùng bắt đầu một ngày mới nào!
        </Text>
      </View>
    </View>
  )
}

export default HomeHeader;