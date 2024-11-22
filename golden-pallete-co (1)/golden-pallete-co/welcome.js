import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HomeScreen from './HomeScreen';
import Starters from './starters';
import MainMenu from './MainMenu';
import Dessert from './Dessert';

export default function Welcome() {
  const [screen, setScreen] = useState('welcome'); // Track current screen

  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return (
          <HomeScreen
            switchToStarters={() => setScreen('starters')}
            switchToMainMenu={() => setScreen('mainmenu')}
            switchToDessert={() => setScreen('dessert')}
          />
        );
      case 'starters':
        return <Starters />;
      case 'mainmenu':
        return <MainMenu />;
      case 'dessert':
        return <Dessert />;
      case 'welcome':
      default:
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Welcome to Golden Palette!</Text>
            <Text style={styles.message}>
              We’re so glad you chose to dine with us today. At Golden Palette, every dish we serve is a little work of art,
              made with love, the best ingredients, and a touch of elegance. Whether you're here for a quick bite or a special
              night out, we've created a menu that’s sure to excite your taste buds and spark your senses.
              {'\n\n'}
              So sit back, relax, and enjoy as we bring a little bit of luxury to your table. Let us take you on a delicious
              journey that’s all about great food, good vibes, and unforgettable moments. {'\n\n'}
              Thanks for joining us at Golden Palette—we can't wait to serve you something truly special!
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => setScreen('home')}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
              <Text style={styles.footer}>© 2024 Line-Tech</Text>
          </View>
        );
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F4A300',
    marginBottom: 20,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#F4A300',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
   footer: { textAlign: 'center', fontSize: 12, marginTop: 20, color: '#777' },
});

