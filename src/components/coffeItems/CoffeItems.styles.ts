import { StyleSheet,Dimensions } from "react-native"
import { scale } from "react-native-size-matters"


const {width,height}=Dimensions.get("window")

const styles = StyleSheet.create({
   
    addButton:{
        backgroundColor:"#4AA366",
        width: width * 0.18,
        height: height * 0.05,
        borderRadius:scale(5),
        right: width * 0.01
    },
    addButtonContainer:{
        width: width * 0.18,
        alignSelf:"flex-end",
        bottom: height * 0.07,
   },
   AddButtonStyles:{
    color:"white",
    fontWeight:"700",
    left: width * 0.05,
    top: height * 0.01,
   },

   clickedAddButton:{
    backgroundColor:"#4AA366",
    width: width * 0.09,
    height: height * 0.05,
    borderRadius:scale(5),
    left: width * 0.04
   },

   coffeContainer:{
    width: width * 1,

   },
   coffeItemTextContainer:{
    left: width * 0.25,
    top: height * 0.075,

   },
   coffeItemText:{
    fontSize:scale(18),
    fontWeight:"800",
    color:"#2E2D38",

   },
   coffePriceText:{
    fontSize:scale(15),
    fontWeight:"500",
    color:"#2E2D38",
   },
   quantityContainer:{
    width: width * 0.25,
    height: height * 0.05,
    backgroundColor:"#DFE4EC",
    borderRadius:scale(5),
    bottom: height * 0.05,
    right: width * 0.3


   },
   quantityText:{
    alignSelf:"center",
    top:height * 0.01,
    fontSize:scale(13),
    fontWeight:"bold"
   },
   plusMinus:{
    flexDirection:"row",
    bottom: height * 0.022,
    left: width * 0.01,
 
   }
    
})

export default styles