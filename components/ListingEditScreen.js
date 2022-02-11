import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "./forms";
import Screen from "../screens/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        validationSchema={validationSchema}
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyBoardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {},
});
