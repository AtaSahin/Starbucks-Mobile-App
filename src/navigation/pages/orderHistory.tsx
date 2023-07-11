import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const orderHistory = () => {
  // Dummy data for order history
  const orderHistory = [
    {id: '1', beverage: 'Hazelnut Coffe', quantity: '4', total: '$20'},
  ];

  const renderOrderItem = ({item}) => (
    <View style={styles.orderItem}>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.beverage}>{item.beverage}</Text>
      <Text style={styles.total}>{item.total}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Starbucks Order History</Text>
      <FlatList
        data={orderHistory}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderItem: {
    marginBottom: 10,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  beverage: {
    fontSize: 14,
  },
  total: {
    fontSize: 14,
    color: 'green',
  },
});

export default orderHistory;
