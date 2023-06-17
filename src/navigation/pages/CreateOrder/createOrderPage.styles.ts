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
    }
    
})

export default styles