import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingListScreen from './app/screens/ShoppingListScreen';
import Screen from './app/screens/Screen';
export default function App() {
  return (
    <Screen style={styles.container}>
      <ShoppingListScreen/>
    </Screen>
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
