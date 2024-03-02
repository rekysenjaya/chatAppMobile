import React from "react";
import {
  View,
  Dimensions,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/core";

import { RootStackParamList } from "../types/NavigatorTypes";

import Header from "../components/Header";
import ListChat from "../components/ListChat";
import InputChat from "../components/InputChat";

const { width, height } = Dimensions.get('screen')

type ChatRouteType = RouteProp<
  RootStackParamList,
  "Chat"
>;

type ChatNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Chat"
>;

type Prop = {
  route: ChatRouteType;
  navigation: ChatNavigationProp;
};

const Chat = ({ route, navigation }: Prop) => {
  const name = route.params?.name

  return (<View>
    <Header title={name} />
    <ListChat name={name} />
    <InputChat name={name} />
  </View >)
}

export default Chat;