import React,{useEffect} from 'react';
import {View} from 'react-native';
import SplashScreenImage from '../../assets/svgImages/SplashScreenImage';
import { useNavigation } from '@react-navigation/native';
import styles from './SplashPage.styles';



function SplashPage() {

    const navigation =useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.navigate("LoginScreen");// Otomatik olarak Login sayfasına geçiş yapar
    }, 2000); // 2 saniye bekler

    return () => clearTimeout(timer); // Timer'ı temizler
  }, [navigation]);

    return (
<View style={styles.container}>
<SplashScreenImage></SplashScreenImage>
</View>
    );
}

export default SplashPage;