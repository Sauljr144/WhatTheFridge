
import React from 'react'
import { Button, View ,StyleSheet, TouchableOpacity,Image} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";




const NavPiece = ({navigation}) => {
  return (
    <View style={styles.container}>
    
      <TouchableOpacity onPress={() => navigation.navigate("ShopList")}>
        <Image source={require('../assets/basket.png')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FridgeList")}>
        <Image source={require('../assets/fridge.png')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Image source={require('../assets/cog.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
      width:30,
      height:30,
    },
    container:{

        position:'sticky',
        backgroundColor:'#FFF8F2',
        width:'100%',
        height:'10%',
        paddingLeft:50,
        paddingRight:50,
        paddingTop:10,
        paddingBottom:10,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    }
})



export default NavPiece