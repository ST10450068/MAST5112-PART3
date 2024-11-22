import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';

const getRandomOrderNumber = () => {
  return Math.floor(Math.random() * 1000000);
};

export default function Cart({ cartItems, setShowCart }) {
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderNumber, setOrderNumber] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    if (!name) {
      alert('Name is required');
      return;
    }

    if (paymentMethod !== 'Cash' && (cardNumber === '' || cardExpiry === '' || cardCVC === '')) {
      alert('Please enter complete card information');
      return;
    }

    setOrderNumber(getRandomOrderNumber());
    setOrderPlaced(true);
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/chef-hat.png')} style={styles.chefHat} />
        <Text style={styles.headerTitle}>Checkout</Text>
        <Text style={styles.hungryEmoji}>😋</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cartItems.map((item, index) => (
          <Text key={index} style={styles.cartItem}>
            {item.quantity} x {item.itemName} – R{item.price * item.quantity}
          </Text>
        ))}
        <Text style={styles.totalCost}>Total: R{totalCost}</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Select Payment Method:</Text>
        <TouchableOpacity
          style={paymentMethod === 'Cash' ? styles.selectedMethod : styles.paymentMethod}
          onPress={() => setPaymentMethod('Cash')}
        >
          <Text style={styles.methodText}>Cash</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={paymentMethod === 'Visa' ? styles.selectedMethod : styles.paymentMethod}
          onPress={() => setPaymentMethod('Visa')}
        >
          <Text style={styles.methodText}>Visa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={paymentMethod === 'Mastercard' ? styles.selectedMethod : styles.paymentMethod}
          onPress={() => setPaymentMethod('Mastercard')}
        >
          <Text style={styles.methodText}>Mastercard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={paymentMethod === 'Paypal' ? styles.selectedMethod : styles.paymentMethod}
          onPress={() => setPaymentMethod('Paypal')}
        >
          <Text style={styles.methodText}>Paypal</Text>
        </TouchableOpacity>

        {paymentMethod !== 'Cash' && paymentMethod !== '' && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              value={cardNumber}
              onChangeText={setCardNumber}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Expiry Date (MM/YY)"
              value={cardExpiry}
              onChangeText={setCardExpiry}
            />
            <TextInput
              style={styles.input}
              placeholder="CVC"
              value={cardCVC}
              onChangeText={setCardCVC}
              keyboardType="numeric"
            />
          </>
        )}

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleOrder}
        >
          <Text style={styles.confirmButtonText}>Confirm Order</Text>
        </TouchableOpacity>

        {orderNumber && !orderPlaced && (
          <Text style={styles.orderNumber}>
            Thank you, {name}! Your order number is #{orderNumber}.
          </Text>
        )}

        {orderPlaced && (
          <Modal
            visible={orderPlaced}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setOrderPlaced(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Thank You for Your Order!</Text>
                <Text style={styles.modalMessage}>Thanks for trusting Chef Christoffel's restaurant. Your order is being prepared!</Text>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setShowCart(false)}
                >
                  <Text style={styles.modalButtonText}>Go to Menu</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setShowCart(false)}
        >
          <Text style={styles.backButtonText}>Back to Menu</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Line-Tech</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  chefHat: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    flex: 1,
  },
  hungryEmoji: {
    fontSize: 30,
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  cartItem: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  totalCost: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  paymentMethod: {
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedMethod: {
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  methodText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  confirmButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
