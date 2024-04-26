
/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const courses = [
    { name: 'Angular', id: 1 },
    { name: 'React Js', id: 2 },
    { name: 'C#', id: 3 },
    { name: 'C Programlama', id: 4 },
    { name: 'Bootstrap', id: 5 },
  ];
  return (
    <FlatList
      data={courses}
      // horizontal={true}
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Text style={styles.content}>{item.name}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    backgroundColor: 'yellow',
    marginVertical: 10,
    padding: 20,
  },
});
*/




import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Girişyap from './src/Ekranlar/Giriş_Yap';
import Kayıt_Ol from './src/Ekranlar/Kayıt_ol';
const Stack = createNativeStackNavigator();
const LoginScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Kayıt_Ol" component={Kayıt_Ol} />
        <Stack.Screen name="Giriş_Yap" component={Giriş_Yap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default LoginScreen;


