import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Modal,
} from "react-native";
import HazelnutImage from "../../navigation/assets/svgImages/CoffeImages/HazelnutCoffe";
import styles from "./CoffeItems.styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

function CoffeItems() {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);
  const [showQuantity, setShowQuantity] = useState(false);
  const [summaryModal, SetSummaryModal] = useState(false);
  const[coffeChoose, SetCoffeChoose]= useState("")
  const [price, setPrice] = useState(5 * quantity);



  const processOrder = () => {
    SetSummaryModal(true);
  };

  const closeModal = () => {
    SetSummaryModal(false);
  };

  return (
    <View style={styles.coffeContainer}>
      <View style={styles.coffeItemTextContainer}>
        <Text style={styles.coffeItemText}> Hazelnut Coffee </Text>
        <Text style={styles.coffePriceText}>$5</Text>
      </View>

      <View style={{ left: 5 }}>
        <HazelnutImage />
      </View>

      <View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              setShowQuantity(true);
              if (quantity == 0) {
                setQuantity(quantity + 1);
              } else if (quantity == 1 || quantity >1) {
                setPrice(5 * quantity)
                processOrder();
                SetCoffeChoose("Hazelnut Coffe")
              }
            }}
            style={showQuantity ? styles.clickedAddButton : styles.addButton}
          >
            {showQuantity ? (
              <Icon
                name="check"
                color={"white"}
                size={20}
                style={{ alignSelf: "center", top: 8 }}
              />
            ) : (
              <Text style={styles.AddButtonStyles}>Add</Text>
            )}
          </TouchableOpacity>

          {showQuantity && (
            <View style={styles.quantityContainer}>
              
              <Text style={styles.quantityText}>{quantity}</Text>
              <View style={styles.plusMinus}>
                <Text
                  style={{ fontSize: 20, bottom: 6.5, left: 8 }}
                  onPress={() => {
                    if (quantity > 0) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  __
                </Text>
                <View style={{ margin: 30 }} />
                <Text
                  style={{ fontSize: 22, right: 8 }}
                  onPress={() => {
                    if (quantity < 10) {
                      setQuantity(quantity + 1);
                    } else {
                      ToastAndroid.show(
                        "You can not add more than " + quantity,
                        ToastAndroid.SHORT
                      );
                    }
                  }}
                >
                  +
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
      <Modal transparent={true} visible={summaryModal} animationType="slide">
        <View style={styles.summaryModalContainer}>
          <View style={styles.summaryModalContent}>
            <Text
              onPress={() => {
                closeModal();
              }}
            >
              X
            </Text>
            <CoffeItems></CoffeItems>
            <Text style={styles.orderQuantity}>Quantity:  {quantity}</Text>
            <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Total:</Text> 
            <Text style={styles.totalPriceText}>${price}</Text>
            </View>
         
           
         
       
        <View style={styles.checkOutButtonContainer}>
          <TouchableOpacity>
          <View style={styles.checkOutButton}>
<Text style={styles.checkoutText}>Go To Checkout</Text>
          </View>
          </TouchableOpacity>
        </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default CoffeItems;
