import { FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import MultiDropzone from "../MultiDropzone";

const ControlledMultiDropzone = ({
  name,
  control,
  getValues,
  setValue,
  required = false,
  defaultValue = null,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required, validate: (value) => value !== null }}
      defaultValue={defaultValue}
      render={({ field }) => (
        <>
          <MultiDropzone
            {...rest}
            {...field}
            getValues={getValues}
            name={name}
            setValue={setValue}
          />
          {rest.error && (
            <FormHelperText error> {rest.helperText}</FormHelperText>
          )}
        </>
      )}
    />
  );
};

export default ControlledMultiDropzone;
