import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { HeaderIT } from './components/Headerit';
import { FooterIt } from './components/Footerit';
// import { Home } from './components/Home'
import MenuItems from './components/MenuItems'
// import { styles } from './styles/styles'
import { StyleSheet } from 'react-native'

export default function App() {
  return (

    <>

      <View style={styles.container}>
        <HeaderIT />
        <MenuItems />
        {/* <StatusBar style="auto" /> */}
      </View>
      <View style={styles.footerContainer}>
        <FooterIt />
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});