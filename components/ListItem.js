import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ListItem = ({ image, title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageStyle} />
      <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.subtitleStyle} t>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitleStyle: {
    color: "#696969",
  },
});
