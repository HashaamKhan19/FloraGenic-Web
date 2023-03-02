import { AlternateEmail, Visibility, VisibilityOff } from "@mui/icons-material";
import {
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import React from "react";
import ControlledDropzone from "../Generic/ControlledComponents/ControlledDropzone";
import ControlledPatternInput from "../Generic/ControlledComponents/ControlledPatternInput";
import ControlledSelect from "../Generic/ControlledComponents/ControlledSelect";
import ControlledTelInput from "../Generic/ControlledComponents/ControlledTelInput";
import ControlledTextInput from "../Generic/ControlledComponents/ControlledTextInput";

const AddNurseryOwner = ({ control, getValues, setValue, errors }) => {
  const [action, setAction] = React.useState("Enter");

  const router = useRouter();

  React.useEffect(() => {
    const parts = router.pathname.split("/");
    parts[parts.length - 1] == "addUser" ? action : setAction("Edit");
  }, [router, action]);

  const passwordDisplay = () => {
    {
      showPassword == "text"
        ? setShowPassword("password")
        : setShowPassword("text");
    }
  };

  const confirmPasswordDisplay = () => {
    {
      showConfirmPassword == "text"
        ? setShowConfirmPassword("password")
        : setShowConfirmPassword("text");
    }
  };

  const [showPassword, setShowPassword] = React.useState("password");
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState("password");

  return (
    <>
      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="firstName"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: "text.primary",
            "& span": { color: "error.light" },
          }}
        >
          {action} First Name
        </InputLabel>
        <ControlledTextInput
          control={control}
          required
          id="firstName"
          name="firstName"
          fullWidth
          autoComplete="family-name"
          error={errors.firstName ? true : false}
          helperText={errors.firstName && "First Name is required"}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="lastName"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: "text.primary",
            "& span": { color: "error.light" },
          }}
        >
          {action} Last Name
        </InputLabel>
        <ControlledTextInput
          control={control}
          required
          id="lastName"
          name="lastName"
          fullWidth
          autoComplete="family-name"
          error={errors.lastName ? true : false}
          helperText={errors.lastName && "Last Name is required"}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="email"
          variant="standard"
          required={action == "Enter" ? true : false}
          disabled={action == "Enter" ? false : true}
          sx={{
            mb: 1.5,
            color: "text.primary",
            "& span": { color: "error.light" },
          }}
        >
          {action} Email
        </InputLabel>
        <ControlledTextInput
          control={control}
          required={action == "Enter" ? true : false}
          disabled={action == "Enter" ? false : true}
          pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
          id="email"
          name="email"
          fullWidth
          autoComplete="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmail />
              </InputAdornment>
            ),
          }}
          error={errors.email ? true : false}
          helperText={errors.email && "Email is required"}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="phoneNumber"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: "text.primary",
            "& span": { color: "error.light" },
          }}
        >
          {action} Phone Number
        </InputLabel>
        <ControlledTelInput
          control={control}
          required
          defaultCountry="PK"
          id="phoneNumber"
          name="phoneNumber"
          fullWidth
          autoComplete="phoneNumber"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="password"
          variant="standard"
          required={action == "Enter" ? true : false}
          sx={{
            mb: 1.5,
            color: "text.primary",
            "& span": { color: "error.light" },
          }}
        >
          {action} Password
        </InputLabel>
        <ControlledTextInput
          control={control}
          required={action == "Enter" ? true : false}
          minLength={5}
          id="password"
          name="password"
          type={showPassword}
          fullWidth
          autoComplete="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={passwordDisplay}
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  {showPassword == "password" ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={errors.password ? true : false}
          helperText={errors.password && "Password is required"}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="confirmPassword"
          variant="standard"
          required={action == "Enter" ? true : false}
          sx={{
            mb: 1.5,
            color: "text.primary",
            "& span": { color: "error.light" },
          }}
        >
          Confirm Password
        </InputLabel>

        <ControlledTextInput
          control={control}
          required={action == "Enter" ? true : false}
          validate={(value) => value === getValues("password")}
          id="confirmPassword"
          name="confirmPassword"
          fullWidth
          autoComplete="confirmPassword"
          type={showConfirmPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={confirmPasswordDisplay}
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  {showConfirmPassword == "password" ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={errors.confirmPassword ? true : false}
          helperText={
            errors.confirmPassword && "Password and Confirm Password must match"
          }
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="gender"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: "text.primary",
            "& span": { color: "error.light" },
          }}
        >
          Gender
        </InputLabel>
        <ControlledSelect
          control={control}
          required
          defaultValue="male"
          id="gender"
          name="gender"
          autoComplete="gender"
          fullWidth
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </ControlledSelect>
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="nationality"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: "text.primary",
            "& span": { color: "error.light" },
          }}
        >
          Nationality
        </InputLabel>
        <ControlledSelect
          control={control}
          required
          defaultValue="pakistan"
          id="nationality"
          name="nationality"
          autoComplete="Pakistan"
          fullWidth
        >
          <MenuItem value="pakistan">Pakistan</MenuItem>
        </ControlledSelect>
      </Grid>
      {/* <Grid item xs={12}>
        <InputLabel
          htmlFor="address"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: "text.primary",
            "& span": { color: "error.light" },
          }}
        >
          {action} Address
        </InputLabel>
        <ControlledTextInput
          control={control}
          required
          id="address"
          name="address"
          fullWidth
          autoComplete="address"
          error={errors.address ? true : false}
          helperText={errors.address && "Address is required"}
        />
      </Grid> */}

      <Grid item xs={12}>
        <InputLabel
          htmlFor="CNIC"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: "text.primary",
            "& span": { color: "error.light" },
          }}
        >
          {action} CNIC
        </InputLabel>
        <ControlledPatternInput
          control={control}
          required
          format="#####-#######-#"
          pattern={/^[0-9]{5}-[0-9]{7}-[0-9]$/}
          id="CNIC"
          name="CNIC"
          fullWidth
          autoComplete="CNIC"
          error={errors.CNIC ? true : false}
          helperText={errors.CNIC && "CNIC is required"}
        />
      </Grid>

      <Grid item xs={12}>
        <InputLabel
          htmlFor="image"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: "text.primary",
            "& span": { color: "error.light" },
          }}
        >
          {action} Profile Image
        </InputLabel>
        <ControlledDropzone
          control={control}
          getValues={getValues}
          setValue={setValue}
          // required
          name="image"
          id="image"
          error={errors.image ? true : false}
          helperText={"Image is required"}
        />
      </Grid>
    </>
  );
};

export default AddNurseryOwner;
