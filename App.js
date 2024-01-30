import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { HeaderIT } from './components/Headerit';
import { FooterIt } from './components/Footerit';
import { Home } from './components/Home'
import { styles } from './styles/styles'

// import Header from './components/header.js'

export default function App() {
  return (

    <>

    <View style={styles.container}>
      {/* <View > */}
        <HeaderIT />

        {/* <Text>Open up App.js to start working on your app working</Text> */}
        <StatusBar style="auto" />
      {/* </View> */}

      <View style={styles.containerHome}>
        <Home />
      </View>
      {/* <View style={styles.containerFooter}> */}
        <FooterIt />
      {/* </View> */}
    </View>
    </>

  );
}
