import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import ImageInput from "./ImageInput";

const ImageinputList = ({ imageuris = [], onRemoveImage, onAddImage }) => {
  const scrollview = useRef();
  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollview}
        onContentSizeChange={() => scrollview.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageuris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageinputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
