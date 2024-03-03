import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import images from "../configs/images";
import fonts from "../configs/fonts";

import NavigationService from "../utils/NavigationService";

const Header = ({ title }: { title: string }) => {
  const { top } = useSafeAreaInsets();

  return (<View style={[styles.headerCard, { marginTop: top }]}>
    <TouchableOpacity style={{ marginRight: 15 }} onPress={() => NavigationService.back()}>
      <Image source={images.backArrow} style={styles.headerIcon} />
    </TouchableOpacity>
    <View style={styles.headerIconUser} />
    <Text style={styles.headerTitle}>{title}</Text>
  </View>)
}

export default Header;

const styles = StyleSheet.create({
  headerCard: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#4E4E4E',
    borderBottomWidth: 1,
    height: 60
  },
  headerIcon: {
    height: 24,
    width: 24
  },
  headerIconUser: {
    height: 40,
    width: 40,
    backgroundColor: '#FC9393',
    borderRadius: 40,
    marginRight: 15
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontFamily: fonts.ManropeBold,
    fontWeight: '700'
  }
});