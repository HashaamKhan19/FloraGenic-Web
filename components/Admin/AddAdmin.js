import { AlternateEmail, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import React from "react";

// Controlled component
import ControlledDropzone from "../Generic/ControlledComponents/ControlledDropzone";
import ControlledSelect from "../Generic/ControlledComponents/ControlledSelect";
import ControlledTelInput from "../Generic/ControlledComponents/ControlledTelInput";
import ControlledTextInput from "../Generic/ControlledComponents/ControlledTextInput";

// Pattern input
import ControlledPatternInput from "../Generic/ControlledComponents/ControlledPatternInput";

const AddAdmin = ({ control, getValues, setValue, errors }) => {
  const [action, setAction] = React.useState("Enter");

  const router = useRouter();

  React.useEffect(() => {
    const parts = router.pathname.split("/");
    parts[parts.length - 1] == "addUser" ? action : setAction("Edit");
  }, [router.pathname, action]);

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
          name="firstName"
          placeholder="Jane"
          id="firstName"
          fullWidth
          autoComplete="family-name"
          error={errors.firstName ? true : false}
          helperText={errors.firstName && "First name is required"}
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
          name="lastName"
          placeholder="Doe"
          id="lastName"
          fullWidth
          autoComplete="family-name"
          error={errors.lastName ? true : false}
          helperText={errors.lastName && "Last name is required"}
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
          required={action == "Enter" ? true : false}
          disabled={action == "Enter" ? false : true}
          control={control}
          pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
          name="email"
          id="email"
          placeholder="janedoe@gmail.com"
          fullWidth
          autoComplete="email"
          error={errors.email ? true : false}
          helperText={errors.email && "Invalid email address"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmail />
              </InputAdornment>
            ),
          }}
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
          name="phoneNumber"
          required
          defaultCountry="PK"
          id="phoneNumber"
          fullWidth
          autoComplete="phoneNumber"
          error={errors.phoneNumber ? true : false}
          helperText={errors.phoneNumber && "Phone number is required"}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="password"
          variant="standard"
          required={action === "Edit" ? false : true}
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
          required={action === "Edit" ? false : true}
          minLength={5}
          id="password"
          name="password"
          type={showPassword}
          fullWidth
          autoComplete="password"
          placeholder="••••••••••"
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
          helperText={
            errors.password && "Password must be at least 5 characters long"
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputLabel
          htmlFor="confirmPassword"
          variant="standard"
          required={action === "Edit" ? false : true}
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
          required={action === "Edit" ? false : true}
          validate={(value) => value === getValues("password")}
          id="confirmPassword"
          name="confirmPassword"
          fullWidth
          autoComplete="confirmPassword"
          type={showConfirmPassword}
          placeholder="••••••••••"
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
            errors.confirmPassword && "Password and confirm password must match"
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
          defaultValue="pakistan"
          required
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
          htmlFor="Address"
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

      <Grid item xs={12} justifyItems={"center"}>
        <InputLabel
          htmlFor="cnic"
          variant="standard"
          required
          sx={{
            mb: 1.5,
            color: "text.primary",
            "& span": { color: "error.light" },
          }}
          disabled={action == "Enter" ? false : true}
        >
          {action} CNIC
        </InputLabel>
        <ControlledPatternInput
          control={control}
          required
          format="#####-#######-#"
          placeholder="#####-#######-#"
          pattern={/^[0-9]{5}-[0-9]{7}-[0-9]$/}
          id="cnic"
          name="CNIC"
          fullWidth
          autoComplete="CNIC"
          disabled={action == "Enter" ? false : true}
          error={errors.cnic ? true : false}
          helperText={errors.cnic && "CNIC is required"}
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

export default AddAdmin;
