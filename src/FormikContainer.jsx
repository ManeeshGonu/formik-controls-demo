import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";

function FormikContainer() {
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form Submitted", values);
  };

  return (
    <div className="mx-auto min-h-screen flex flex-col justify-center items-center space-y-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="">
              <FormControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormikContainer;
