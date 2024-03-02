import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import images from "../configs/images";

import NavigationService from "../utils/NavigationService";

const Header = ({ title }: { title: string }) => {
  const { top } = useSafeAreaInsets();

  return (<View style={{ marginTop: top, padding: 15, display: 'flex', flexDirection: 'row', alignItems: 'center', borderColor: '#4E4E4E', borderBottomWidth: 1, height: 60 }}>
    <TouchableOpacity style={{ marginRight: 15 }} onPress={() => NavigationService.back()}>
      <Image source={images.backArrow} style={{ height: 24, width: 24 }} />
    </TouchableOpacity>
    <View style={{ height: 40, width: 40, backgroundColor: '#FC9393', borderRadius: 40, marginRight: 15 }} />
    <Text style={{ color: '#fff', fontSize: 24, fontWeight: '700' }}>{title}</Text>
  </View>)
}

export default Header;