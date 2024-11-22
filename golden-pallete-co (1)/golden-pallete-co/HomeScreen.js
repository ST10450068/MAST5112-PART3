// HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ switchToMainMenu }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/chef-hat.png')} style={styles.logo} />
      <Text style={styles.title}>Hello Customer!</Text>
      <Text style={styles.message}>You can view our Main Menu below:</Text>

      <TouchableOpacity style={styles.menuButton} onPress={switchToMainMenu}>
        <Text style={styles.menuButtonText}>Main Menu</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>© 2024 Kabelo Kgosana - Line-Tech</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 25,
  },
  message: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 40,
  },
  menuButton: {
    backgroundColor: '#F4A300',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginBottom: 20,
  },
  menuButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
   footer: { textAlign: 'center', fontSize: 12, marginTop: 20, color: '#777' },
});
