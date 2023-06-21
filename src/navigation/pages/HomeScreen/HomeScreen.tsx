import React from "react";
import { View, LogBox, Button, Text, ScrollView } from "react-native";
import styles from "./HomeScreen.styles";
import FaceMask from "../../assets/svgImages/FaceMask.svg";
import CupChart from "../../assets/svgImages/CupChart";
import CenterMenu from "../../assets/svgImages/centerMenuItems";
import FirstCampaign from "../../assets/svgImages/campaignImages";

LogBox.ignoreAllLogs();

type HomeScreenProps = {
  navigation: any, //type will be updated...
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.userBalanceContainer}>
        <View>
          <FaceMask />
          <View style={styles.balanceTextContainer}>
            <Text style={styles.totalText}> Total Money</Text>
            <Text style={styles.amountText}>$ 15,23</Text>
            <Text style={styles.depositMoneyText}> Add Money</Text>
          </View>
        </View>

        <View style={styles.centerMenu}>
          <CupChart />
        </View>

        <View style={styles.CenterMenuItem}>
          <CenterMenu></CenterMenu>
        </View>
        <View style={styles.buttonTitle}>
          <Button color={"grey"} title="Details"></Button>
        </View>

        <View style={styles.campaginsSection}>
          <View style={styles.buttonGrey}>
            <Button color={"#DFE4EC"} title="" disabled={true}></Button>
          </View>
          <ScrollView>
            <Text style={styles.campaginsText}>Campaigns</Text>

            <View style={styles.firstCampagin}>
              <FirstCampaign></FirstCampaign>
              <Text style={styles.campaignHeader}>
                {" "}
               Special Campaign for the New Year!
              </Text>
              <Text style={styles.campaignBody}>
                {" "}
                5 ⭐’lı Hafta Sonlarını Kaçırma! 🧡☕ logolu debi Mastercard®
                logolu kredi kartları ile yapacağın 150 TL ve üzeri yüklemelerde
                5 ⭐ hediye!
              </Text>
              <Text style={styles.campaignBody}>
                {" "}
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
