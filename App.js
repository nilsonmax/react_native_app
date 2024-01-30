import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderIT } from './components/Headerit';
import { FooterIt } from './components/Footerit';
import {styles} from './styles/styles'

// import Header from './components/header.js'

export default function App() {
  return (

    <>
      <View style={styles.Headerit}>
        <HeaderIT />

        {/* <Text>Open up App.js to start working on your app working</Text> */}
        <StatusBar style="auto" />
      </View>

      <View style={styles.Footerit}>
        <FooterIt />
        {/* <Text>Open up App.js to start working on your app working</Text> */}
        {/* <StatusBar style="auto" /> */}
      </View>
    </>

  );
}
