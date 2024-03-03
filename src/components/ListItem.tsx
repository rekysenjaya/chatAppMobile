import React from "react";
import { Dimensions, StyleSheet, Text, View, ViewToken } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

import { useChatData } from "../hooks"

import { ChatItem } from "../types/TestTypes";
import fonts from "../configs/fonts";

const { width } = Dimensions.get('screen')

const ListItem = ({ item, index, viewbleItems, to, me }: { item: ChatItem, index: number, viewbleItems: Animated.SharedValue<ViewToken[]>, to: string, me: string }) => {
  const listChatData = useChatData()
  const toLast = (listChatData || [])?.[index + 1]
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean((viewbleItems?.value || []).filter((item) => item.isViewable).find((viewbleItem) => viewbleItem.item.id == item.id))

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [{
        scale: withTiming(isVisible ? 1 : 0.6),
      }]
    }
  }, [])

  let roundChat = <View style={[styles.listItemRound, toLast?.to != to && { backgroundColor: 'transparent' }]} />
  let marginBottom = 20

  if (item?.to != to && toLast?.to != to) {
    marginBottom = 10
  }
  if (item?.me == me && toLast?.me == me) {
    marginBottom = 10
  }
  if (!toLast?.to) {
    roundChat = <View style={styles.listItemRound} />
  }

  return <Animated.View style={[{ marginBottom }, styles.listItem, rStyle]}>
    <View style={[styles.listItemFlex, { justifyContent: item?.to == to ? 'flex-end' : 'flex-start' }]}>
      {!(item?.to == to) && roundChat}
      <View style={[styles.listItemCard, { backgroundColor: item?.to == to ? '#884FE5' : '#F5F6FB' }]}>
        <Text style={[styles.listItemText, { maxWidth: (width - 108) * .9, color: item?.to == to ? '#fff' : '#1B1B1B', textAlign: item?.to == to ? 'right' : 'left' }]}>{item?.chat}</Text>
      </View>
    </View>
  </Animated.View>
}

export default ListItem;


const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  listItemFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    width,
    paddingHorizontal: 25
  },
  listItemRound: {
    height: 32,
    width: 32,
    borderRadius: 32,
    backgroundColor: '#FC9393',
    marginRight: 5
  },
  listItemText: {
    fontFamily: fonts.ManropeMedium,
    fontWeight: '500',
    fontSize: 14
  },
  listItemCard: {
    borderRadius: 16,
    padding: 8,
    paddingHorizontal: 12
  },
  listHeaderChatText: {
    fontFamily: fonts.ManropeBold,
    textAlign: 'center',
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 25
  }
});