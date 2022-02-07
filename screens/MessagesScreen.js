import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import Screen from "./Screen";
import Separator from "../components/Separator";
import ListitemDelete from "../components/ListitemDelete";

const MessagesScreen = () => {
  const initialMessages = [
    {
      id: 1,
      title: "Ariful Islam",
      description: "Hello, Hi, Bye Bye Dear",
      image: require("../assets/images/mosh.jpg"),
    },
    {
      id: 2,
      title: "Akash Islam",
      description: "This is a good description actually",
      image: require("../assets/images/mosh.jpg"),
    },
  ];

  const [messeages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item) => {
    setMessages(messeages.filter((message) => message.id != item.id));
  };

  return (
    <Screen>
      <FlatList
        data={messeages}
        keyExtractor={(key) => key.id.toString()}
        renderItem={({ item }) => {
          return (
            <ListItem
              title={item.title}
              subtitle={item.description}
              image={item.image}
              onPress={() => console.log("Message Selected")}
              renderRightActions={() => (
                <ListitemDelete onPress={() => handleDelete(item)} />
              )}
            />
          );
        }}
        ItemSeparatorComponent={Separator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            ...messeages,
            {
              id: 3,
              title: "Janntul Ferdous",
              description: "This is Jannat",
              image: require("../assets/images/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
