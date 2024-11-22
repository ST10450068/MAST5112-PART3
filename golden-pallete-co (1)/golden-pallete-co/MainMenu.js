import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal, Picker } from 'react-native';
import Cart from './Cart';

// Sample menu data
const menuData = [
  { name: 'Smoked Salmon Carpaccio', price: 85, description: 'Delicate slices of smoked salmon with a lemon-dill dressing.', category: 'Starters', image: require('./assets/salmon.jpg') },
  { name: 'Stuffed Portobello Mushrooms', price: 70, description: 'Large mushrooms stuffed with goat cheese and herbs.', category: 'Starters', image: require('./assets/Vegetable-Stuffed-Portabella-Mushrooms-4-720x1080.jpg') },
  { name: 'Butternut Squash Soup', price: 60, description: 'Creamy roasted butternut squash soup with crispy croutons.', category: 'Starters', image: require('./assets/Creamy-Butternut-Squash-Soup-Recipe-Plated-Cravings-3.jpg') },
  { name: 'Lamb Kofta with tzatziki', price: 240, description: 'Succulent lamb skewers with creamy tzatziki.', category: 'Main Menu', image: require('./assets/VEGAN.jpg') },
  { name: 'Lemon-herb couscous', price: 190, description: 'A light and zesty couscous dish with fresh herbs and pomegranate.', category: 'Main Menu', image: require('./assets/Easy-Couscous.jpg') },
  { name: 'Grilled Branzino', price: 180, description: 'A whole grilled branzino served with lemon-garlic sauce.', category: 'Main Menu', image: require('./assets/LEMON.jpg') },
  { name: 'Malva Pudding', price: 60, description: 'Traditional South African dessert served with custard.', category: 'Desserts', image: require('./assets/BD-Malva-Pudding-095.jpg') },
  { name: 'Chocolate Fondant', price: 75, description: 'Molten chocolate cake with vanilla ice cream.', category: 'Desserts', image: require('./assets/Chocolate-fondants-115-500x500.jpg') },
  { name: 'Lemon Cheesecake', price: 65, description: 'Zesty lemon cheesecake on a biscuit base.', category: 'Desserts', image: require('./assets/Lemon-Dream-Cheesecake_EXPS_FT24_93312_0329_JR_1.jpg') },
];

