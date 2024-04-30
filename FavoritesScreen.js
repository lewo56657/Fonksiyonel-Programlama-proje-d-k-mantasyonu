import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { FavoritesContext } from '../store/favoritescontext';
import { FOODS } from '../data/dummy-data';
import Duygu_List from '../components/Duygu_List';
import { useSelector } from 'react-redux';

export default function FavoritesScreen() {
  const favoriteFoodsIds = useSelector((state) => state.favoriteFoods.ids);

  const favoriteFoods = FOODS.filter((food) =>
    favoriteFoodsIds.includes(food.id)
  );

  if (favoriteFoods.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Favorilere herhangi birşey eklemediniz</Text>
      </View>
    );
  }
  return <Duygu_List items={favoriteFoods} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
