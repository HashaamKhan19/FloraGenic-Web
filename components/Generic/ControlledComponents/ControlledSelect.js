import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, Select } from "@mui/material";

const ControlledSelect = ({
  name,
  control,
  pattern = "",
  required = false,
  defaultValue = "",
  validate = null,
  children,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required, pattern, validate }}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl fullWidth>
          <Select {...rest} {...field}>
            {children}
          </Select>
          {rest.error && (
            <FormHelperText error> {rest.helperText}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default ControlledSelect;
