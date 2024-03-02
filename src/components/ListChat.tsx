import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ViewToken,
  StyleSheet
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { ChatItem } from "../types/TestTypes";

const { width, height } = Dimensions.get('screen')

const listData = [
  {
    name: 'Reky',
    chat: 'hallo broo',
    read: true,
    id: 1
  }, {
    name: 'Rizal',
    chat: 'gimana broo, apa yang bisa saya bantu nih, kalau ada jangan sungkan ya broo, kita kan temen hehe',
    read: true,
    id: 2
  }, {
    name: 'Reky',
    chat: 'engga, gimana kabarnya bro sehatkah, oh iya ada lowongan ga?',
    read: true,
    id: 3
  }, {
    name: 'Rizal',
    chat: 'belum ada broo',
    read: true,
    id: 4
  }, {
    name: 'Reky',
    chat: 'oh ok broo',
    read: true,
    id: 5
  },
  {
    name: 'Reky',
    chat: 'hallo broo',
    read: true,
    id: 6
  }, {
    name: 'Rizal',
    chat: 'gimana broo, apa yang bisa saya bantu nih, kalau ada jangan sungkan ya broo, kita kan temen hehe',
    read: true,
    id: 7
  }, {
    name: 'Reky',
    chat: 'engga, gimana kabarnya bro sehatkah, oh iya ada lowongan ga?',
    read: true,
    id: 8
  }, {
    name: 'Rizal',
    chat: 'belum ada broo',
    read: true,
    id: 9
  }, {
    name: 'Reky',
    chat: 'oh ok broo',
    read: true,
    id: 10
  },
  {
    name: 'Reky',
    chat: 'hallo broo',
    read: true,
    id: 11
  }, {
    name: 'Rizal',
    chat: 'gimana broo, apa yang bisa saya bantu nih, kalau ada jangan sungkan ya broo, kita kan temen hehe',
    read: true,
    id: 12
  }, {
    name: 'Reky',
    chat: 'engga, gimana kabarnya bro sehatkah, oh iya ada lowongan ga?',
    read: true,
    id: 13
  }, {
    name: 'Rizal',
    chat: 'belum ada broo',
    read: true,
    id: 14
  }, {
    name: 'Reky',
    chat: 'oh ok broo',
    read: true,
    id: 15
  },
  {
    name: 'Reky',
    chat: 'hallo broo',
    read: true,
    id: 16
  }, {
    name: 'Rizal',
    chat: 'gimana broo, apa yang bisa saya bantu nih, kalau ada jangan sungkan ya broo, kita kan temen hehe',
    read: true,
    id: 17
  }, {
    name: 'Reky',
    chat: 'engga, gimana kabarnya bro sehatkah, oh iya ada lowongan ga?',
    read: true,
    id: 18
  }, {
    name: 'Rizal',
    chat: 'belum ada broo',
    read: true,
    id: 19
  }, {
    name: 'Reky',
    chat: 'oh ok broo',
    read: true,
    id: 20
  },
  {
    name: 'Reky',
    chat: 'hallo broo',
    read: true,
    id: 21
  }, {
    name: 'Rizal',
    chat: 'gimana broo, apa yang bisa saya bantu nih, kalau ada jangan sungkan ya broo, kita kan temen hehe',
    read: true,
    id: 22
  }, {
    name: 'Reky',
    chat: 'engga, gimana kabarnya bro sehatkah, oh iya ada lowongan ga?',
    read: true,
    id: 23
  }, {
    name: 'Rizal',
    chat: 'belum ada broo',
    read: true,
    id: 24
  }, {
    name: 'Reky',
    chat: 'oh ok broo mantap',
    read: true,
    id: 25
  }
]

const ListItem = ({ item, index, viewbleItems, name }: { item: ChatItem, index: number, viewbleItems: Animated.SharedValue<ViewToken[]>, name: string }) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(viewbleItems.value.filter((item) => item.isViewable).find((viewbleItem) => viewbleItem.item.id == item.id))

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [{
        scale: withTiming(isVisible ? 1 : 0.6),
      }]
    }
  }, [])

  return <Animated.View style={[{ marginTop: index ? 0 : 20, }, styles.listItem, rStyle]}>
    <View style={[styles.listItemFlex, { justifyContent: item?.name == name ? 'flex-end' : 'flex-start' }]}>
      {!(item?.name == name) && <View style={styles.listItemRound} />}
      <View style={[styles.listItemCard, { backgroundColor: item?.name == name ? '#884FE5' : '#F5F6FB' }]}>
        <Text style={{ maxWidth: (width - 108) * .9, fontWeight: '500', fontSize: 14, color: item?.name == name ? '#fff' : '#1B1B1B', textAlign: item?.name == name ? 'right' : 'left' }}>{item?.chat}</Text>
      </View>
    </View>
  </Animated.View>
}
let time: any
const ListChat = ({ name }: { name: string }) => {
  const { top, bottom } = useSafeAreaInsets();

  const flatListRef = useRef<FlatList>(null);

  const [data, setData] = useState(listData)

  const viewableItems = useSharedValue<ViewToken[]>([])

  const scrollToBottom = () => {
    if (flatListRef.current && data && data.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }

  useEffect(() => {

    return () => {
      clearTimeout(time)
    }
  })

  useEffect(() => {
    if (data?.length < 40) {
      clearTimeout(time)
      time = setTimeout(() => {
        setData([...data, { ...listData[0], id: data?.length + 1 }])
        scrollToBottom()
      }, 3000);
    }
  }, [data])

  return (<FlatList
    ref={flatListRef}
    style={{ height: height - (top + bottom + 60 + 50) }}
    onViewableItemsChanged={({ viewableItems: vItems }) => {
      viewableItems.value = vItems
    }}
    data={data}
    renderItem={({ item, index }: { item: ChatItem, index: number }) => <ListItem index={index} item={item} viewbleItems={viewableItems} name={name} />}
  />)
}

export default ListChat;


const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 20
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