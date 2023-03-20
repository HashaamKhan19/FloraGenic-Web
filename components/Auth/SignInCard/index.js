import { useMutation } from "@apollo/client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React, { useEffect, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ControlledSelect from "../../Generic/ControlledComponents/ControlledSelect";
import ControlledTextInput from "../../Generic/ControlledComponents/ControlledTextInput";
import AuthLayout from "../AuthLayout";
import { LOGIN_QUERY } from "./queries";
import { AuthContext } from "../../../context/authContext";
import { useRouter } from "next/router";

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

  useLayoutEffect(() => {
    const token = user?.token || localStorage.getItem("token");
    const userType = user?.userType || localStorage.getItem("userType");

    if (!token || !userType) {
      localStorage.clear();
    }

    if (userType === "Customer") {
      router.push("/customer");
    } else if (userType === "NurseryOwner") {
      router.push("/nursery");
    } else if (userType === "Admin") {
      router.push("/admin");
    }
  }, []);

  const [login, { data, loading, error }] = useMutation(LOGIN_QUERY, {
    onCompleted: (data) => {
      toast.success("Login Successful!");
      localStorage.setItem("token", data.login.token);
      localStorage.setItem("userType", data.login.userType);
      setUser(data.login.user);

      if (data.login.userType === "Customer") {
        router.push("/customer");
      } else if (data.login.userType === "NurseryOwner") {
        router.push("/nursery");
      } else if (data.login.userType === "Admin") {
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
          <MenuItem value="Gardener">Gardener</MenuItem>
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
      </Box>
      <Box width={"100%"} px={isMobile ? 5 : 10}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            py: 2,
            borderRadius: 20,
            bgcolor: "primary.main",
            color: "white",
            mb: 2,
          }}
          type="submit"
          disabled={loading}
        >
          {loading ? <CircularProgress size={30} /> : "Login"}
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
    </AuthLayout>
  );
};

export default SignInCard;
