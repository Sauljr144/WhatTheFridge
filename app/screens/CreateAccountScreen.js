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
      <Text style={styles.text}>What</Text>
      <Text style={styles.text}>The Fridge.</Text>
      
    </View>
    <View style={styles.box}>
      <Text style={styles.login}>Create Account</Text>
      <Text style={styles.usernametext}>Username</Text>
      <TextInput value={username} onChangeText={(text) => setUsername(text)}/>
      <Text style={styles.passwordtext}>Password</Text>
      <TextInput value={password} onChangeText={(text) => setPassword(text)}/>
      <Button title='Submit' onPress={handleSubmit} color={'#FFE27B'} style={styles.button}/>
      <Text style={styles.logintext}>Login?</Text>
    </View>

    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    box:{
      justifyContent:'center',
      backgroundColor:'#FFFAE6',
      paddingTop:40,
      paddingBottom:40,
      paddingLeft:10,
      paddingRight:10,
      borderRadius:20,
      width:'140%',
      
      
    },
    text:{
       fontSize:40,
       fontWeight:'bold',
       marginBottom:20
       
    },
    container:{
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      borderRadius:20,
      marginTop:20
    },
    login:{
      marginTop:20,
      textAlign:'center',
      marginBottom:20,
      fontSize:25
    },
    usernametext:{
      fontSize:15,
      fontWeight:'bold'
    },
    passwordtext:{
      fontSize:15,
      fontWeight:'bold'
    },
    logintext:{
      fontSize:15,
      fontWeight:'bold',
      marginTop:30
    }
    
   
})

export default CreateAccountScreen