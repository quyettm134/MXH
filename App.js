import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Login from './screens/Login';
import Home from './screens/Home';
import Details from './screens/Details';
import AccountInfo from './screens/AccountInfo';
import UserInfo from './screens/UserInfo';
import Bills from './screens/Bills';
import BillDetails from './screens/BillDetails';
import RoomInfo from './screens/RoomInfo';
import Services from './screens/Services';
import AddService from './screens/AddService';
import SignUpService from './screens/SignUpService';


const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  else return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="AccountInfo" component={AccountInfo} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Bills" component={Bills} />
        <Stack.Screen name="BillDetails" component={BillDetails} />
        <Stack.Screen name="RoomInfo" component={RoomInfo} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="AddService" component={AddService} />
        <Stack.Screen name="SignUpService" component={SignUpService} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;