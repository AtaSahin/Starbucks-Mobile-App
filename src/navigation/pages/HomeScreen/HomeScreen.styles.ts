import { StyleSheet, Dimensions, View } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F8FA",
  },
  userBalanceContainer: {
    width: width * 0.9,
    height: height * 0.19,
    backgroundColor: "#4AA366",
    borderRadius: scale(17),
    bottom: height * 0.325,
    elevation: 30, //for Android
    shadowColor: "black", //for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.2, //for iOS
    shadowRadius: 4, // for iOS
  },
  centerMenu: {
    bottom: height * 0.08,
  },
  CenterMenuItem: {
    bottom: height * 0.27,
    left: width * 0.035,
    alignSelf: "flex-end",
  },
  buttonTitle: {
    width: width * 0.3,
    alignSelf: "flex-end",
    bottom: height * 0.24,
  },
  balanceTextContainer: {
    bottom: height * 0.12,
    left: width * 0.05,
  },
  totalText: {
    color: "#FFFFFF",
    fontSize: scale(18),
  },
  amountText: {
    color: "#FFFFFF",
    fontSize: scale(25),
    fontWeight: "bold",
  },
  depositMoneyText: {
    color: "#FFFFFF",
    fontSize: scale(14),
    alignSelf: "flex-end",
    right: width * 0.1,
    fontWeight: "500",
    bottom: height * 0.04,
  },
  campaginsSection: {
    borderTopLeftRadius: scale(45),
    borderTopRightRadius: scale(45),
    width: width * 1,
    height: height * 0.8,
    alignSelf: "center",
    backgroundColor: "white",
    bottom: height * 0.18,
  },
  campaginsText: {
    color: "#2E2D38",
    fontWeight: "800",
    fontSize: scale(16),
    left: width * 0.08,
    top: height * 0.05,
  },
  buttonGrey: {
    top: height * 0.02,
    borderRadius: scale(80),
    height: scale(1),
    width: width * 0.25,
    alignSelf: "center",
  },
  firstCampagin: {
    alignSelf: "center",
    top: height * 0.07,
    height: height * 3,
    left: width * 0.01,
  },
  campaignHeader: {
    fontWeight: "900",
    color: "#2E2D38",
  },
  campaignBody: {
    fontWeight: "600",
    color: "grey",
  },
  tabNavigationStyles: {
    borderRadius: scale(30),
  },
});
export default styles;
