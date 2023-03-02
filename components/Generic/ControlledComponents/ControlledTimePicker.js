import { FormHelperText } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import * as React from "react";
import { Controller } from "react-hook-form";

const ControlledTimePicker = ({
  name,
  control,
  required = false,
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
      }}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            {...field}
            {...rest}
            inputRef={field.ref}
            label="Time"
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
          {rest.error && (
            <FormHelperText error> {rest.helperText}</FormHelperText>
          )}
        </LocalizationProvider>
      )}
    />
  );
};

export default ControlledTimePicker;
