import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CreateAccountScreen from "./app/screens/CreateAccountScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/screens/LoginScreen";
import ShoppingListScreen from "./app/screens/ShoppingListScreen";
import { GluestackUIProvider, GluestackUIStyledProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";



const Warp = createStackNavigator();

export default function App() {
  return (
    
    <GluestackUIProvider config={config}>

      <NavigationContainer>
          <Warp.Navigator
            screenOptions={{
              headerShown: false
            }} 
          >
            <Warp.Screen name="Login" component={LoginScreen} />
            <Warp.Screen name="Create" component={CreateAccountScreen} />
            <Warp.Screen name="Shopping" component={ShoppingListScreen} />

          </Warp.Navigator>
      </NavigationContainer>

    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({

});
