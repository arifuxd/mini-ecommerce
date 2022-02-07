import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";
import colors from "../colors";
const WelcomeScreen = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/images/bg.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />
      </View>
      <View style={styles.btncontainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color={colors.secondary} />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 127,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  btncontainer: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
  },
});
