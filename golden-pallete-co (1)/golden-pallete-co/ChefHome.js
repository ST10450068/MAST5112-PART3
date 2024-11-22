import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert,
  Modal,
} from 'react-native';

export default function ChefHome() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [screen, setScreen] = useState('ChefHome');
  const [menuItems, setMenuItems] = useState({ Starters: [], Main: [], Desserts: [] });
  const [formData, setFormData] = useState({
    name: '',
    detail: '',
    price: '',
    image: '',
    category: 'Starters',
  });
  const [modalVisible, setModalVisible] = useState(false); // For Settings Modal

  const toggleDarkTheme = () => setDarkTheme(!darkTheme);

  const navigateTo = (targetScreen) => {
    setScreen(targetScreen);
  };

  const handleAddMenuItem = () => {
    const { name, detail, price, image, category } = formData;

    // Validate form data
    if (!name || !detail || !price || !image) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    if (!/^R\d+$/.test(price)) {
      Alert.alert('Error', 'Price must be in the format "R" followed by numbers.');
      return;
    }

    // Add new item to the selected category
    setMenuItems({
      ...menuItems,
      [category]: [...menuItems[category], { name, detail, price, image }],
    });

    // Clear the form
    setFormData({ name: '', detail: '', price: '', image: '', category: 'Starters' });

    Alert.alert('Success', 'Menu item added successfully.');
  };

  const toggleSettingsModal = () => {
    setModalVisible(!modalVisible);
  };

  if (screen === 'AddedItems') {
    return (
      <AddedItems
        menuItems={menuItems}
        navigateBack={() => navigateTo('ChefHome')}
        setMenuItems={setMenuItems}
        darkTheme={darkTheme}
      />
    );
  }

  return (
    <ScrollView
      style={[styles.container, darkTheme ? styles.darkContainer : styles.lightContainer]}
    >
      {/* Header with Chef Hat Image */}
      <View style={styles.header}>
        <Image
          source={require('./assets/chef-hat.png')} // Replace with actual path
          style={styles.chefHatImage}
        />
        <Text style={styles.headerText}>Chef's Menu Manager</Text>
        <TouchableOpacity onPress={toggleSettingsModal}>
          <Text style={styles.settingsText}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Add New Menu Form */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, darkTheme ? styles.darkInput : styles.lightInput]}
          placeholder="Menu Name"
          placeholderTextColor={darkTheme ? '#aaa' : '#555'}
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />
        <TextInput
          style={[styles.input, darkTheme ? styles.darkInput : styles.lightInput]}
          placeholder="Details"
          placeholderTextColor={darkTheme ? '#aaa' : '#555'}
          value={formData.detail}
          onChangeText={(text) => setFormData({ ...formData, detail: text })}
        />
        <TextInput
          style={[styles.input, darkTheme ? styles.darkInput : styles.lightInput]}
          placeholder="Price (e.g., R50)"
          placeholderTextColor={darkTheme ? '#aaa' : '#555'}
          value={formData.price}
          onChangeText={(text) => setFormData({ ...formData, price: text })}
        />
        <TextInput
          style={[styles.input, darkTheme ? styles.darkInput : styles.lightInput]}
          placeholder="Image URL"
          placeholderTextColor={darkTheme ? '#aaa' : '#555'}
          value={formData.image}
          onChangeText={(text) => setFormData({ ...formData, image: text })}
        />
        <View style={styles.categorySelector}>
          <Text style={styles.label}>Category:</Text>
          <TouchableOpacity
            onPress={() => setFormData({ ...formData, category: 'Starters' })}
            style={[styles.categoryButton, formData.category === 'Starters' && styles.selectedCategory]}
          >
            <Text style={styles.categoryText}>Starters</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFormData({ ...formData, category: 'Main' })}
            style={[styles.categoryButton, formData.category === 'Main' && styles.selectedCategory]}
          >
            <Text style={styles.categoryText}>Main</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFormData({ ...formData, category: 'Desserts' })}
            style={[styles.categoryButton, formData.category === 'Desserts' && styles.selectedCategory]}
          >
            <Text style={styles.categoryText}>Desserts</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleAddMenuItem}>
          <Text style={styles.buttonText}>Add New Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Navigate to Edit Menu */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('AddedItems')}
      >
        <Text style={styles.buttonText}>Edit Menu</Text>
      </TouchableOpacity>

      {/* Settings Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleSettingsModal}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Settings</Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              toggleDarkTheme();
              toggleSettingsModal();
            }}
          >
            <Text style={styles.buttonText}>Toggle Dark Mode</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={toggleSettingsModal}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}

function AddedItems({ navigateBack, menuItems, setMenuItems, darkTheme }) {
  const deleteMenuItem = (category, index) => {
  if (menuItems[category].length === 0) {
    Alert.alert('Error', 'No items to delete in this category.');
    return;
  }

  Alert.prompt('Enter Password', 'Enter the chef\'s password to delete this item:', [
    { text: 'Cancel', style: 'cancel' },
    {
      text: 'Delete',
      onPress: (password) => {
        if (password === '1234') {
          const updatedItems = { ...menuItems };
          updatedItems[category].splice(index, 1); // Remove the item
          setMenuItems(updatedItems); // Update state
          Alert.alert('Success', 'Menu item has been deleted.');
        } else {
          Alert.alert('Error', 'Incorrect password.');
        }
      },
    },
  ]);
};

  return (
    <ScrollView
      style={[styles.container, darkTheme ? styles.darkContainer : styles.lightContainer]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Added Menu Items</Text>
      </View>

      {Object.keys(menuItems).map((category) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={[styles.categoryHeader, { color: darkTheme ? '#fff' : '#000' }]}>{category}</Text>
          {menuItems[category].map((item, index) => (
            <View key={index} style={styles.menuItem}>
              <Image source={{ uri: item.image }} style={styles.menuImage} />
              <View>
                <Text style={[styles.menuText, { color: darkTheme ? '#fff' : '#000' }]}>{item.name} - {item.price}</Text>
                <Text style={[styles.menuDetail, { color: darkTheme ? '#aaa' : '#555' }]}>{item.detail}</Text>
                <TouchableOpacity
                  style={[styles.deleteButton, { backgroundColor: '#FF6347' }]}
                  onPress={() => deleteMenuItem(category, index)}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={navigateBack}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  lightContainer: {
    backgroundColor: '#f9f9f9',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500', // Orange header
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    flexDirection: 'row', // Align items in a row for the header
    
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  chefHatImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  settingsText: {
    fontSize: 24,
    color: '#fff',
    marginRight: 10,
  },
  inputContainer: {
    marginVertical: 16,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  darkInput: {
    backgroundColor: '#555',
    color: '#fff',
  },
  lightInput: {
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categorySelector: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  selectedCategory: {
    backgroundColor: '#FFA500',
  },
  categoryText: {
    color: '#000',
  },
  label: {
    fontWeight: 'bold',
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  menuImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuDetail: {
    fontSize: 14,
  },
  deleteButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalView: {
    marginTop: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 40,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
});

