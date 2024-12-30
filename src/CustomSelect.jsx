  import React from "react";
  import Select from "react-select";
  import { ErrorMessage, useField, useFormikContext } from "formik";
  import TextError from "./TextError";

  const CustomSelect = (props) => {
    const { label, name, options, ...rest } = props;
    const [field, , helpers] = useField(name);
    const { setValue } = helpers;
    const { setTouched } = useFormikContext();

    const handleChange = (selectedOption) => {
      setValue(selectedOption ? selectedOption.value : ""); // Update Formik value
    };

    const handleBlur = () => {
      setTouched({ [name]: true }); // Mark the field as touched
    };

    return (
      <div className="w-full">
        <label htmlFor={name} className="block mb-2">
          {label}
        </label>
        <Select
          id={name}
          name={name}
          options={options}
          onChange={handleChange}
          onBlur={handleBlur}
          value={options.find((option) => option.value === field.value) || null} // Match selected value
          {...rest}
        />
        <ErrorMessage name={name} component={TextError} />
      </div>
    );
  };

  export default CustomSelect;

// import React from "react";
// import Select from "react-select";
// import { Field, ErrorMessage } from "formik";
// import TextError from "./TextError";

// const CustomSelect = (props) => {
//   const { label, name, options, ...rest } = props;

//   return (
//     <div className="my-4 w-full">
//       <label htmlFor={name} className="block mb-2">
//         {label}
//       </label>
//       <Field name={name}>
//         {({ field, form }) => {
//           const { setFieldValue, setTouched } = form;
//           const { value } = field;

//           return (
//             <Select
//               id={name}
//               options={options}
//               value={options.find((option) => option.value === value) || null} // Set the current value
//               onChange={(selectedOption) =>
//                 setFieldValue(name, selectedOption ? selectedOption.value : "")
//               } // Update Formik value
//               onBlur={() => setTouched({ [name]: true })} // Mark as touched
//               {...rest}
//             />
//           );
//         }}
//       </Field>
//       <ErrorMessage name={name} component={TextError} />
//     </div>
//   );
// };

// export default CustomSelect;
