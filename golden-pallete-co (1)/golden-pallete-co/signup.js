import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup({ switchToLogin, switchToHome }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Function to check password strength
  const checkPasswordStrength = (password) => {
    const strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return strongPassword.test(password);
  };

  // Function to save user data to local storage
  const saveUserData = async () => {
    try {
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);
      Alert.alert('Success', 'Signed up successfully');
      switchToHome(); // Navigate to home after signup
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignup = () => {
    if (name === '' || email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
    } else if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
    } else if (!checkPasswordStrength(password)) {
      Alert.alert('Error', 'Password must be at least 8 characters long and include a number, an uppercase letter, and a lowercase letter');
    } else {
      saveUserData(); // Save user data to local storage
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/chef-hat.png')} style={styles.logo} />
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={switchToLogin}>
        <Text style={styles.switchText}>Already Registered? Log in here</Text>
      </TouchableOpacity>
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
  logo: {
    width: 250,
    height: 250,
    marginBottom: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F4A300',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
  switchText: {
    color: '#000',
    fontSize: 16,
  },
});


