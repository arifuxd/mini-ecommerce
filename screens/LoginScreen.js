import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "./Screen";
import * as Yup from "yup";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";

const LoginScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().label("Email").email(),
    password: Yup.string().required().label("Password").min(4),
  });

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          icon="email"
          placeholder="Email"
          name="email"
          keyBoardType="email-address"
        />
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
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
