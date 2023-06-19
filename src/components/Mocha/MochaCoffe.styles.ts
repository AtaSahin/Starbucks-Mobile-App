import { StyleSheet,Dimensions } from "react-native"
import { scale } from "react-native-size-matters"


const {width,height}=Dimensions.get("window")

const styles = StyleSheet.create({
   
    addButton:{
        backgroundColor:"#4AA366",
        width: width * 0.18,
        height: height * 0.05,
        borderRadius:scale(5),

    },
    addButtonContainer:{
     width: width * 0.2,
     alignSelf:"flex-end",
     bottom: height * 0.07,
   },

   AddButtonStyles:{
    color:"white",
    fontWeight:"700",
    left: width * 0.05,
    top: height * 0.01,
   },

   coffeContainer:{
    width: width * 1,
   },
   coffeItemTextContainer:{
    left: width * 0.25,
    top: height * 0.1,

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
   }
    
    
})

export default styles