import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Starters({ addToCart, navigateToMainMenu, navigateToDessertsMenu, navigateToCart }) {
  return (
    <View style={styles.container}>
      {/* Header with Cart */}
      <View style={styles.header}>
        <Text style={styles.title}>Starters Menu</Text>
        <TouchableOpacity style={styles.cartButton} onPress={navigateToCart}>
          <Text style={styles.cartButtonText}>Cart</Text>
        </TouchableOpacity>
      </View>
      
      {/* Smoked Salmon Carpaccio */}
      <View style={styles.menuItem}>
        <Image source={require('./assets/salmon.jpg')} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.itemTitle}>Smoked Salmon Carpaccio – R85</Text>
          <Text style={styles.description}>
            Delicate slices of smoked salmon with a lemon-dill dressing, capers, and thinly sliced red onions, served with crusty bread.
          </Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => addToCart('Smoked Salmon Carpaccio', 85)}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Stuffed Portobello Mushrooms */}
      <View style={styles.menuItem}>
        <Image source={require('./assets/Vegetable-Stuffed-Portabella-Mushrooms-4-720x1080.jpg')} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.itemTitle}>Stuffed Portobello Mushrooms – R70</Text>
          <Text style={styles.description}>
            Large Portobello mushrooms stuffed with creamy goat cheese, herbs, and sun-dried tomatoes, baked until golden.
          </Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => addToCart('Stuffed Portobello Mushrooms', 70)}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Navigation buttons at the bottom */}
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navigationButton} onPress={navigateToMainMenu}>
          <Text style={styles.navigationButtonText}>Continue to Main Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton} onPress={navigateToDessertsMenu}>
          <Text style={styles.navigationButtonText}>Continue to Desserts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F4A300',
  },
  cartButton: {
    backgroundColor: '#F4A300',
    padding: 10,
    borderRadius: 20,
  },
  cartButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#F4A300',
    padding: 10,
    borderRadius: 20,
  },
  addToCartText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  navigation: {
    marginTop: 20,
    alignItems: 'center',
  },
  navigationButton: {
    backgroundColor: '#F4A300',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: '50%',
    alignItems: 'center',
  },
  navigationButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

