import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Button,
  Modal,
} from "react-native";
import styles from "./TimeLocationPicker.style";
import DatePicker from "react-native-date-picker";

function TimeLocationPicker() { 
  const [bgColor, setBgColor] = useState("white");
  const [activeButton, setActiveButton] = useState("BestSellerCoffes");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false); 
  const [openModal, setOpenModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Los Angles");
  const closeModal= ()=>{
    setOpenModal(false)
    }
    
  return (
    <View style={styles.pickerContainers}>
      <Text style={styles.pickerContainersHeader}>Take Away Option</Text>
      
        <View style={styles.timePickerConainer}>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Text style={styles.packageReciveText}>Pick a time to receive order </Text>
          <DatePicker
          
            modal
            open={open}
            date={date}
            mode={"time"}
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <Text style={styles.pickedDate}>{date.toLocaleTimeString()}</Text>
          </TouchableOpacity>
        </View>


     
        <View style={styles.locationPickerConainer}>
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Text style={styles.selectedCityText}>{selectedCity}</Text>
          <Text style={styles.locationText}>Location:</Text>
          </TouchableOpacity>
        </View>


      <Modal visible={openModal} transparent={true} animationType="slide" onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text
              onPress={() => setOpenModal(false)}
              style={styles.closeButton}
            >
              X
            </Text>
            <ScrollView>
              <Text
                onPress={() => {
                  setSelectedCity("Los Angles");
                  setOpenModal(false);
                }}
                style={styles.modalCityText}
              >
                Los Angles
              </Text>
              <Text
                onPress={() => {
                  setSelectedCity("New York");
                  setOpenModal(false);
                }}
                style={styles.modalCityText}
              >
                New York
              </Text>
              <Text
                onPress={() => {
                  setSelectedCity("Nevada");
                  setOpenModal(false);
                }}
                style={styles.modalCityText}
              >
                Nevada
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default TimeLocationPicker;
