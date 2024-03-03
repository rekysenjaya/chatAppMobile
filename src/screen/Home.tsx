import React, { useEffect } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";
import SplashScreen from "react-native-splash-screen";

import { RootStackParamList } from "../types/NavigatorTypes";

import Background from "../components/Background";
import ButtonChat from "../components/ButtonChat";

const { height } = Dimensions.get('window')

type HomeRouteType = RouteProp<
  RootStackParamList,
  "Home"
>;

type HomeNavigationProp = StackNavigationProp<
  RootStackParamList>;

type Prop = {
  route: HomeRouteType;
  navigation: HomeNavigationProp;
};


const Home = ({ navigation }: Prop) => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  
  return (<Background>
    <View style={styles.container}>
      <ButtonChat navigation={navigation} />
    </View>
  </Background>)
}

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: height * .8
  }
});