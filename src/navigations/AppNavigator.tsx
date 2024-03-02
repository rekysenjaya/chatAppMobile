/* eslint-disable react-hooks/exhaustive-deps,prefer-destructuring */
import React, { useEffect } from "react";
import { NavigationContainer, useNavigation, DefaultTheme } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Alert, BackHandler, ImageBackground, Linking, PermissionsAndroid, Platform } from "react-native";
import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/NavigatorTypes";

import { navigationRef } from "../utils/NavigationService";

import Home from "../screen/Home";
import Chat from "../screen/Chat";
import images from "../configs/images";

const App = createNativeStackNavigator<RootStackParamList>();

const options: NativeStackNavigationOptions = {
  headerTintColor: "#65b6e5",
  headerBackTitleVisible: false,
  headerTitleAlign: "center",
  headerTransparent: true,
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#4a4a4a",
  },
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  },
};

const AppNavigator = () => {
  return (<ImageBackground source={images.gradient} style={{ flex: 1, backgroundColor: '#2C1E31' }}>
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
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
    </NavigationContainer>
  </ImageBackground>);
};

export default AppNavigator;
