import React from 'react';
import {View, Text, StyleSheet, Pressable, LogBox} from 'react-native';
import styles from './HomeScreen.styles';


LogBox.ignoreAllLogs();

type HomeScreenProps = {
  navigation: any; //type will be updated...
};

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View style={styles.screenContainer}>
    <View style={styles.userBalanceContainer}></View>
    
    
    </View>
  );
};


export default HomeScreen;