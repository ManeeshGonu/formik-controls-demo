import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormControl from "./FormControl";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className="w-1/2 mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormControl
                control="input"
                type="text"
                name="email"
                label="Email"
              />
              <FormControl
                control="input"
                type="password"
                name="password"
                label="Password"
              />
              <button type="submit" disabled={!formik.isValid}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
