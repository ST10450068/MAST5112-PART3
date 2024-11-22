import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddedItems({ route }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const [menuItems, setMenuItems] = useState([
    { id: '1', name: 'Pasta', price: 'R50', image: null },
    { id: '2', name: 'Pizza', price: 'R80', image: null },
  ]);
  const navigation = useNavigation();

  const toggleDarkTheme = () => setDarkTheme(!darkTheme);

  const deleteMenuItem = (id) => {
    Alert.prompt('Enter Password', 'Enter the chef\'s password to delete this item:', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        onPress: (password) => {
          if (password === '1234') {
            setMenuItems(menuItems.filter((item) => item.id !== id));
            Alert.alert('Success', 'Menu item has been deleted.');
          } else {
            Alert.alert('Error', 'Incorrect password.');
          }
        },
      },
    ]);
  };

  return (
    <View
      style={[styles.container, darkTheme ? styles.darkContainer : styles.lightContainer]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('./assets/chef-hat.png')} style={styles.headerLogo} />
        <Text style={[styles.headerText, darkTheme && { color: '#fff' }]}>
          Added Menu Items
        </Text>
        <TouchableOpacity onPress={toggleDarkTheme} style={styles.optionsButton}>
          <Text style={[styles.optionsIcon, darkTheme && { color: '#fff' }]}>
            {darkTheme ? '☀️' : '🌙'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Menu List */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            {item.image && <Image source={{ uri: item.image }} style={styles.previewImage} />}
            <View>
              <Text style={[styles.menuText, darkTheme && { color: '#fff' }]}>
                {item.name} - {item.price}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteMenuItem(item.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />

      {/* Back Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to Chef Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10, // Reduced padding for more content space
  },
  darkContainer: { backgroundColor: '#222' },
  lightContainer: { backgroundColor: '#f7f7f7' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFA500',
  },
  headerLogo: { width: 40, height: 40 },
  headerText: { fontSize: 20, fontWeight: 'bold', flex: 1, textAlign: 'center' },
  optionsButton: { padding: 10 },
  optionsIcon: { fontSize: 20 },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: darkTheme ? 0 : 1,
    borderColor: '#ccc',
  },
  menuText: { fontSize: 16, flex: 1, paddingRight: 10 },
  deleteButton: { backgroundColor: '#FF6347', padding: 10, borderRadius: 5 },
  deleteButtonText: { color: '#fff', fontWeight: 'bold' },
  listContainer: {
    paddingHorizontal: 5, // Maximizes the width usage
  },
  button: {
    backgroundColor: '#4682b4',
    padding: 15,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16 },
});

