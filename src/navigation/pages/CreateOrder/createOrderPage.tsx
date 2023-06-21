import React, { useState } from 'react';
import { View,ScrollView,Text, TouchableOpacity,Button, Modal } from 'react-native';
import styles from './createOrderPage.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import BestSellerCoffes from '../../../components/bestSellerCoffeItems/BestSellerCoffes';
import CoffeItems from '../../../components/Mocha/MochaCoffe';
import DatePicker from 'react-native-date-picker'
import ModalSelector from 'react-native-modal-selector'


function CreateOrderPage() {

  const [bgColor, setBgColor] = useState("white");
  const [activeButton, setActiveButton] = useState("BestSellerCoffes");
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const[selectedCity, setSelectedCity]=useState("Los Angles") 
  
  const handleButtonPress = (buttonName:String) => {
    setActiveButton(buttonName);
  };
  
  return (

    <SafeAreaView>
      <View style={styles.container}>
<View style={styles.pickerContainers}>
      <TouchableOpacity onPress={() => setOpen(true)}>
      <View style={styles.timePickerConainer}>
<Text style={styles.packageReciveText}>Time to receive order </Text>   
      <DatePicker
        modal
        open={open}
        date={date}
        mode={'time'}

        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        
      />
   <Text style={styles.pickedDate}>{date.toLocaleTimeString()}</Text>
      </View>
      </TouchableOpacity>



    <TouchableOpacity onPress={()=> setOpenModal(true)}>
      <View style={styles.locationPickerConainer}>
   
        <Text style={styles.selectedCityText}>{selectedCity}</Text>
        <Text style={styles.locationText}>Location:</Text>
      </View>
      </TouchableOpacity>


      
      <Modal
        visible={openModal}
        transparent={true}
        animationType="slide"
      >
      
        <View style={styles.modalContainer}>

          <View style={styles.modalContent}>
          <Text 
          onPress={()=> setOpenModal(false)}
          style={styles.closeButton}
          >
            X</Text>
          <ScrollView>
          <Text onPress={()=> {setSelectedCity("Los Angles");
            setOpenModal(false); } }
            style={styles.modalCityText}
            >Los Angles</Text>
                      <Text onPress={()=> {setSelectedCity("New York");
            setOpenModal(false); } }
            style={styles.modalCityText}
            >New York</Text>
                      <Text onPress={()=> {setSelectedCity("Nevada");
            setOpenModal(false); } }
            style={styles.modalCityText}
            >Nevada</Text>
          </ScrollView>
          </View>
        </View>
      </Modal>

      </View>
      
        <View style={styles.menuContainer}>
 
          <ScrollView style={styles.scrollViewStyle}>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => handleButtonPress("BestSellerCoffes")}>
              <View style={[styles.besetSellersButton, { backgroundColor: activeButton === "BestSellerCoffes" ? "#DFE4EC" : bgColor }]}>
                <Text style={styles.bestSellersText}>Best Sellers</Text>
              </View>
            </TouchableOpacity>
            
            <View style={{margin:10}}/>

            <TouchableOpacity onPress={() => handleButtonPress("Foods")}>
              <View style={[styles.foodsButton, { backgroundColor: activeButton === "Foods" ? "#DFE4EC" : bgColor }]}>
                <Text style={styles.foodText}>Foods</Text>
              </View>
            </TouchableOpacity>

            <View style={{margin:10}}/>

            <TouchableOpacity onPress={() => handleButtonPress("BestSellerCoffe")}>
              <View style={[styles.besetSellersButton, { backgroundColor: activeButton === "BestSellerCoffe" ? "#DFE4EC" : bgColor }]}>
                <Text style={styles.bestSellersText}>Hot Release</Text>
              </View>
            </TouchableOpacity>

            </View>



            {activeButton === "BestSellerCoffes" ? <BestSellerCoffes /> : null}
            {activeButton === "BestSellerCoffe" ? <BestSellerCoffes /> : null}
            {activeButton === "Foods" ? <CoffeItems /> : null}

          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );

}

export default CreateOrderPage;