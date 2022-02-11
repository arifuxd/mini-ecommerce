import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import defaultStyles from "../defaultStyles";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.pickerItem} onPress={onPress}>
      <Text style={([defaultStyles.text], { color: "#000" })}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pickerItem: {
    padding: 20,
  },
});
export default PickerItem;
