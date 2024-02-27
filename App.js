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

  <GluestackUIProvider config={config}>
    <GestureHandlerRootView style={{flex: 1}}>
      <Screen>
   <ShoppingListScreen/>
   {/* <FridgeListScreen/> */}
  </Screen> 
    </GestureHandlerRootView>
</GluestackUIProvider>




 
  
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
