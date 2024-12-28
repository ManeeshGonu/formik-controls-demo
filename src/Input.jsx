import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Input = (props) => {
  const { name, label, ...rest } = props;
  return (
    <div className="w-full">
      <label htmlFor={name}>{label}</label>
      <Field type="text" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
