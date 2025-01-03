import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import RadioButtons from "./RadioButtons";
import CustomSelect from "./CustomSelect";
import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";

const FormControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <CustomSelect {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date": return <DatePicker {...rest}/>
    default:
      return null;
  }
};

export default FormControl;
