import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/images/red-jacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red Jacket is up for sale</Text>
        <Text style={styles.subtitle}>$300</Text>
      </View>

      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/images/red-jacket.jpg")}
          title="Ariful Islam"
          subtitle="5 Products"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
  },
  subtitle: {
    fontWeight: "700",
    fontSize: 20,
    paddingVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
