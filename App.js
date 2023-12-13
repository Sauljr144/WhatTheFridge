import { StatusBar } from 'expo-status-bar';
import { GluestackUIProvider} from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" 
import { StyleSheet, View, Text } from 'react-native';
import ShoppingListScreen from './app/screens/ShoppingListScreen';
import Screen from './app/screens/Screen';
import ShoppingListItemModal from './app/components/ShoppingListItemModal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  return (

  <GluestackUIProvider config={config}>
    <GestureHandlerRootView>
      <Screen>
   <ShoppingListScreen/>
  </Screen> 
    </GestureHandlerRootView>
</GluestackUIProvider>




 
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
