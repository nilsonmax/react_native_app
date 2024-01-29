import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderIT } from './components/Headerit';

// import Header from './components/header.js'

export default function App() {
  return (
    <View style={styles.headerit}>
      <HeaderIT />
      {/* <Text>Open up App.js to start working on your app working</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerit: {
    flex: 0.7,
    backgroundColor: '#495E57',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
