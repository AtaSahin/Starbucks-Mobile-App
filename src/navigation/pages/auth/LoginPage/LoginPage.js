import React, {Component,UseState} from 'react';
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


export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      formattedValue: '',
    };

    this.state = {Email: '', Password: ''};
  
  }
    InsertRecord=()=>{
      this.props.navigation.navigate('giris');
var Email=this.state.Email;
var Password=this.state.Password;
if(Email.length==0 || Password.length==0)
{

}
else{
  var InsertAPIURL="http://10.0.2.2:80/api/insert.php";
  var headers={
    'Acccept':'application/json',
      'Content-Type':'application.json'
  };
  var Data={
    Email:Email,
    Password:Password
  };
  fetch(InsertAPIURL,
    {
      method:'POST',
      headers:headers,
      body: JSON.stringify(Data)
    })
    .then((response)=>response.json())
    .then((response)=>
    {
      alert(response[0].Message);
    }
    )
    .catch((error)=>
    {
      alert("Error"+error)
    }
    )
}
    }

  handleLoginPress = () => {
    console.log('Phone Number:', this.state.value);
    this.props.navigation.navigate('RootNavigation');
  };

  render() {
    return (
      <View style={styles.container}>
        <LoginBG></LoginBG>
        <View style={styles.pageComponents}>
          <Text style={styles.title}> Welcome To Starbucks</Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
    
            
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={Email => this.setState({Email})}
            value={this.state.Email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={Password => this.setState({Password})}
            value={this.state.password}
          />
          <TouchableOpacity
            style={
              this.state.Email.length > 5 && this.state.Password.length > 5
                ? styles.activatedButton
                : styles.loginButton
            }
            onPress={this.InsertRecord}>
            <Text style={styles.loginButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
