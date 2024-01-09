import React, { useState } from 'react'
import {View,StyleSheet,Text, SafeAreaView, TouchableOpacity} from 'react-native'
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
      <Text style={styles.text}>What The</Text>
      <Text style={styles.text2}>Fridge.</Text>
      
    </View>
    <View style={styles.box}>
      <Text style={styles.login}>Create Account</Text>
      <Text style={styles.toptext}>Username</Text>
      <TextInput value={username} placeholder='Enter username here' onChangeText={(text) => setUsername(text)} style={styles.userInput}/>
      <Text style={styles.toptext}>Password</Text>
      <TextInput value={password} placeholder='Enter password here' onChangeText={(text) => setPassword(text)} style={styles.passwordInput}/>
      <Button title='Submit' onPress={handleSubmit} color={'#FFE27B'} style={styles.button}/>
      <TouchableOpacity style={styles.logintext}><Text>Login?</Text></TouchableOpacity>
    </View>

    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    box:{
      justifyContent:'center',
      backgroundColor:'#FFFAE6',
      paddingTop:10,
      paddingBottom:20,
      paddingLeft:10,
      paddingRight:10,
      borderRadius:20,
      width:'140%',
      height:'100%',
      marginTop:40
      
    },
    text:{
       fontSize:40,
       fontWeight:'bold',
    },
    text2:{
      fontSize:40,
      fontWeight:'bold',
      
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
      marginTop:10,
      textAlign:'center',
      marginBottom:40,
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
    },
    userInput:{
      marginBottom:30,
      height:'5%'
    },
    passwordInput:{
      marginBottom:30,
      height:'5%'
    },
    toptext:{
      fontWeight:'bold'
    }
    
   
})

export default CreateAccountScreen