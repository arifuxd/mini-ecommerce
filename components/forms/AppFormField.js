import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
const AppFormField = ({ name, width, ...restProps }) => {
  const { errors, touched, handleChange, setFieldTouched } = useFormikContext();

  return (
    <>
      <AppTextInput
        {...restProps}
        width={width}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
