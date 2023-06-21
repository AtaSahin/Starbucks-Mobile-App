import React from 'react';
import { View,ScrollView,Text,Pressable, TouchableOpacity } from 'react-native';
import WhiteMocha from '../../navigation/assets/svgImages/CoffeImages/WhiteMocha';
import styles from './MochaCoffe.styles';


function CoffeItems() {


    return (

        <   View style={styles.coffeContainer}>
        
            <View style={styles.coffeItemTextContainer}>
            <Text style={styles.coffeItemText}>White Chocolate</Text>
            <Text style={styles.coffeItemText}>Mocha</Text>
            <Text style={styles.coffePriceText}>$5</Text>
            </View>
            <View style={{left:5}}>
            <WhiteMocha/>
            </View>
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