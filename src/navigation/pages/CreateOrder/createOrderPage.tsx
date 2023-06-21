import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from './createOrderPage.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TimeLocationPicker, CoffeItems, BestSellerCoffes } from '../../../components';

function CreateOrderPage() {
  const [bgColor, setBgColor] = useState("white");
  const [activeButton, setActiveButton] = useState("BestSellerCoffes");

  const handleButtonPress = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TimeLocationPicker />

        <View style={styles.menuContainer}>
          <Text style={styles.menuHeader}>Menu</Text>
          <ScrollView style={styles.scrollViewStyle}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => handleButtonPress("BestSellerCoffes")}>
                <View style={[styles.besetSellersButton, { backgroundColor: activeButton === "BestSellerCoffes" ? "#DFE4EC" : bgColor }]}>
                  <Text style={styles.bestSellersText}>Best Sellers</Text>
                </View>
              </TouchableOpacity>

              <View style={{ margin: 10 }} />

              <TouchableOpacity onPress={() => handleButtonPress("Foods")}>
                <View style={[styles.foodsButton, { backgroundColor: activeButton === "Foods" ? "#DFE4EC" : bgColor }]}>
                  <Text style={styles.foodText}>Foods</Text>
                </View>
              </TouchableOpacity>

              <View style={{ margin: 10 }} />

              <TouchableOpacity onPress={() => handleButtonPress("BestSellerCoffe")}>
                <View style={[styles.besetSellersButton, { backgroundColor: activeButton === "BestSellerCoffe" ? "#DFE4EC" : bgColor }]}>
                  <Text style={styles.bestSellersText}>Hot Release</Text>
                </View>
              </TouchableOpacity>
            </View>

            {activeButton === "BestSellerCoffes" ? <BestSellerCoffes /> : null}
            {activeButton === "BestSellerCoffe" ? <BestSellerCoffes /> : null}
            {activeButton === "Foods" ? <CoffeItems /> : null}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CreateOrderPage;
