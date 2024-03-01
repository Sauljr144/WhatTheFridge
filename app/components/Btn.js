import React from 'react'
import { View, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Btn = (onPress) => {
  return (
   
    <View style={{backgroundColor:"#FFE27B",borderWidth:1,borderColor:"#FFCE20", borderRadius:30, alignItems:"center", width:100, padding:8}}>
          <Text style={{fontWeight:700, fontSize:12}}>Submit</Text>  
    </View>


  )
}

export default Btn