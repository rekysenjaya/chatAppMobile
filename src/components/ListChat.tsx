import React, { useEffect, useRef } from "react";
import {
  Text,
  FlatList,
  Dimensions,
  ViewToken,
  StyleSheet
} from "react-native";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSharedValue } from "react-native-reanimated";

import { ChatItem } from "../types/TestTypes";

import { useChatData } from "../hooks";

import { readChat } from "../store/user/actions";

import InputChat from "./InputChat";
import ListItem from "./ListItem";

const { height } = Dimensions.get('screen')

const ListHeaderChat = () => <Text style={styles.listHeaderChatText}>{moment().format('MMM DD, H:mm A')}</Text>

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
      ListHeaderComponent={<ListHeaderChat />}
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
  listHeaderChatText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 25
  }
});