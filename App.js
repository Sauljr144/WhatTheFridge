import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CreateAccountScreen from "./app/screens/CreateAccountScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/screens/LoginScreen";

import { GluestackUIProvider } from "@gluestack-ui/themed";

const Warp = createStackNavigator();

export default function App() {
  
  return (
    
    
        <NavigationContainer>
        <Warp.Navigator
          screenOptions={{
            headerShown: false
          }} 
        >
          <Warp.Screen name="Create" component={CreateAccountScreen} />
          <Warp.Screen name="Login" component={LoginScreen} />
          <Warp.Screen name="ShopList" component={ShoppingListScreen} />
        <Warp.Screen name="FridgeList" component={FridgeListScreen} />
      </Warp.Navigator>
    </NavigationContainer>
  
    </GluestackUIProvider>
  
  );
}

const styles = StyleSheet.create({

});