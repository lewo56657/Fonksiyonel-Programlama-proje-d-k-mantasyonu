import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Duygu_Item from './Duygu_Item';

export default function Duygu_List({ items }) {
  function renderDuygu_Item(itemData) {
    console.log(itemData.item);
    const Duygu_ItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl
    };

    return <Duygu_Item {...Duygu_ItemProps} />;
  }
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderDuygu_Item}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
