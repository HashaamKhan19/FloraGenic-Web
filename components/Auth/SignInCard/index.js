import { useMutation } from "@apollo/client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  MenuItem,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { GoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/authContext";
import ControlledSelect from "../../Generic/ControlledComponents/ControlledSelect";
import ControlledTextInput from "../../Generic/ControlledComponents/ControlledTextInput";
import AuthLayout from "../AuthLayout";
import { LOGIN_QUERY, LOGIN_WITH_TOKEN_QUERY } from "./queries";

const SignInCard = () => {
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

  const { user, setUser } = React.useContext(AuthContext);
  const router = useRouter();

  const [visible, setVisible] = React.useState(false);

  const isTablet = useMediaQuery("(max-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [login, { data, loading, error }] = useMutation(LOGIN_QUERY, {
    onCompleted: (data) => {
      if (data?.login?.userType === "Customer") {
        if (data?.login?.details) {
          router.push("/customer");
        } else {
          router.push({
            pathname: "/setupProfile",
            query: {
              userType: data.login.userType,
              userID: data.login.id,
            },
          });
        }
      } else if (data?.login?.userType === "NurseryOwner") {
        if (data?.login?.details) {
          router.push("/nursery");
        } else {
          router.push({
            pathname: "/setupProfile",
            query: {
              userType: data.login.userType,
              userID: data.login.id,
            },
          });
        }
      }

      toast.success("Login Successful!");
      setUser(data.login);
      localStorage.setItem("token", data.login.token);
      localStorage.setItem("userType", data.login.userType);
      localStorage.setItem("id", data.login.id);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const [
    loginWithToken,
    { data: dataToken, loading: loadingToken, error: errorToken },
  ] = useMutation(LOGIN_WITH_TOKEN_QUERY, {
    onCompleted: (data) => {
      toast.success("Login Successful!");
      localStorage.setItem("token", data.loginWithToken.token);
      localStorage.setItem("userType", data.loginWithToken.userType);
      localStorage.setItem("id", data.loginWithToken.id);
      setUser(data.loginWithToken.user);

      if (data.loginWithToken.userType === "Customer") {
        router.push("/customer");
      } else if (data.loginWithToken.userType === "NurseryOwner") {
        router.push("/nursery");
      } else if (data.loginWithToken.userType === "Admin") {
        router.push("/admin");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (data) => {
    login({
      variables: {
        credentials: {
          email: data.email,
          password: data.password,
          userType: data.userType,
        },
      },
    });
  };

  const onGoogleLogin = (data) => {
    loginWithToken({
      variables: {
        token: data.credential,
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
          Sign In
        </Typography>
        <Typography variant="h6">Log into your account</Typography>
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
          {/* <MenuItem value="Gardener">Gardener</MenuItem> */}
          <MenuItem value="NurseryOwner">Nursery Owner</MenuItem>
        </ControlledSelect>

        <ControlledTextInput
          control={control}
          name="email"
          required
          fullWidth
          placeholder="Email"
          pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
          error={errors.email ? true : false}
          helperText={errors.email && "Please Enter a Valid Email Address"}
        />
        <ControlledTextInput
          control={control}
          name="password"
          required
          fullWidth
          placeholder="Password"
          type={visible ? "text" : "password"}
          validate={(value) => value.length > 5}
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
        <Link href={"/forgot-password"}>
          <Typography
            color="primary.main"
            sx={{ cursor: "pointer" }}
            variant="subtitle2"
          >
            Forgot Password?
          </Typography>
        </Link>
      </Box>
      <Box width={"100%"} px={isMobile ? 5 : 10}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            py: 2,
            borderRadius: 2,
            bgcolor: "primary.main",
            color: "white",
            mb: 2,
          }}
          type="submit"
          disabled={loading || loadingToken}
        >
          {loading || loadingToken ? <CircularProgress size={30} /> : "Login"}
        </Button>
        <Box display={"flex"} justifyContent="center">
          <Typography variant="h6" textAlign={"center"}>
            Don&apos;t have an account?
          </Typography>
          <Link href={"/register"}>
            <Typography
              variant="h6"
              color="primary.main"
              sx={{ cursor: "pointer" }}
              ml={1}
            >
              Sign Up
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
          onSuccess={(credentialResponse) => {
            onGoogleLogin(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </Box>
    </AuthLayout>
  );
};

export default SignInCard;
