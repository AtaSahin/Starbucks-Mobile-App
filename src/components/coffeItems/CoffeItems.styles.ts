import {StyleSheet, Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#4AA366',
    width: width * 0.18,
    height: height * 0.05,
    borderRadius: scale(5),
    right: width * 0.01,
  },
  addButtonContainer: {
    width: width * 0.18,
    alignSelf: 'flex-end',
    bottom: height * 0.07,
  },
  AddButtonStyles: {
    color: 'white',
    fontWeight: '700',
    left: width * 0.05,
    top: height * 0.01,
  },

  clickedAddButton: {
    backgroundColor: '#4AA366',
    width: width * 0.09,
    height: height * 0.05,
    borderRadius: scale(5),
    left: width * 0.04,
  },

  coffeContainer: {
    width: width * 1,
  },
  coffeItemTextContainer: {
    left: width * 0.25,
    top: height * 0.075,
  },
  coffeItemText: {
    fontSize: scale(18),
    fontWeight: '800',
    color: '#2E2D38',
  },
  coffePriceText: {
    fontSize: scale(15),
    fontWeight: '500',
    color: '#2E2D38',
  },
  quantityContainer: {
    width: width * 0.25,
    height: height * 0.05,
    backgroundColor: '#DFE4EC',
    borderRadius: scale(5),
    bottom: height * 0.05,
    right: width * 0.3,
  },
  quantityText: {
    alignSelf: 'center',
    top: height * 0.01,
    fontSize: scale(13),
    fontWeight: 'bold',
  },
  plusMinus: {
    flexDirection: 'row',
    bottom: height * 0.022,
    left: width * 0.01,
  },
  summaryModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  summaryModalContent: {
    height: height * 0.58,
    backgroundColor: '#FFF',
    borderTopRightRadius: scale(20),
    borderTopLeftRadius: scale(20),
    width: width * 1,
    alignSelf: 'center',
  },
  checkOutButtonContainer: {
    backgroundColor: '#F2FDF6',

    height: height * 0.13,
    width: width * 1,
    top: height * 0.12,
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: {width: -20, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  checkOutButton: {
    backgroundColor: '#4AA366',
    top: height * 0.01,
    height: height * 0.07,
    width: width * 0.7,
    borderRadius: scale(5),
    alignSelf: 'center',
  },
  checkoutText: {
    alignSelf: 'center',
    top: height * 0.02,
    color: 'white',
    fontWeight: '800',
    fontSize: scale(15),
  },
  orderQuantity: {
    alignSelf: 'flex-end',
    bottom: height * 0.06,
    right: scale(5),
    fontSize: scale(15),
    fontWeight: '600',
    color: 'black',
  },
  priceContainer: {
    borderWidth: 0.2,
    borderTopColor: '#DFE4E',
  },
  priceText: {
    alignSelf: 'flex-start',
    top: height * 0.01,
    left: scale(10),
    fontSize: scale(15),
    fontWeight: '600',
    color: 'black',
  },
  totalPriceText: {
    alignSelf: 'flex-end',
    bottom: height * 0.025,
    right: scale(5),
    color: 'black',
    fontSize: scale(20),
    fontWeight: '600',
  },
  checkoutModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  checkoutModalContent: {
    top: height * 0.1,
    height: height * 1,
    backgroundColor: '#FFF',
    width: width * 1,
    alignSelf: 'center',
  },

  checkoutPageInfo: {
    height: height * 0.2,
    backgroundColor: '#FFF',

    width: width * 1,
    alignSelf: 'center',
  },
  payButton: {
    backgroundColor: '#4AA366',
    top: height * 0.01,
    height: height * 0.07,
    width: width * 0.7,
    borderRadius: scale(5),
    alignSelf: 'center',
  },
  paymentDoneContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  paymentDoneContent: {
    top: height * 0.1,
    height: height * 1,
    backgroundColor: '#FFF',
    width: width * 1,
    alignSelf: 'center',
  },
  homeButton: {
    backgroundColor: '#4AA366',
    bottom: height * 0.03,
    height: height * 0.07,
    width: width * 0.7,
    borderRadius: scale(5),
    alignSelf: 'center',
  },
});

export default styles;
