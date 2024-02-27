import React from 'react'
import { Button, View ,StyleSheet, TouchableOpacity,Image} from 'react-native'

const NavPiece = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../assets/basket.png')} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/fridge.png')} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/cog.png')} style={styles.image}/>
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
        backgroundColor:'#FFF8F2',
        width:'100%',
        height:'10%',
        padding:60,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

export default NavPiece