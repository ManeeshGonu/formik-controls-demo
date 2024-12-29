import React from "react";
import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

const CheckboxGroup = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <div className="my-4">
      <label className="">{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return (
            <div className="flex">
              {options.map((option) => {
                return (
                  <div key={option.value} className="flex items-center">
                    <label htmlFor={option.value}>{option.label}</label>
                    <input
                      type="checkbox"
                      name={name}
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                      className="w-[30px]"
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

export default CheckboxGroup;
