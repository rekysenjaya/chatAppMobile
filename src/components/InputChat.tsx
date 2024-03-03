import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard
} from "react-native";
import { useDispatch } from "react-redux";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { sendChat } from "../store/user/actions";

import images from "../configs/images";
import fonts from "../configs/fonts";

let time: any
const InputChat = ({ to, me, onFocus }: { to: string, me: string, onFocus: () => void }) => {
  const dispatch: any = useDispatch();
  const { bottom } = useSafeAreaInsets();
  const [chat, setChat] = useState('')

  useEffect(() => {
    return () => {
      clearTimeout(time)
    }
  })

  const send = (e: any) => {
    dispatch(sendChat(to, me, chat))
    setChat('')
  }

  const delayFocus = () => {
    setTimeout(() => {
      onFocus()
    }, 1000);
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        delayFocus()
      },
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  return (<View style={[styles.inputChat, { marginBottom: bottom }]}>
    <TouchableOpacity>
      <Image source={images.plus} style={styles.iconPlus} />
    </TouchableOpacity>
    <TextInput onFocus={delayFocus} style={styles.inputChatText} placeholder="Send a message" placeholderTextColor={'#B4B4B4'} value={chat} onChangeText={(e) => setChat(e)} returnKeyType="send" onSubmitEditing={send} />
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
    fontFamily: fonts.ManropeMedium,
    fontWeight: '500',
    color: '#fff',
    marginLeft: 10,
    flex: 1,
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 40,
    borderColor: '#5E5E5E',
    borderWidth: 1
  }
});