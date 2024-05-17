import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './Components/Nav'
import NavSecundaria from './Components/NavSecundaria';
import Buy from './Components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Nav/>
      <NavSecundaria/>
      <Buy/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',

  },
});
