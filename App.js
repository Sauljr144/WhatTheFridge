import { GluestackUIProvider} from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" 
import { StyleSheet} from 'react-native';
import ShoppingListScreen from './app/screens/ShoppingListScreen';
import Screen from './app/screens/Screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  return (

  <GluestackUIProvider config={config}>
    <GestureHandlerRootView style={{flex: 1}}>
      <Screen>
   {/* <ShoppingListScreen/> */}
   <FridgeListScreen/>
  </Screen> 
    </GestureHandlerRootView>
</GluestackUIProvider>




 
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
