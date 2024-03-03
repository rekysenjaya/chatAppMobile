import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

import images from "../configs/images";

const Background = ({ children }: any) => {
  return <ImageBackground source={images.gradient} style={styles.background}>
    {children}
  </ImageBackground>
}

export default Background;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#2C1E31'
  }
});