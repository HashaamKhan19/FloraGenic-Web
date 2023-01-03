import DropZone from "../Dropzone";
import { Controller } from "react-hook-form";
import { FormHelperText } from "@mui/material";

const ControlledDropzone = ({
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
          <DropZone
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

export default ControlledDropzone;
