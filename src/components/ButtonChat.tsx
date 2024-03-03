import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../types/NavigatorTypes";

const listUser = [
  { to: 'Lisa', me: 'Dian' },
  { to: 'Dian', me: 'Lisa' }
]

const Button = ({ name }: { name: string }) => {
  return <View style={styles.button}>
    <Text style={styles.buttonText}>Chat {name}</Text>
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
    borderRadius: 20
  },
  buttonText: {
    fontWeight: 'bold'
  },
  marginTouch: {
    marginBottom: 30
  }
});