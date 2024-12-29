import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";

function FormikContainer() {
  const dropdownOptions = [
    { label: "Select an option", value: "" },
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const radioOptions = [
    { label: "Option 1", value: "roption1" },
    { label: "Option 2", value: "roption2" },
    { label: "Option 3", value: "roption3" },
  ];

  const checkboxOptions = [
    { label: "Option 1", value: "coption1" },
    { label: "Option 2", value: "coption2" },
    { label: "Option 3", value: "coption3" },
  ];

  const initialValues = {
    name: "",
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required").min(1, "Required"),
    birthDate: Yup.date().nullable().required("Required"),
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
        validateOnChange={false}
      >
        {(formik) => {
          return (
            <Form className="">
              <FormControl
                control="input"
                type="text"
                label="Name"
                name="name"
              />
              <FormControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormControl
                control="textarea"
                label="Description"
                name="description"
              />
              <FormControl
                control="select"
                options={dropdownOptions}
                label="Select a Topic"
                name="selectOption"
              />
              <FormControl
                control="radio"
                label="Radio Topic"
                name="radioOption"
                options={radioOptions}
              />
              <FormControl
                control="checkbox"
                label="CheckBox Topics"
                name="checkboxOption"
                options={checkboxOptions}
              />
              <FormControl
                control="date"
                label="Pick a date"
                name="birthDate"
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
