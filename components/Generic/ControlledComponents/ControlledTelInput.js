import { matchIsValidTel, MuiTelInput } from "mui-tel-input";
import { Controller } from "react-hook-form";

const ControlledTelInput = ({
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
      defaultValue={defaultValue}
      rules={{
        required,
        pattern,
        minLength,
        maxLength,
        validate: (value) => {
          if (required) return matchIsValidTel(value);
          else return true;
        },
      }}
      render={({ field }) => (
        <MuiTelInput {...field} {...rest} inputRef={field.ref} />
      )}
    />
  );
};

export default ControlledTelInput;
