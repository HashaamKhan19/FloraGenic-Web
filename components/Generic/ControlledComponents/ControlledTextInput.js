import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const ControlledTextInput = ({
  name,
  control,
  pattern = "",
  required = false,
  minLength = null,
  maxLength = null,
  defaultValue = "",
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required, pattern, minLength, maxLength }}
      defaultValue={defaultValue}
      render={({ field }) => <TextField {...rest} {...field} />}
    />
  );
};

export default ControlledTextInput;
