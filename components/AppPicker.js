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
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
const AppPicker = ({
  PickerItemComponent = PickerItem,
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectedItem,
  width = "100%",
  numberOfColumns = 1,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width: width }]}>
          <View style={{ flexDirection: "row" }}>
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.colors.medium}
                style={styles.icon}
              />
            )}
            {selectedItem ? (
              <Text style={defaultStyles.text}>{selectedItem.label}</Text>
            ) : (
              <Text style={[defaultStyles.text, styles.placeholder]}>
                {placeholder}
              </Text>
            )}
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
            numColumns={numberOfColumns}
            renderItem={({ item }) => {
              console.log(item);
              return (
                <PickerItemComponent
                  item={item}
                  label={item.label}
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.medium,
  },
});
export default AppPicker;
