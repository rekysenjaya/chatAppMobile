import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ViewToken,
  StyleSheet
} from "react-native";
import { useDispatch } from "react-redux";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { ChatItem } from "../types/TestTypes";

import { useChatData } from "../hooks";

import { readChat } from "../store/user/actions";

import InputChat from "./InputChat";

const { width, height } = Dimensions.get('screen')

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
        <Text style={{ maxWidth: (width - 108) * .9, fontWeight: '500', fontSize: 14, color: item?.to == to ? '#fff' : '#1B1B1B', textAlign: item?.to == to ? 'right' : 'left' }}>{item?.chat}</Text>
      </View>
    </View>
  </Animated.View>
}

const ListChat = ({ to, me }: { to: string, me: string }) => {
  const dispatch: any = useDispatch();
  const { top, bottom } = useSafeAreaInsets();
  const listChatData = useChatData()

  const flatListRef = useRef<FlatList>(null);

  const viewableItems = useSharedValue<ViewToken[]>([])

  const scrollToBottom = () => {
    if (flatListRef.current && listChatData?.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }

  useEffect(() => {
    dispatch(readChat(me))
  }, [])

  useEffect(() => {
    if (listChatData?.length) {
      setTimeout(() => {
        scrollToBottom()
      }, 1000);
    }
  }, [listChatData])

  return (<>
    <FlatList
      ref={flatListRef}
      style={{ height: height - (top + bottom + 60 + 50) }}
      contentContainerStyle={{ paddingTop: 20 }}
      onViewableItemsChanged={({ viewableItems: vItems }) => {
        viewableItems.value = vItems
      }}
      data={listChatData}
      renderItem={({ item, index }: { item: ChatItem, index: number }) => <ListItem index={index} item={item} viewbleItems={viewableItems} to={to} me={me} />}
    />
    <InputChat to={to} me={me} onFocus={scrollToBottom} />
  </>)
}

export default ListChat;


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
  listItemCard: {
    borderRadius: 16,
    padding: 8,
    paddingHorizontal: 12
  }
});