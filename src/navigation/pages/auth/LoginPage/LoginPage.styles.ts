import {StyleSheet, Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: height * 0.05,
    left: scale(15),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    bottom: height * 0.25,
    right: width * 0.02,
  },
  input: {
    width: 320,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 5,
    bottom: 100,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#B5F0C8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: width * 0.8,
    top: height * 0.05,
    borderRadius: scale(10),
    height: height * 0.09,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: scale(15),
    top: height * 0.015,
  },
  phonInputStyle: {
    borderRadius: scale(10),
    borderTopEndRadius: scale(29),
    width: width * 0.8,
    height: height * 0.1,
  },
  pageComponents: {
    bottom: height * 0.65,
    alignContent: 'center',
    alignSelf: 'center',
    right: scale(15),
  },
  activatedButton: {
    backgroundColor: '#4AA366',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: width * 0.8,
    top: height * 0.05,
    borderRadius: scale(10),
    height: height * 0.09,
  },
});

export default styles;
