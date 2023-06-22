import { StyleSheet,Dimensions } from "react-native"
import { scale } from "react-native-size-matters"


const {width,height}=Dimensions.get("window")

const styles = StyleSheet.create({

pickerContainers:{
    backgroundColor:"white",
    width: width * 1,
    height:height * 0.3,
    alignSelf:"center",
    top: height * 0.025
    },

    pickerContainersHeader:{
        left: width * 0.05,
        fontWeight:"600",
        color:"#2E2D38",
        fontSize:scale(15)
    },
    
    menuContainer:{
        width: width * 1,
        height: height * 0.6,
        backgroundColor:"white",
        top: height * 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButton:{
        backgroundColor:"#4AA366",

    },
    addButtonContainer:{
        width: width * 0.2,
        alignSelf:"flex-end",
        bottom: height * 0.1
   },
   coffeContainer:{
    width: width * 1,
   },
   
   timePickerConainer:{
    width: width * 0.9,
    height: height * 0.08,
    borderColor:"#B4BBCB",
    borderRadius:scale(10),
    borderWidth:scale(1),
    alignSelf:"center",
    top: height * 0.05,

   },
   packageReciveText:{
    left: width * 0.01,



    fontWeight:"800",
    fontSize:scale(13)
   },
   pickedDate:{
  
    top: height * 0.008,
    fontWeight:"600",
    alignSelf:"center"
   },

   locationPickerConainer:{
    width: width * 0.9,
    height: height * 0.08,
    borderColor:"#B4BBCB",
    borderRadius:scale(10),
    borderWidth:scale(1),
    alignSelf:"center",
    top: height * 0.08,
   },
   modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  modalContent: {
    height: height * 0.4,
    backgroundColor: '#FFF',
    borderRadius:scale(20),
     width: width * 0.8,
    alignSelf:"center",
    bottom: height * 0.5,
  },
  selectedCityText:{
    alignSelf:"center",
    top: height * 0.025,
    fontWeight:"600"
   },
   locationText:{
    left: width * 0.01,
    bottom: height * 0.005,
    fontWeight:"800",
    fontSize:scale(15)
   },
   closeButton:{
    alignSelf:"flex-end",
    right: width * 0.05,
    top: height * 0.01,
    fontSize:scale(15)
   },
   modalCityText:{
    left: width * 0.01,
    fontWeight:"800",
    fontSize:scale(15),
    margin:scale(10)
   }
    
})

export default styles