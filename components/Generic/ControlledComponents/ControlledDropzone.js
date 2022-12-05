import DropZone from "../Dropzone";
import { Controller } from "react-hook-form";

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
        <DropZone
          {...rest}
          {...field}
          getValues={getValues}
          name={name}
          setValue={setValue}
        />
      )}
    />
  );
};

export default ControlledDropzone;
