import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { FOODS, CATEGORIES } from '../data/dummy-data';
import FoodItem from '../components/Duygu_Item';
import { useLayoutEffect } from 'react';
import Duygu_List from '../components/Duygu_List';

export default function FoodOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const displayedFoods = FOODS.filter((foodItem) => {
    return foodItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);


  return <Duygu_List items={displayedFoods} />;
}

const styles = StyleSheet.create({});
