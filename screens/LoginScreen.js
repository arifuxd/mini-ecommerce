import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "./Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          touched,
          setFieldTouched,
          errors,
          isSubmitting,
        }) => (
          <>
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
