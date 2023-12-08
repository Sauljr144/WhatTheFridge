import React, { useState } from 'react'
import {View,StyleSheet,Text, SafeAreaView, ScrollView} from 'react-native'
import { TextInput,Button } from 'react-native'
import colors from '../config/colors'

const CreateAccountScreen = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = () => {
      username,
      password
      
    }
  return (
    <>
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.text}>What The Fridge.</Text>
      
    </View>
    <View style={styles.box}>
      <Text style={styles.login}>Create Account</Text>
      <Text>Username</Text>
      <TextInput value={username} onChangeText={(text) => setUsername(text)}/>
      <Text>Password</Text>
      <TextInput value={password} onChangeText={(text) => setPassword(text)}/>
      <Button title='Submit' onPress={handleSubmit} color={'#FFE27B'} style={styles.button}/>
      <Text>Login?</Text>
    </View>

    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    box:{
      paddingTop:20,
      justifyContent:'center',
      backgroundColor:'#FFFAE6',
      paddingBottom:20,
      paddingLeft:10,
      paddingRight:10,
      borderRadius:20,
      width:'100%'
      
    },
    text:{
       fontSize:40
       
    },
    container:{
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      borderRadius:20
    },
    login:{
      marginTop:30
    }
    
   
})

export default CreateAccountScreen