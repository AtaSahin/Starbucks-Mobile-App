import React from 'react';
import {View,ScrollView} from 'react-native';
import { CoffeItems } from '../coffeItems';
import { MochaCoffe} from '../Mocha';
import { scale } from 'react-native-size-matters';

function BestSellerCoffes() {
    return (

       <View>
        <CoffeItems/>
        <View style={{margin:scale(-35)}}/>
        <MochaCoffe/>
        <View style={{margin:scale(-35)}}/>
        <CoffeItems/>
        
        </View>
   
    );
}

export default BestSellerCoffes;