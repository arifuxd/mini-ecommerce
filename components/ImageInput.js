import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect } from "react";
import colors from "../colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
const ImageInput = ({ imageUri, onChangeImage }) => {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) {
      alert("You need to give permission to access photos");
    }
  };

  const handlePress = () => {
    requestPermission();
    if (!imageUri) {
      openImage();
    } else {
      Alert.alert("Delete", "Are you sure to delete this images?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };
  const openImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      !result.cancelled && onChangeImage(result.uri);
    } catch (error) {}
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri ? (
          <MaterialCommunityIcons
            name="camera"
            color={colors.medium}
            size={40}
          />
        ) : (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
