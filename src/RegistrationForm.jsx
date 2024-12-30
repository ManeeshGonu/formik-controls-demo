import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";

const RegistrationForm = () => {
  const options = [
    { label: "Mobile", value: "mobilemoc" },
    { label: "Email", value: "emailmoc" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email Format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "passwords must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "mobilemoc",
      then: () => Yup.string().required("Required"),
    }),
  });

  const onSubmit = (values) => {
    console.log("Form Data", values);
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
                name="email"
                control="input"
                type="text"
                label="Email"
              />
              <FormControl
                name="password"
                control="input"
                type="password"
                label="Password"
              />
              <FormControl
                name="confirmPassword"
                control="input"
                type="password"
                label="Confirm Password"
              />
              <FormControl
                control="radio"
                name="modeOfContact"
                options={options}
                label="Mode Of Contact"
              />
              <FormControl
                control="input"
                type="text"
                name="phone"
                options={options}
                label="Phone"
              />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
