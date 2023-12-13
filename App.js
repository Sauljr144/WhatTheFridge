import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DataTest from './app/screens/DataTest';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView>

        <View style={styles.container}>
          <DataTest/>
          <StatusBar style="auto" />
        </View>

      </SafeAreaView>
     

    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
