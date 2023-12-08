import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CreateAccountScreen from './app/screens/CreateAccountScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <CreateAccountScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCE20',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
