import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CreateAccountScreen from "./app/screens/CreateAccountScreen";
import NavPiece from "./app/components/NavPiece";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/screens/LoginScreen";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import ShoppingListScreen from "./app/screens/ShoppingListScreen";
import FridgeListScreen from "./app/screens/FridgeListScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Warp = createStackNavigator();

export default function App() {
  
  return (
    
    
        <NavigationContainer style={styles.container}>
      <Warp.Navigator>
        <Warp.Screen name="Create" component={CreateAccountScreen} />
        <Warp.Screen name="Login" component={LoginScreen} />
        <Warp.Screen name="ShopList" component={ShoppingListScreen} />
        <Warp.Screen name="FridgeList" component={FridgeListScreen} />
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