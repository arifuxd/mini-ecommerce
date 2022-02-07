import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
import ViewScreen from "./screens/ViewScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import AppButton from "./components/AppButton";
import Card from "./components/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
export default function App() {
  return (
    // <WelcomeScreen />
    <ViewScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: StatusBar.currentHeight + 10,
  },
});
