import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import colors from "../colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ListitemDelete = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          color={colors.white}
          size={32}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListitemDelete;
