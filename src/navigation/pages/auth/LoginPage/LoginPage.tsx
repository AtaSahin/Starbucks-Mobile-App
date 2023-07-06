import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './LoginPage.styles';
import PhoneInput from 'react-native-phone-number-input';
import LoginBG from '../../../assets/svgImages/loginBg';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [value, setValue] = useState(0);
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef<PhoneInput>(null);

  const handleLoginPress = () => {
    console.log('Phone Number:', value);
    navigation.navigate('RootNavigation');
  };

  return (
    <View style={styles.container}>
      <LoginBG></LoginBG>
      <View style={styles.pageComponents}>
        <Text style={styles.title}> Welcome To Starbucks</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          style={
            email.length > 5 && password.length > 5
              ? styles.activatedButton
              : styles.loginButton
          }
          onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
