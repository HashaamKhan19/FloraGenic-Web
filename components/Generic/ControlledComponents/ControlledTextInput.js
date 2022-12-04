import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const ControlledTextInput = ({
  name,
  control,
  pattern = "",
  required = false,
  minLength = null,
  maxLength = null,
  validate = null,
  defaultValue = "",
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required, pattern, minLength, maxLength, validate }}
      defaultValue={defaultValue}
      render={({ field }) => <TextField {...rest} {...field} />}
    />
  );
};

export default ControlledTextInput;
