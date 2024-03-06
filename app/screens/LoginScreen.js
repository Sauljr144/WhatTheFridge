import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native";
import Btn from "../components/Btn";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    username, password;
  };
  return (
    <>
  
      <SafeAreaView style={styles.container}>
        <View style={{marginTop: 50, marginLeft: 50}}>
          <Text style={styles.text}>What The</Text>
          <Text style={styles.text}>Fridge.</Text>
        </View>
        <View style={styles.align}>
          <View style={styles.box}>
            <Text style={styles.login}>Login</Text>
            <TextInput
                value={username}
                placeholder="Username"
                placeholderTextColor="black"
                onChangeText={(text) => setUsername(text)}
                style={styles.input}
              />
             <View
                style={{
                  borderBottomWidth: "2px",
                  borderBottomColor: "#FFCE20",
                  marginBottom: 30,
                  marginHorizontal: 15,
                }}/>
             <TextInput
                value={password}
                placeholder="Password"
                placeholderTextColor="black"
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
              />
             <View
                style={{
                  borderBottomWidth: "2px",
                  borderBottomColor: "#FFCE20",
                  marginBottom: 30,
                  marginHorizontal: 10,
                }}/>
             <View style={{ alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Shopping")}>
                  <Btn />
                </TouchableOpacity>
              </View>
            

            <TouchableOpacity
              style={styles.logintext}
              onPress={() => navigation.navigate("Create")}
            >
              <Text style={{fontSize:12}}>Create Account?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    backgroundColor: "#FFFAE6",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    width: "75%",
    marginTop: 40,
    marginBottom: 70,
  },
  text: {
    fontSize: 35,
    fontWeight: "800",
  },
  container: {
    backgroundColor: "#FFCE20",
    flex: "1",
  },
  align: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    marginTop: 20,
  },
  login: {
    marginTop: 45,
    textAlign: "center",
    marginBottom: 40,
    fontSize: 25,
    fontWeight: "bold",
  },
  usernametext: {
    fontSize: 15,
    fontWeight: "bold",
  },
  passwordtext: {
    fontSize: 15,
    fontWeight: "bold",
  },
  logintext: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
    paddingLeft: 10,
  },
  input: {
    marginBottom: 12,
    height: "5%",
    marginLeft: 15,
    fontWeight: "500",
    fontSize: 14,
    
  },
  toptext: {
    fontWeight: "bold",
  },
});

export default LoginScreen;
