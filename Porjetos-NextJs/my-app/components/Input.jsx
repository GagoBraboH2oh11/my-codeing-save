import { ErrorMessage, Field } from "formik";
import React from "react";

const Input = (name, type, label, require, ...props) => {
  return (
    <div>
      <Field name={name} type={type} {...props} />
      <ErrorMessage name={name}/>
    </div>
  );
};

export default Input;
