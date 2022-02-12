import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../colors";
import defaultStyles from "../defaultStyles";
const AppTextInput = ({ icon, ...restProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[defaultStyles.text, { width: "100%" }]}
        {...restProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
