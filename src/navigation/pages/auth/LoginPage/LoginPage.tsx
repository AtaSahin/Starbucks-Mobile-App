import React, { useState,useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './LoginPage.styles';
import PhoneInput from "react-native-phone-number-input";
import LoginBG from '../../../assets/svgImages/loginBg';

const LoginScreen = () => {
  const navigation =useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef<PhoneInput>(null);
  
  const handleLoginPress = () => {
    console.log('Phone Number:', value);
    navigation.navigate("RootNavigation")
    

  };
  
  return (
    <View style={styles.container}>
<LoginBG></LoginBG>
<View style={styles.pageComponents}>
      <Text style={styles.title}> Welcome To Starbucks</Text>

      <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="TR"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withShadow
            autoFocus
            containerStyle={styles.phonInputStyle}
          />
          <TouchableOpacity
            style={styles.loginButton}
          onPress={handleLoginPress}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          </View>
    </View>
  );
};



export default LoginScreen;
