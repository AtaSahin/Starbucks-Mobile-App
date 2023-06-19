import React from 'react';
import { View,ScrollView,Text,Pressable, TouchableOpacity } from 'react-native';
import styles from './CreateOrderPage.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HazelnutImage from '../../assets/svgImages/CoffeImages/HazelnutCoffe';
import BestSellerCoffes from '../../../components/bestSellerCoffeItems/BestSellerCoffes';



function CreateOrderPage() {
    return (
        <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.menuContainer}>
            <ScrollView style={styles.scrollViewStyle}>
              <BestSellerCoffes />
              <BestSellerCoffes />
              <BestSellerCoffes />
              <BestSellerCoffes />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
}

export default CreateOrderPage;