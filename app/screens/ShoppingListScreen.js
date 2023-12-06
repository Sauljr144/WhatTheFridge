import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const ShoppingListScreen = () => {
  return (
    <View style={styles.topBorder}>
        <Text style={styles.shoppingHeader}>My Shopping List</Text>
      
    </View>
  )
}
const styles = StyleSheet.create({
  topBorder:{
    justifyContent: 'flex-end',
    alignItems: "start",
    height:120,
    width: '100%',
    backgroundColor: '#FFCE20',
    paddingLeft:30,
    paddingBottom: 30,
    borderBottomRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomLeftRadius: 25,
   
  },
  shoppingHeader:{
    fontFamily:'Roboto',
    fontWeight:'700',
    fontSize:24,
  


  }
})
export default ShoppingListScreen
