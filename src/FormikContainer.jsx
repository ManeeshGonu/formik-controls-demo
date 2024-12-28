import { Formik, Form } from "formik";
import * as Yup from "yup";

function FormikContainer() {
  const initialValues = {};
  const validationSchema = Yup.object({});
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
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormikContainer;
