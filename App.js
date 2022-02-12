import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Switch,
  Button,
  Image,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import Screen from "./screens/Screen";

import { useEffect, useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import ListingEditScreen from "./components/ListingEditScreen";
import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageinputList";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
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
