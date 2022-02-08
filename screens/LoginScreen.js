import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "./Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, handleChange }) => (
          <>
            <AppTextInput
              autoCorrect={false}
              autoCapitalize="none"
              icon="email"
              onChangeText={handleChange("email")}
              placeholder="Email"
              keyBoardType="email-address"
            />
            <AppTextInput
              autoCorrect={false}
              autoCapitalize="none"
              icon="lock"
              placeholder="Password"
              onChangeText={handleChange("password")}
              secureTextEntry
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  logo: {
    width: 80,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
  },
});
export default LoginScreen;
