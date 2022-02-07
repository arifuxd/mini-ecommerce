import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import ViewScreen from "./screens/ViewScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import AccountScreen from "./screens/AccountScreen";
import AppButton from "./components/AppButton";
import Card from "./components/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import MessagesScreen from "./screens/MessagesScreen";
import Screen from "./screens/Screen";
import Icon from "./components/Icon";
import colors from "./colors";
import ListItem from "./components/ListItem";
import ListingScreen from "./screens/ListingScreen";
import AppTextInput from "./components/AppTextInput";

export default function App() {
  return <AppTextInput placeholder="Username" icon="email" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: StatusBar.currentHeight + 10,
  },
});
