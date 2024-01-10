import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'

const Screen = ({children}) => {
  return (
    <SafeAreaView style={styles.myBg}>
        <View>
       {children}     
        </View>
      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  myBg: {
    
    flex: 1,
    
    
  },
})

export default Screen
