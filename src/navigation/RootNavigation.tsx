import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import createOrderPage from './pages/CreateOrder/createOrderPage';
import styles from './pages/HomeScreen/HomeScreen.styles';
import { StyleSheet } from 'react-native';



const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
   <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Starbucks') {
            iconName = 'home';
            color = focused ? '#4AA366' : '#6F8094';
          }

          if (route.name === 'CreateOrder') {
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
      <Tab.Screen name="CreateOrder" component={createOrderPage} />
      <Tab.Screen name="Starbucks" component={HomeScreen} />
    </Tab.Navigator>
    </NavigationContainer>

  );
};

export default RootNavigation;