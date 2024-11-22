import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Login from './login'; // Assuming login.js exists
import Signup from './signup'; // Assuming signup.js exists
import ChefHome from './ChefHome'; // Assuming ChefHome.js exists
import Welcome from './welcome'; // Assuming welcome.js exists



export default function App() {
  const [screen, setScreen] = useState('home'); 
  const [chefInfo, setChefInfo] = useState(null); 

  const handleLogin = (email) => {
    setChefInfo({ email }); 
    setScreen('chefhome'); 
  };

  const handleLogout = () => {
    setChefInfo(null); // Clear the chef's info
    setScreen('home'); // Navigate back to the home screen
  };

  const renderScreen = () => {
    switch (screen) {
      case 'login':
        return <Login switchToSignup={() => setScreen('signup')} switchToChefHome={handleLogin} />;
      case 'signup':
        return <Signup switchToLogin={() => setScreen('login')} />;
      case 'welcome':
        return <Welcome switchToHome={() => setScreen('home')} />;
      case 'chefhome':
        return <ChefHome chefInfo={chefInfo} onLogout={handleLogout} />; 
      case 'home':
      default:
        return (
          <View style={styles.container}>
            <Image source={require('./assets/chef-hat.png')} style={styles.logo} />
            <Text style={styles.title}>Golden</Text>
            <Text style={styles.subtitle}>Palette</Text>
            <Text style={styles.tagline}>Savor the Art of Fine Dining</Text>

            <TouchableOpacity style={styles.chefLoginButton} onPress={() => setScreen('login')}>
              <Text style={styles.chefLoginText}>Chef Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.guestButton} onPress={() => setScreen('welcome')}>
              <Text style={styles.guestText}>Continue As Guest</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 25,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  tagline: {
    fontSize: 18,
    color: '#F4A300',
    marginBottom: 40,
  },
  chefLoginButton: {
    backgroundColor: '#F4A300',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 20,
  },
  chefLoginText: {
    fontSize: 20,
    color: '#000000',
  },
  guestButton: {
    borderColor: '#000000',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  guestText: {
    fontSize: 20,
    color: '#000000',
  },
   footer: { textAlign: 'center', fontSize: 12, marginTop: 20, color: '#777' },
});



