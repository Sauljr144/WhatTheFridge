import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CreateAccountScreen from "./app/screens/CreateAccountScreen";
import NavPiece from "./app/components/NavPiece";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/screens/LoginScreen";

const Warp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Warp.Navigator>
        <Warp.Screen name="Create" component={CreateAccountScreen} />
        <Warp.Screen name="Login" component={LoginScreen} />
      </Warp.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCE20",
    alignItems: "center",
    justifyContent: "center",
  },
});
