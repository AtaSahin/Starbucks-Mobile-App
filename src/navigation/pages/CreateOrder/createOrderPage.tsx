import React, { useState } from 'react';
import { View,ScrollView,Text, TouchableOpacity } from 'react-native';
import styles from './CreateOrderPage.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import BestSellerCoffes from '../../../components/bestSellerCoffeItems/BestSellerCoffes';
import CoffeItems from '../../../components/Mocha/MochaCoffe';



function CreateOrderPage() {

  const [bgColor, setBgColor] = useState("white");
  const [activeButton, setActiveButton] = useState("BestSellerCoffes");
  
  const handleButtonPress = (buttonName:String) => {
    setActiveButton(buttonName);
  };
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.menuContainer}>
          <ScrollView style={styles.scrollViewStyle}>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => handleButtonPress("BestSellerCoffes")}>
              <View style={[styles.besetSellersButton, { backgroundColor: activeButton === "BestSellerCoffes" ? "#DFE4EC" : bgColor }]}>
                <Text style={styles.bestSellersText}>Best Sellers</Text>
              </View>
            </TouchableOpacity>
            
            <View style={{margin:10}}/>

            <TouchableOpacity onPress={() => handleButtonPress("Foods")}>
              <View style={[styles.foodsButton, { backgroundColor: activeButton === "Foods" ? "#DFE4EC" : bgColor }]}>
                <Text style={styles.foodText}>Foods</Text>
              </View>
            </TouchableOpacity>



            </View>
            {activeButton === "BestSellerCoffes" ? <BestSellerCoffes /> : null}
            {activeButton === "Foods" ? <CoffeItems /> : null}

          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );

}

export default CreateOrderPage;