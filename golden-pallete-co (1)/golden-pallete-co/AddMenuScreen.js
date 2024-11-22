import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Picker, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AddMenuScreen({ onSaveMeal }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const [mealDetails, setMealDetails] = useState({
    category: 'Starters',
    name: '',
    description: '',
    price: '',
    image: null,
  });

  // Toggle between dark and light theme
  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  // Image picker for selecting a meal image
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access media library is required!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setMealDetails({ ...mealDetails, image: result.uri });
    }
  };

  // Handle adding a meal
  const handleAddMeal = () => {
    onSaveMeal(mealDetails);
    setMealDetails({ category: 'Starters', name: '', description: '', price: '', image: null });
  };

  return (
    <ScrollView style={[styles.container, darkTheme ? styles.darkContainer : styles.lightContainer]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerText, darkTheme && { color: '#fff' }]}>Add New Meal</Text>
        <TouchableOpacity onPress={toggleDarkTheme} style={styles.themeToggleButton}>
          <Text style={[styles.themeToggleText, darkTheme && { color: '#fff' }]}>
            {darkTheme ? 'Light Theme' : 'Dark Theme'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Meal Details Form */}
      <View style={styles.form}>
        {/* Select Category */}
        <Text style={[styles.label, darkTheme && { color: '#fff' }]}>Category</Text>
        <Picker
          selectedValue={mealDetails.category}
          style={styles.picker}
          onValueChange={(itemValue) => setMealDetails({ ...mealDetails, category: itemValue })}
        >
          <Picker.Item label="Starters" value="Starters" />
          <Picker.Item label="Main Menu" value="Main Menu" />
          <Picker.Item label="Desserts" value="Desserts" />
        </Picker>

        {/* Meal Name */}
        <TextInput
          placeholder="Meal Name"
          style={[styles.input, darkTheme && { backgroundColor: '#333', color: '#fff' }]}
          value={mealDetails.name}
          onChangeText={(text) => setMealDetails({ ...mealDetails, name: text })}
        />

        {/* Meal Description */}
        <TextInput
          placeholder="Meal Description"
          style={[styles.input, darkTheme && { backgroundColor: '#333', color: '#fff' }]}
          value={mealDetails.description}
          onChangeText={(text) => setMealDetails({ ...mealDetails, description: text })}
        />

        {/* Meal Price */}
        <TextInput
          placeholder="Price (R)"
          style={[styles.input, darkTheme && { backgroundColor: '#333', color: '#fff' }]}
          keyboardType="numeric"
          value={mealDetails.price}
          onChangeText={(text) => setMealDetails({ ...mealDetails, price: text })}
        />

        {/* Image Picker */}
        <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
          <Text style={styles.imageButtonText}>Pick an Image</Text>
        </TouchableOpacity>

        {mealDetails.image && (
          <Image source={{ uri: mealDetails.image }} style={styles.previewImage} />
        )}

        {/* Add Meal Button */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddMeal}>
          <Text style={styles.addButtonText}>Add Meal</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={[styles.footer, darkTheme && { backgroundColor: '#333' }]}>
        <Text style={[styles.footerText, darkTheme && { color: '#fff' }]}>© Line-Tech 2024</Text>
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  lightContainer: {
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    backgroundColor: '#f04e4e',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
  },
  themeToggleButton: {
    padding: 10,
  },
  themeToggleText: {
    color: '#fff',
    fontSize: 16,
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  imageButton: {
    backgroundColor: '#F4A300',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  imageButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  previewImage: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: '#F04E4E',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#f04e4e',
    padding: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
});


