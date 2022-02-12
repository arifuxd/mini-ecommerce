import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "./Icon";
import defaultStyles from "../defaultStyles";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={item.icon} backgroundColor={item.backgroundColor} />
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
