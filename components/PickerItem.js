import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import defaultStyles from "../defaultStyles";

const PickerItem = ({ label, onPress }) => {
  console.log(label);
  return (
    <TouchableOpacity style={styles.pickerItem} onPress={onPress}>
      <Text style={defaultStyles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pickerItem: {
    padding: 20,
  },
});
export default PickerItem;
