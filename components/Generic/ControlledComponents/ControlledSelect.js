import { Controller } from "react-hook-form";
import { Select } from "@mui/material";

const ControlledSelect = ({
  name,
  control,
  pattern = "",
  required = false,
  defaultValue = "",
  children,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required, pattern }}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Select {...rest} {...field}>
          {children}
        </Select>
      )}
    />
  );
};

export default ControlledSelect;
