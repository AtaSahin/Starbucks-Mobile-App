import React, { useState } from "react";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import HazelnutImage from "../../navigation/assets/svgImages/CoffeImages/HazelnutCoffe";
import styles from "./CoffeItems.styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";


function CoffeItems() {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);
  const [showQuantity, setShowQuantity] = useState(false);

const processOrder = () => {
  navigation.navigate("LoginScreen");
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
              } else if (quantity == 1) {
                processOrder();
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
    </View>
  );
}

export default CoffeItems;
