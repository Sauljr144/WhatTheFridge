import { StatusBar } from 'expo-status-bar';
import { GluestackUIProvider} from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" 
import { StyleSheet, View, Text } from 'react-native';
import ShoppingListScreen from './app/screens/ShoppingListScreen';
import Screen from './app/screens/Screen';


export default function App() {
  return (
  //  <GluestackUIProvider config={config}>
  //    <Screen style={styles.container}>
  //     {/* <ShoppingListScreen/> */}
  //   </Screen>
  //  </GluestackUIProvider>

<GluestackUIProvider>
  <Screen>
   <ShoppingListScreen/>
  </Screen>
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
