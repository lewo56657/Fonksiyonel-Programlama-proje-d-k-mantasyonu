import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function Giriş_Yap( {navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Giriş Ekranı</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Kayıt_Ol')}
      />
    </View>
    /*
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Giriş Yap</Text>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
        />
         <TextInput
          style={styles.input}
          placeholder="Şifre"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    
    </View>
    */

  )
}

const styles = StyleSheet.create({
  /*
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA', // Açık mavi
  },
  formContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '80%',
    elevation: 5, // Android'de gölgelendirme efekti için
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
    color: '#333',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  */
})