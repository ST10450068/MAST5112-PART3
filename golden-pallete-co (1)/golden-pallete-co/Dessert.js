import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Desserts({ addToCart, navigateToCart }) {
  return (
    <View style={styles.container}>
      {/* Header with Cart */}
      <View style={styles.header}>
        <Text style={styles.title}>Desserts Menu</Text>
        <TouchableOpacity style={styles.cartButton} onPress={navigateToCart}>
          <Text style={styles.cartButtonText}>Cart</Text>
        </TouchableOpacity>
      </View>
      
      {/* Malva Pudding */}
      <View style={styles.menuItem}>
        <Image source={require('./assets/BD-Malva-Pudding-095.jpg')} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.itemTitle}>Malva Pudding – R60</Text>
          <Text style={styles.description}>
            A traditional South African dessert served warm, made with apricot jam and served with a rich custard or vanilla ice cream.
          </Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => addToCart('Malva Pudding', 60)}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Chocolate Fondant */}
      <View style={styles.menuItem}>
        <Image source={require('./assets/Chocolate-fondants-115-500x500.jpg')} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.itemTitle}>Chocolate Fondant – R75</Text>
          <Text style={styles.description}>
            A decadent molten chocolate cake with a soft, gooey center, served with vanilla ice cream and a drizzle of raspberry sauce.
          </Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => addToCart('Chocolate Fondant', 75)}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Lemon Cheesecake */}
      <View style={styles.menuItem}>
        <Image source={require('./assets/Lemon-Dream-Cheesecake_EXPS_FT24_93312_0329_JR_1.jpg')} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.itemTitle}>Lemon Cheesecake – R65</Text>
          <Text style={styles.description}>
            A zesty, creamy lemon cheesecake on a crunchy biscuit base, topped with a light lemon curd.
          </Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => addToCart('Lemon Cheesecake', 65)}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Proceed to Cart */}
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navigationButton} onPress={navigateToCart}>
          <Text style={styles.navigationButtonText}>Proceed to Cart</Text>
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
    width: '80%',
    alignItems: 'center',
  },
  navigationButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

