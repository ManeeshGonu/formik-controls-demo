import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Select = (props) => {
  const { options, label, name, ...rest } = props;
  return (
    <div className="w-full">
      <label>{label}</label>
      <Field as="select" name={name} id={name} {...rest}>
        {options.map((option) => {
          const { label, value } = option;
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
