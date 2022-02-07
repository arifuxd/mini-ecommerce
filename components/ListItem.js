import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import React from "react";
import colors from "../colors";

const ListItem = ({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
  ImageComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent && <ImageComponent />}
          {image && <Image source={image} style={styles.imageStyle} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.titleStyle}>{title}</Text>
            {subtitle && <Text style={styles.subtitleStyle}>{subtitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitleStyle: {
    color: "#696969",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
});
