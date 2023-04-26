import { useMutation } from "@apollo/client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { GoogleLogin } from "@react-oauth/google";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/authContext";
import ControlledSelect from "../../Generic/ControlledComponents/ControlledSelect";
import ControlledTextInput from "../../Generic/ControlledComponents/ControlledTextInput";
import AuthLayout from "../AuthLayout";
import { SIGN_UP, SIGN_UP_WITH_TOKEN } from "./queries";
import UserTypeModal from "./UserTypeModal";

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
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { user } = React.useContext(AuthContext);

  const [modelUserType, setModelUserType] = React.useState("Customer");
  const [googleToken, setGoogleToken] = React.useState("");

  const [visible, setVisible] = React.useState(false);
  const [confirmVisible, setConfirmVisible] = React.useState(false);

  // useLayoutEffect(() => {
  //   const token = user?.token || localStorage.getItem('token')
  //   const userType = user?.userType || localStorage.getItem('userType')

  //   if (!token || !userType) {
  //     localStorage.clear()
  //   } else {
  //     router.back()
  //   }
  // }, [])

  const [signUp, { data, loading, error }] = useMutation(SIGN_UP, {
    onCompleted: (res) => {
      toast.success(res.register);
      router.push("/login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const [
    signUpWithToken,
    { data: tokenData, loading: tokenLoading, error: tokenError },
  ] = useMutation(SIGN_UP_WITH_TOKEN, {
    onCompleted: (res) => {
      toast.success(res.registerWithToken);
      router.push("/signIn");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleOpen = () => {
    setGoogleToken("");
    setModelUserType("Customer");
    setOpen(true);
  };

  const handleClose = () => {
    signUpWithToken({
      variables: {
        token: googleToken,
        userType: modelUserType,
      },
    });
    setOpen(false);
  };

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
            borderRadius: 2,
            bgcolor: "primary.main",
            color: "white",
            mb: 2,
          }}
          disabled={loading || tokenLoading}
        >
          {loading || tokenLoading ? (
            <CircularProgress size={30} />
          ) : (
            "Register"
          )}
        </Button>
        <Box display={"flex"} justifyContent="center">
          <Typography variant="h6" textAlign={"center"}>
            Already have an account?
          </Typography>
          <Link href={"/login"}>
            <Typography
              variant="h6"
              color="primary.main"
              sx={{ cursor: "pointer" }}
              ml={1}
            >
              Login
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box
        width={"100%"}
        px={isMobile ? 5 : 10}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <GoogleLogin
          size="large"
          text="signup_with"
          onSuccess={(credentialResponse) => {
            handleOpen();
            setGoogleToken(credentialResponse.credential);
          }}
          onError={() => {
            console.log("Signup Failed");
          }}
        />
      </Box>
      <UserTypeModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        type={modelUserType}
        setType={setModelUserType}
      />
    </AuthLayout>
  );
};

export default SignIn;
