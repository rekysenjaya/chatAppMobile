import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import images from "../configs/images";

const InputChat = ({ name }: { name: string }) => {
  const { bottom } = useSafeAreaInsets();

  return (<View style={[styles.inputChat, { marginBottom: bottom }]}>
    <TouchableOpacity>
      <Image source={images.plus} style={styles.iconPlus} />
    </TouchableOpacity>
    <TextInput style={styles.inputChatText} />
  </View>)
}

export default InputChat;


const styles = StyleSheet.create({
  inputChat: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  iconPlus: {
    width: 20,
    height: 20
  },
  inputChatText: {
    color: '#B4B4B4',
    marginLeft: 10,
    flex: 1,
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 40,
    borderColor: '#5E5E5E',
    borderWidth: 1
  }
});