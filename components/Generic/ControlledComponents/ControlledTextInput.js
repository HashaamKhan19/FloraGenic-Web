import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

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
      render={({ field }) => (
        <TextField {...rest} {...field} inputRef={field.ref} />
      )}
    />
  );
};

export default ControlledTextInput;
