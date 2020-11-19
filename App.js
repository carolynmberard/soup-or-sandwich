import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/soup-sandwich.jpeg';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>To join the Soup or Sandwich debate, just press the button below!</Text>
      <TouchableOpacity
        onPress={() => alert('🥪 Jk, everything is a sandwich 🥪')}
        style={styles.button}>
        <Text style={styles.buttonText}>Choose a Side</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 10,
    borderRadius: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00ABA3',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }
});
