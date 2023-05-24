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
import { REQUEST_PASSWORD_RESET, RESET_PASSWORD } from "./queries";

const ForgotPasswordCard = () => {
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
  const [confirmVisible, setConfirmVisible] = React.useState(false);

  const [pinSent, setPinSent] = React.useState(false);

  const isTablet = useMediaQuery("(max-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [requestPasswordReset, { loading }] = useMutation(
    REQUEST_PASSWORD_RESET,
    {
      onCompleted: (data) => {
        toast.success("Pin Sent to your Email");
        setPinSent(true);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const [resetPassword, { loading: resetLoading }] = useMutation(
    RESET_PASSWORD,
    {
      onCompleted: (data) => {
        toast.success("Password Reset Successfully");
        router.push("/login");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSubmit = (data) => {
    if (!pinSent) {
      console.log(data);
      requestPasswordReset({
        variables: {
          email: data.email,
          userType: data.userType,
        },
      });
    } else {
      resetPassword({
        variables: {
          token: data.pin,
          password: data.password,
        },
      });
    }
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
          Forgot Password
        </Typography>
        <Typography variant="h6">Recover your account</Typography>
      </Box>
      <Box
        width={"100%"}
        px={isMobile ? 5 : 10}
        display="flex"
        flexDirection={"column"}
        gap={2}
      >
        {!pinSent && (
          <>
            <ControlledSelect
              control={control}
              name={"userType"}
              required
              defaultValue="Customer"
            >
              <MenuItem value="Customer">Customer</MenuItem>
              <MenuItem value="NurseryOwner">Nursery Owner</MenuItem>
            </ControlledSelect>

            <ControlledTextInput
              control={control}
              name="email"
              required={pinSent ? false : true}
              fullWidth
              placeholder="Email"
              pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
              error={errors.email ? true : false}
              helperText={errors.email && "Please Enter a Valid Email Address"}
            />
          </>
        )}

        {pinSent && (
          <>
            <ControlledTextInput
              control={control}
              name="pin"
              required={pinSent ? true : false}
              fullWidth
              placeholder="Token"
              error={errors.pin ? true : false}
              helperText={errors.pin && "Please Enter a Valid Email Address"}
            />
            <ControlledTextInput
              control={control}
              name="password"
              required={pinSent ? true : false}
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
            <ControlledTextInput
              control={control}
              name="confirm"
              required
              fullWidth
              placeholder="Password"
              type={visible ? "text" : "password"}
              validate={(value) => value === watch("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={(e) => {
                        setConfirmVisible(!confirmVisible);
                      }}
                    >
                      {confirmVisible ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={errors.confirm ? true : false}
              helperText={
                errors.confirm && "Password can't be less than 5 characters"
              }
            />
          </>
        )}
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
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={30} />
          ) : !pinSent ? (
            "Send Pin"
          ) : (
            "Reset Password"
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
              Sign In
            </Typography>
          </Link>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default ForgotPasswordCard;
