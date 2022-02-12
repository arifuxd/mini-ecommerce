import React from "react";
import { useFormikContext } from "formik";
import ImageinputList from "../ImageinputList";
import ErrorMessage from "./ErrorMessage";
const FormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => setFieldValue(name, [...imageUris, uri]);
  const handleRemove = (uri) =>
    setFieldValue(
      name,
      imageUris.filter((imageuri) => imageuri !== uri)
    );
  return (
    <>
      <ImageinputList
        imageuris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
