import { useMutation } from "@apollo/client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ControlledSelect from "../../Generic/ControlledComponents/ControlledSelect";
import ControlledTextInput from "../../Generic/ControlledComponents/ControlledTextInput";
import AuthLayout from "../AuthLayout";
import { SIGN_UP } from "./queries";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const isTablet = useMediaQuery("(max-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [visible, setVisible] = React.useState(false);
  const [confirmVisible, setConfirmVisible] = React.useState(false);

  const [signUp, { data, loading, error }] = useMutation(SIGN_UP, {
    onCompleted: (res) => {
      toast.success(res.register);
      router.push("/signIn");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  console.log(data, loading, error);

  const onSubmit = (data) => {
    signUp({
      variables: {
        credentials: {
          email: data.email,
          password: data.password,
          userType: data.userType,
        },
      },
    });
  };

  return (
    <AuthLayout handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <Box
        alignItems={"center"}
        display="flex"
        flexDirection={"column"}
        width={"100%"}
      >
        <Typography variant="h4" fontWeight={600}>
          Sign Up
        </Typography>
        <Typography variant="h6">Register for an account</Typography>
      </Box>
      <Box
        width={"100%"}
        px={isMobile ? 5 : 10}
        display="flex"
        flexDirection={"column"}
        gap={2}
      >
        <ControlledSelect
          control={control}
          name={"userType"}
          required
          defaultValue="Customer"
        >
          <MenuItem value="Customer">Customer</MenuItem>
          <MenuItem value="Gardener">Gardener</MenuItem>
          <MenuItem value="NurseryOwner">Nursery Owner</MenuItem>
        </ControlledSelect>
        <ControlledTextInput
          control={control}
          name="email"
          required
          pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
          size="medium"
          fullWidth
          error={errors.email ? true : false}
          helperText={errors.email && "Please Enter a Valid Email Address"}
          placeholder="Email"
        />
        <ControlledTextInput
          control={control}
          name="password"
          required
          fullWidth
          placeholder="Password"
          type={visible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={(e) => {
                    setVisible(!visible);
                  }}
                >
                  {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={errors.password ? true : false}
          helperText={
            errors.password && "Password can't be less than 5 characters"
          }
        />
        <ControlledTextInput
          control={control}
          name="confirmPassword"
          required
          fullWidth
          placeholder="Confirm Password"
          validate={(value) => value === getValues("password")}
          type={confirmVisible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={(e) => {
                    setConfirmVisible(!confirmVisible);
                  }}
                >
                  {confirmVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={errors.confirmPassword ? true : false}
          helperText={
            errors.confirmPassword &&
            "Passwords do not match. Please try again."
          }
        />
      </Box>
      <Box width={"100%"} px={isMobile ? 5 : 10}>
        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{
            py: 2,
            borderRadius: 20,
            bgcolor: "#62A82C",
            color: "white",
            mb: 2,
          }}
          // loading={loading}
        >
          Sign Up
        </Button>
        <Box display={"flex"} justifyContent="center">
          <Typography variant="h6" textAlign={"center"}>
            Already have an account?
          </Typography>
          <Link href={"/login"}>
            <Typography
              variant="h6"
              color="#62A82C"
              sx={{ cursor: "pointer" }}
              ml={1}
            >
              Login
            </Typography>
          </Link>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default SignIn;
