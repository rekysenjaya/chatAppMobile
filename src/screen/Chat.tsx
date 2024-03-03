import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";
import { useIsFocused } from "@react-navigation/native";

import { RootStackParamList } from "../types/NavigatorTypes";

import Header from "../components/Header";
import ListChat from "../components/ListChat";
import Background from "../components/Background";

type ChatRouteType = RouteProp<
  RootStackParamList,
  "Chat"
>;

type ChatNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Chat"
>;

type Prop = {
  route: ChatRouteType;
  navigation: ChatNavigationProp;
};

const Chat = ({ route, navigation }: Prop) => {
  const to = route.params?.to
  const me = route.params?.me
  const isFocus = useIsFocused()
  

  return (<Background>
    <Header title={to} />
    {isFocus && <ListChat to={to} me={me}  />}
  </Background >)
}

export default Chat;