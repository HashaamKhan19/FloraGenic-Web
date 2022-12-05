import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { PatternFormat } from "react-number-format";

const ControlledPatternInput = ({
  name,
  control,
  pattern = "",
  required = false,
  format,
  validate = null,
  defaultValue = "",
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required, pattern, validate }}
      defaultValue={defaultValue}
      render={({ field }) => (
        <PatternFormat
          format={format}
          {...rest}
          {...field}
          customInput={TextField}
        />
      )}
    />
  );
};

export default ControlledPatternInput;
