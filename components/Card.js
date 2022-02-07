import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} resizeMode="repeat" source={image} />
      <View style={styles.details}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.subtitleStyle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    padding: 20,
  },
  titleStyle: {
    marginBottom: 7,
    fontSize: 16,
  },
  subtitleStyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "tomato",
  },
});
export default Card;
