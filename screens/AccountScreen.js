import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "./Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../colors";
import Separator from "../components/Separator";

const AccountScreen = () => {
  const menuItems = [
    {
      id: 1,
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      id: 2,
      title: "My Messeges",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
  ];

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Ariful Islam"
          subtitle="Learn with Arif"
          image={require("../assets/images/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(key) => key.id}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.title}
                ImageComponent={() => (
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                )}
              />
            );
          }}
          ItemSeparatorComponent={Separator}
        />
      </View>

      <View style={styles.container}>
        <ListItem
          title="Log Out"
          ImageComponent={() => (
            <Icon name="logout" backgroundColor="#ffe66d" />
          )}
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
