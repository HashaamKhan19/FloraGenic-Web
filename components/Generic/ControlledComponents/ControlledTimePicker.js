import { Controller } from "react-hook-form";
import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

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
            label="Time"
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default ControlledTimePicker;
