import React, {useState} from 'react';
import {
  View,
  LogBox,
  Button,
  Text,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import styles from './HomeScreen.styles';
import FaceMask from '../../assets/svgImages/FaceMask.svg';
import CupChart from '../../assets/svgImages/CupChart';
import CenterMenu from '../../assets/svgImages/centerMenuItems';
import FirstCampaign from '../../assets/svgImages/campaignImages';

LogBox.ignoreAllLogs();

type HomeScreenProps = {
  navigation: any; //type will be updated...
};

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [creditCardInfo, setCreditCardInfo] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState();

  const handleAddBalance = () => {
    setBalance(prevBalance => prevBalance + parseFloat(balance));
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.userBalanceContainer}>
        <View>
          <FaceMask />
          <View style={styles.balanceTextContainer}>
            <Text style={styles.totalText}> Total Money</Text>
            <Text style={styles.amountText}>{balance}</Text>
            <Text
              style={styles.depositMoneyText}
              onPress={() => {
                setModalVisible(true);
              }}>
              {' '}
              Add Money
            </Text>
          </View>
        </View>

        <View style={styles.centerMenu}>
          <CupChart />
        </View>

        <View style={styles.CenterMenuItem}>
          <CenterMenu></CenterMenu>
        </View>
        <View style={styles.buttonTitle}>
          <Button
            color={'green'}
            title="SİPARİŞ GEÇMİŞİ"
            onPress={() => navigation.navigate('orderHistory')}></Button>
        </View>

        <View style={styles.campaginsSection}>
          <View style={styles.buttonGrey}>
            <Button color={'#DFE4EC'} title="" disabled={true}></Button>
          </View>
          <Modal visible={modalVisible} animationType="slide">
            <Text>Kredi Kartı Bilgileri Ekle</Text>
            <TextInput
              placeholder="Kredi Kartı Bilgileri"
              value={creditCardInfo}
              onChangeText={text => setCreditCardInfo(text)}
            />
            <TextInput
              placeholder="Eklemek İstediğiniz Bakiye"
              value={balance}
              onChangeText={text => setBalance(parseFloat(text))}
              keyboardType="numeric"
              clearButtonMode="while-editing" // This line clears the input value after each edit
            />

            <Button title="Bakiye Ekle" onPress={handleAddBalance} />
            <Button
              title="Modalı Kapat"
              onPress={() => setModalVisible(false)}
            />
          </Modal>
          <ScrollView>
            <Text style={styles.campaginsText}>Campaigns</Text>

            <View style={styles.firstCampagin}>
              <FirstCampaign></FirstCampaign>
              <Text style={styles.campaignHeader}>
                {' '}
                Special Campaign for the New Year!
              </Text>
              <Text style={styles.campaignBody}>
                {' '}
                5 ⭐’lı Hafta Sonlarını Kaçırma! 🧡☕ logolu debi Mastercard®
                logolu kredi kartları ile yapacağın 150 TL ve üzeri yüklemelerde
                5 ⭐ hediye!
              </Text>
              <Text style={styles.campaignBody}>
                {' '}
                5 ⭐’lı Hafta Sonlarını Kaçırma! 🧡☕ logolu debi Mastercard®
                logolu kredi kartları ile yapacağın 150 TL ve üzeri yüklemelerde
                5 ⭐ hediye!
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
