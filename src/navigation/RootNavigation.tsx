import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import CreateOrderPage from './pages/CreateOrder/createOrderPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/auth/LoginPage/LoginPage';
import SplashPage from './pages/SplashPage/SplashPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (

   <Tab.Navigator initialRouteName='HomeScreen'
   
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Starbucks') {
            iconName = 'home';
            color = focused ? '#4AA366' : '#6F8094';
          }

          if (route.name === 'Create Order') {
            iconName = 'coffee';
            color = focused ? '#4AA366' : '#6F8094';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false, // Hide the screen names in the tab bar
      }}
    >
      <Tab.Screen name="Starbucks" 
      component={HomeScreen} />
      <Tab.Screen name="Create Order"
       component={CreateOrderPage} />
      


    </Tab.Navigator>


  );
};

const StackNavigations = () => {
  
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="SplashPage" 
     screenOptions={{headerShown:false}}>
      <Stack.Screen name="RootNavigation" component={RootNavigation} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Starbucks" component={HomeScreen} />
        <Stack.Screen name="CreateOrderPage" component={CreateOrderPage} />
        <Stack.Screen name="SplashPage" component={SplashPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigations;