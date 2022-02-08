import {
  Button,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../colors";
import defaultStyles from "../defaultStyles";
import PickerItem from "./PickerItem";
import Screen from "../screens/Screen";
const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectedItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.colors.medium}
                style={styles.icon}
              />
            )}
            <Text>{selectedItem ? selectedItem.title : placeholder}</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(key) => key.value.toString()}
            renderItem={({ item }) => {
              // console.log(item);
              return (
                <PickerItem
                  label={item.title}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectedItem(item);
                  }}
                />
              );
            }}
          />
        </Screen>
      </Modal>
    </>
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
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 10,
  },
});
export default AppPicker;
