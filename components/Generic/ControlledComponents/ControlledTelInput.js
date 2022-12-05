import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
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
          return matchIsValidTel(value);
        },
      }}
      render={({ field }) => <MuiTelInput {...field} {...rest} />}
    />
  );
};

export default ControlledTelInput;
