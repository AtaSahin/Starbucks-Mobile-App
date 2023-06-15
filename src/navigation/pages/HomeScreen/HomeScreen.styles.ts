import { StyleSheet, Dimensions,View } from 'react-native';
import { scale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F8FA',
      },
      userBalanceContainer: {
        width: width * 0.9,
        height: height * 0.19,
        backgroundColor: "#4AA366",
        borderRadius: scale(17),
        bottom: height * 0.325,
        elevation: 30, //for Android 
        shadowColor: 'black', //for iOS 
        shadowOffset: { width: 0, height: 2 }, // for iOS 
        shadowOpacity: 0.2, //for iOS 
        shadowRadius: 4, // for iOS 
      },
    
})
export default styles;



