import React,{useState} from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import HazelnutImage from '../../navigation/assets/svgImages/CoffeImages/HazelnutCoffe';
import styles from './CoffeItems.styles';

function CoffeItems() {
const [quantity, setQuantity]= useState(0)
const [showQuantity, setShowQuantity]=useState(false)

    return (

    <View style={styles.coffeContainer}>

    <View style={styles.coffeItemTextContainer}>
    <Text style={styles.coffeItemText}> Hazelnut Coffee  </Text>
    <Text style={styles.coffePriceText}>$5</Text>
    </View>
   
   <View style={{left:5}}>
    <HazelnutImage/>
    </View>

    <View>
    <TouchableOpacity>

    <View  style={styles.addButtonContainer}>

    <TouchableOpacity
    onPress={()=> {
    setQuantity(quantity+1)
    setShowQuantity(true)

    }}
    style={styles.addButton}
    >
    <Text style={styles.AddButtonStyles}>Add</Text>
    </TouchableOpacity>
     
    {showQuantity && 
    
    <View style={styles.quantityContainer}>
    <Text style={styles.quantityText}>{quantity}</Text>
    <View style={styles.plusMinus}>
    <Text style={{fontSize:20,bottom:6.5,left:8}}onPress={()=> setQuantity(quantity-1)}>__</Text>
    <View style={{margin:30}}/>
   <Text  style={{fontSize:22,right:8}}onPress={()=> setQuantity(quantity+1)}>+</Text>
    </View>


    </View>
    
    }
 
    </View>
    </TouchableOpacity>
  
    </View>
  </View>
    );
}

export default CoffeItems;