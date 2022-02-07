import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import ViewScreen from './screens/ViewScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
  // <WelcomeScreen/>
  <ViewScreen/>

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
