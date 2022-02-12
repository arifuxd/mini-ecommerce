import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) {
    return null;
  } else {
    return <Text style={styles.error}>{error}</Text>;
  }
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
