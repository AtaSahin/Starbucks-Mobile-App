import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import CreateOrderPage from './pages/CreateOrder/createOrderPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './pages/auth/LoginPage/LoginPage';
import SplashPage from './pages/SplashPage/SplashPage';
import orderHistory from './pages/orderHistory';
import giris from './pages/auth/LoginPage/Giris/Giris';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        name="Starbucks"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerStyle: {elevation: 5, shadowOpacity: 5, borderBottomWidth: 1},
          tabBarIcon: ({color, size}) => (
            <Icon name="coffee" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Create Order"
        component={CreateOrderPage}
        options={{
          headerShown: true,
          headerStyle: {elevation: 5, shadowOpacity: 5, borderBottomWidth: 1},
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="RootNavigation" component={RootNavigation} />
        <Stack.Screen name="giris" component={giris} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="orderHistory" component={orderHistory} />
        <Stack.Screen
          name="Starbucks"
          component={HomeScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="CreateOrderPage" component={CreateOrderPage} />
        <Stack.Screen name="SplashPage" component={SplashPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigations;
