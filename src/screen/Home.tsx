import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  AppState,
  ScrollView,
  Platform,
  FlatList
} from "react-native";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/core";
import { RootStackParamList } from "../types/NavigatorTypes";

type HomeRouteType = RouteProp<
  RootStackParamList,
  "Home"
>;

type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Prop = {
  route: HomeRouteType;
  navigation: HomeNavigationProp;
};

const Home = ({ navigation }: Prop) => {

  return (<SafeAreaView>
    <TouchableOpacity onPress={() => navigation.push('Chat', { name: 'Reky' })}>
      <Text>To Chat</Text>
    </TouchableOpacity>
  </SafeAreaView>)
}

export default Home;