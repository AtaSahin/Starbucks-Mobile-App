import React from 'react';
import {View,ScrollView} from 'react-native';
import { CoffeItems } from '../coffeItems';
import { MochaCoffe} from '../Mocha';

function BestSellerCoffes() {
    return (

       <View>
        <CoffeItems/>
        <MochaCoffe/>
        
        </View>
   
    );
}

export default BestSellerCoffes;