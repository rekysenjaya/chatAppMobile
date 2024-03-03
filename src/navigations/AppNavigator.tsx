/* eslint-disable react-hooks/exhaustive-deps,prefer-destructuring */
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StackNavigationOptions, createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "../types/NavigatorTypes";

import { navigationRef } from "../utils/NavigationService";

import Home from "../screen/Home";
import Chat from "../screen/Chat";

const App = createStackNavigator<RootStackParamList>();

const options: StackNavigationOptions = {
  headerTintColor: "#65b6e5",
  headerBackTitleVisible: false,
  headerTitleAlign: "center",
  headerTransparent: true,
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#4a4a4a",
  },
  cardStyle: { backgroundColor: 'red' }
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#2C1E31'
  },
};

const AppNavigator = () => {
  return (<NavigationContainer ref={navigationRef} theme={MyTheme}>
    <App.Navigator screenOptions={options} initialRouteName="Home">
      <App.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <App.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
    </App.Navigator>
  </NavigationContainer>);
};

export default AppNavigator;
