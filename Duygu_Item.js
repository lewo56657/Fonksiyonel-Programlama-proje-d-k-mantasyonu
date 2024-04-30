import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Duygu_Item({
  id,
  title,
  imageUrl,
 
}) {
  const navigation = useNavigation();
  const Duygu_ItemHandler = () => {
    navigation.navigate('FoodDetail', {
      foodId: id,
    });
  };

  return (
    <View style={styles.Duygu_Item}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={Duygu_ItemHandler}
      >
        <View style={styles.innerView}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Duygu_Item: {
    margin: 15,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
  },
  innerView: {},
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
