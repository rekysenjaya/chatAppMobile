import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../types/NavigatorTypes";

import { useChatData } from "../hooks";

const listUser = [
  { to: 'Lisa', me: 'Dian' },
  { to: 'Dian', me: 'Lisa' }
]

const Button = ({ name }: { name: string }) => {
  const chatData = useChatData()
  const count = (chatData || []).filter(item => (!item.read && item.me === name))?.length

  return <View style={styles.button}>
    <Text style={styles.buttonText}>Chat {name}</Text>
    {!!count && <View style={styles.badge}>
      <Text style={styles.badgeText}>{count}</Text>
    </View>}
  </View>
}

const ButtonChat = ({ navigation }: {
  navigation: StackNavigationProp<RootStackParamList>
}) => {
  return listUser.map((item) => <TouchableOpacity key={item.to} style={styles.marginTouch} onPress={() => navigation.push('Chat', item)}>
    <Button name={item?.to} />
  </TouchableOpacity>)
}

export default ButtonChat;

const styles = StyleSheet.create({
  button: {
    minWidth: 100,
    padding: 15,
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    borderRadius: 20,
    position: 'relative'
  },
  buttonText: {
    fontWeight: 'bold'
  },
  marginTouch: {
    marginBottom: 30
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FC9393',
    borderRadius: 100,
    paddingBottom: 1,
    paddingHorizontal: 4
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold'
  }
});