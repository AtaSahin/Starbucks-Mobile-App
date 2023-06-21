import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./pages/auth/LoginPage/LoginPage";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import RootNavigation from "./RootNavigation";
import CreateOrderPage from "./pages/CreateOrder/createOrderPage";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RootNavigation" component={RootNavigation} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CreateOrderPage" component={CreateOrderPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
