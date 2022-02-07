import { StyleSheet, Text, View, Image } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import colors from "../colors";

const ViewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={32}
        />
      </View>
      <Image
        source={require("../assets/images/chair.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
});
export default ViewScreen;
