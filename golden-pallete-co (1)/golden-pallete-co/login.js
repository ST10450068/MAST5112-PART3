import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, Modal } from 'react-native';
import ChefHome from './ChefHome'; // Import ChefHome component

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
  const [resetEmail, setResetEmail] = useState(''); // Reset email state
  const [newPassword, setNewPassword] = useState(''); // New password state

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Handle the login logic
  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
    } else if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
    } else if (email === 'christofell@gmail.com' && password === '123456') {
      Alert.alert('Success', 'Logged in successfully');
      setIsLoggedIn(true); // Set login status to true to switch to ChefHome
    } else {
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  // Handle password reset logic
  const handlePasswordReset = () => {
    if (!validateEmail(resetEmail)) {
      Alert.alert('Error', 'Please enter a valid email address for reset');
    } else if (newPassword.length < 6) {
      Alert.alert('Error', 'New password should be at least 6 characters long');
    } else {
      Alert.alert('Success', 'Password has been reset successfully!');
      setModalVisible(false); // Close modal after success
    }
  };

  // Logout function to reset login state
  const handleLogout = () => {
    setIsLoggedIn(false); // This will take the user back to the login screen
  };

  // Render ChefHome if logged in, otherwise show login form
  if (isLoggedIn) {
    return <ChefHome chefInfo={{ email }} onLogout={handleLogout} />; // Pass onLogout prop to ChefHome
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/chef-hat.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.switchText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Forgot Password Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Reset Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            value={resetEmail}
            onChangeText={setResetEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter new password"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 25,
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
    paddingVertical: 10, // Adjusted padding for smaller button
    paddingHorizontal: 50, // Adjusted padding for smaller button
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  switchText: {
    color: '#000',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  cancelText: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
   footer: { textAlign: 'center', fontSize: 12, marginTop: 20, color: '#777' },
});


