import React from 'react';
import { View,ScrollView,Text,Pressable, TouchableOpacity } from 'react-native';
import HazelnutImage from '../../navigation/assets/svgImages/CoffeImages/HazelnutCoffe';
import styles from './CoffeItems.styles';

function CoffeItems() {


    return (

<   View style={styles.coffeContainer}>

    <View style={styles.coffeItemTextContainer}>
    <Text style={styles.coffeItemText}> Hazelnut Coffee  </Text>
    <Text style={styles.coffePriceText}>$5</Text>
    </View>
   
    <HazelnutImage/>

    <View>
    <TouchableOpacity>

    <View  style={styles.addButtonContainer}>

    <TouchableOpacity style={styles.addButton}>
    <Text style={styles.AddButtonStyles}>Add</Text>
    </TouchableOpacity>
     

 
    </View>
    </TouchableOpacity>
    </View>
  </View>
    );
}

export default CoffeItems;