export default function MainMenu() {
  const [cartItems, setCartItems] = useState([]);
  const [menuItemQuantities, setMenuItemQuantities] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [menuItems, setMenuItems] = useState({
    starters: [],
    mains: [],
    desserts: [],
  });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (menuData) {
      setMenuItems({
        starters: menuData.filter(item => item.category === 'Starters'),
        mains: menuData.filter(item => item.category === 'Main Menu'),
        desserts: menuData.filter(item => item.category === 'Desserts'),
      });
    }
  }, []);

  const addItemToCart = (itemName, price, section, quantity, image) => {
    const itemExists = cartItems.find(item => item.itemName === itemName);

    if (itemExists) {
      const updatedCartItems = cartItems.map(item =>
        item.itemName === itemName
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = [...cartItems, { itemName, price, section, quantity, image }];
      setCartItems(updatedCartItems);
    }
  };

  const handleQuantityChange = (itemName, value) => {
    setMenuItemQuantities(prevState => ({
      ...prevState,
      [itemName]: value,
    }));
  };

  const renderMenuItem = (item, section) => {
    const quantity = menuItemQuantities[item.name] || 1;
    return (
      <View key={item.name} style={styles.menuItem}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.itemTitle}>{item.name} – R{item.price}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.quantityContainer}>
            <Text>Quantity:</Text>
            <Picker
              selectedValue={quantity}
              style={styles.quantityPicker}
              onValueChange={(itemValue) => handleQuantityChange(item.name, itemValue)}
            >
              {[...Array(10)].map((_, i) => (
                <Picker.Item key={i} label={`${i + 1}`} value={i + 1} />
              ))}
            </Picker>
          </View>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => addItemToCart(item.name, item.price, section, quantity, item.image)}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderCartModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Cart Items</Text>
          {cartItems.length === 0 ? (
            <Text style={styles.modalText}>Your cart is empty.</Text>
          ) : (
            cartItems.map((item, index) => (
              <Text key={index} style={styles.modalText}>
                {item.quantity} x {item.itemName} – R{item.price * item.quantity}
              </Text>
            ))
          )}
          {cartItems.length > 0 && (
            <TouchableOpacity
              style={styles.proceedButton}
              onPress={() => {
                setModalVisible(false);
                setShowCart(true);
              }}
            >
              <Text style={styles.proceedButtonText}>Proceed to Cart</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  if (showCart) {
    return <Cart cartItems={cartItems} setShowCart={setShowCart} />;
  }

  const filteredMenu = () => {
    if (selectedCategory === 'All') {
      return ['starters', 'mains', 'desserts']
        .flatMap(category => menuItems[category] || []);
    }
    return menuItems[selectedCategory.toLowerCase()] || [];
  };

  const renderCategoryPicker = () => {
    return (
      <Picker
        selectedValue={selectedCategory}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Main Menu" value="Main Menu" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
    );
  };

  const calculateAveragePrice = (category) => {
    const items = menuItems[category] || [];
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return items.length > 0 ? (total / items.length).toFixed(2) : '0.00';
  };

  // Debugging log to verify that "Main Menu" items are correctly filtered
  console.log("Main Menu Items:", menuItems.mains);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/chef-hat.png')} style={styles.chefHat} />
        <Text style={styles.headerTitle}>Menu</Text>
        <TouchableOpacity style={styles.cartButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.cartText}>🛒 {cartItems.length}</Text>
        </TouchableOpacity>
      </View>

      {renderCategoryPicker()}

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredMenu().map(item => renderMenuItem(item, item.category))}
      </ScrollView>

      <View style={styles.averagePriceContainer}>
        <Text style={styles.averagePriceText}>
          Average Price of Starters: R{calculateAveragePrice('starters')}
        </Text>
        <Text style={styles.averagePriceText}>
          Average Price of Main Menu: R{calculateAveragePrice('mains')}
        </Text>
        <Text style={styles.averagePriceText}>
          Average Price of Desserts: R{calculateAveragePrice('desserts')}
        </Text>
         <Text style={styles.footer}>© 2024 Kabelo Kgosana - Line-Tech</Text>
      </View>

      {renderCartModal()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f8f8f8' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  headerTitle: { fontSize: 24, fontWeight: 'bold' },
  chefHat: { width: 40, height: 40 },
  cartButton: { padding: 10, backgroundColor: '#ccc', borderRadius: 5 },
  cartText: { fontSize: 16 },
  picker: { marginBottom: 20 },
  quantityPicker: { flex: 1 },
  menuItem: { flexDirection: 'row', marginBottom: 10, borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 10 },
  image: { width: 100, height: 100, borderRadius: 10 },
  details: { flex: 1, marginLeft: 10 },
  itemTitle: { fontSize: 18, fontWeight: 'bold' },
  description: { marginTop: 5, fontSize: 14 },
  quantityContainer: { marginTop: 10 },
  addToCartButton: { marginTop: 10, backgroundColor: '#28a745', padding: 10, borderRadius: 5 },
  addToCartText: { color: '#fff', fontSize: 16 },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '80%' },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  modalText: { fontSize: 16 },
  proceedButton: { backgroundColor: '#28a745', padding: 10, borderRadius: 5, marginTop: 10 },
  proceedButtonText: { color: '#fff', fontSize: 16 },
  closeButton: { marginTop: 10, backgroundColor: '#dc3545', padding: 10, borderRadius: 5 },
  closeButtonText: { color: '#fff', fontSize: 16 },
  footer: { textAlign: 'center', fontSize: 12, marginTop: 20, color: '#777' },
  averagePriceContainer: { marginTop: 20, padding: 10, backgroundColor: '#f1f1f1', borderRadius: 10 },
  averagePriceText: { fontSize: 16, marginBottom: 5 },
});




