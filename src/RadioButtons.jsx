import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const RadioButtons = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <div className="w-full my-4">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return (
            <div className="flex">
              {options.map((option) => {
                return (
                  <div key={option.label} className="flex items-center my-0">
                    <label htmlFor={option.value}>{option.label}</label>
                    <input
                      className="w-[30px]"
                      {...field}
                      type="radio"
                      id={option.value}
                      value={option.value}
                      checked={field.value === option.value}
                    />
                  </div>
                );
              })}
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButtons;
