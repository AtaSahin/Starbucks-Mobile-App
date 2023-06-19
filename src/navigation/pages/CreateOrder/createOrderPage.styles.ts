import { StyleSheet,Dimensions } from "react-native"
import { scale } from "react-native-size-matters"


const {width,height}=Dimensions.get("window")

const styles = StyleSheet.create({
    container:{
    flex:1,

    },
    packagePickContainer:{
        width: width * 0.9,
        height: height * 0.09,
        borderColor:'grey',
        borderWidth:0.8,
        alignSelf:"center",
        top: height * 0.08,
        borderRadius:scale(17)

    },
    packagePickContainer2:{
        width: width * 0.9,
        height: height * 0.09,
        borderColor:'grey',
        borderWidth:0.8,
        alignSelf:"center",
        top: height * 0.1,
        borderRadius:scale(17)
    },
    menuContainer:{
        width: width * 1,
        height: height * 0.6,
        backgroundColor:"white",
        top: height * 0.3,
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
   scrollViewStyle:{
    top:height * 0.05,
    
   },
   besetSellersButton:{
    width: width * 0.3,
    height: height * 0.05,
    borderColor:"#DFE4EC",
    borderWidth:scale(1.5),
    left: width * 0.05,
    borderRadius:scale(5),
    top: height * 0.018,
    
   },
   bestSellersText:{
    fontSize:scale(18),
    fontWeight:"600",
    color:"#2E2D38",

   },
   foodText:{
    fontSize:scale(18),
    fontWeight:"600",
    color:"#2E2D38",
   },
   foodsButton:{
    width: width * 0.2,
    height: height * 0.05,
    borderColor:"#DFE4EC",
    borderWidth:scale(1.5),
    left: width * 0.05,
    borderRadius:scale(5),
    top: height * 0.018,
   }
    
})

export default styles