import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "./Screen";
import Card from "../components/Card";
import colors from "../colors";

const ListingScreen = () => {
  const listing = [
    {
      id: 1,
      title: "Red Jacket is up for sale",
      price: 100,
      image: require("../assets/images/red-jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch is up for sale",
      price: 200,
      image: require("../assets/images/couch.jpg"),
    },
  ];

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(key) => key.id.toString()}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              image={item.image}
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 20 }} />}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
