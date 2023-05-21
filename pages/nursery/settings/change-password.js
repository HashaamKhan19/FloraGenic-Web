import React, { useEffect } from "react";
import TaskConfirmationModal from "../../../components/Generic/TaskConfirmationModal";
import { UsersIcon } from "../../../public/icons/UsersIcon";
import ButtonBackground from "../../../assets/Pattern/ButtonBackground";
import {
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
} from "@mui/material";
import AddAdmin from "../../../components/Admin/AddAdmin";
import AddGardener from "../../../components/Admin/AddGardener";
import AddNurseryOwner from "../../../components/Admin/AddNurseryOwner";
import AddCustomer from "../../../components/Admin/AddCustomer";
import ControlledSelect from "../../../components/Generic/ControlledComponents/ControlledSelect";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2";

import { AuthContext } from "../../../context/authContext";
import ControlledTextInput from "../../../components/Generic/ControlledComponents/ControlledTextInput";
import ControlledTelInput from "../../../components/Generic/ControlledComponents/ControlledTelInput";
import ControlledDropzone from "../../../components/Generic/ControlledComponents/ControlledDropzone";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  useMutation,
} from "@apollo/client";
import { UPDATE_PASSWORD, UPDATE_PROFILE } from "./query";
import { uploadImage } from "../../../services/fileUpload";
import { Key, Visibility, VisibilityOff } from "@mui/icons-material";

const httpLink = new HttpLink({
  uri: "https://floragenic.herokuapp.com/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");

  operation.setContext({
    headers: {
      Authorization: token ? `${token}` : "",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const ChangePassword = () => {
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

  const { user } = React.useContext(AuthContext);
  const userType = user?.userType;

  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState(null);
  const [selected, setSelected] = React.useState([]);

  const [showPassword, setShowPassword] = React.useState("password");
  const [showNewPassword, setShowNewPassword] = React.useState("password");
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState("password");

  useEffect(() => {
    reset({
      email: user?.email,
      ...user?.details,
    });
  }, [user]);

  const [changePassword, { data, error }] = useMutation(UPDATE_PASSWORD, {
    client,
    onCompleted: (data) => {
      console.log(data);
      setSuccessMessage("Password updated successfully");
      setModalOpen(true);
    },
    onError: (error) => {
      console.log(error);
      setErrorMessage(error.message);
      setModalOpen(true);
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    changePassword({
      variables: {
        oldPassword: data.password,
        newPassword: data.newPassword,
      },
    });
  };

  return (
    <>
      <div className="flex justify-center ">
        <section className="w-[75%] p-4 bg-white rounded-md shadow-md ">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize text-center p-4">
            <Key sx={{ mr: 1 }} fontSize="large" />
            Change Password
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} sx={{ mt: 5, px: 2 }}>
              <Grid item xs={12}>
                <InputLabel
                  htmlFor="password"
                  variant="standard"
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  Current Password
                </InputLabel>
                <ControlledTextInput
                  control={control}
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
                          onClick={() =>
                            setShowPassword(
                              showPassword == "password" ? "text" : "password"
                            )
                          }
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
                    errors.password &&
                    "Password must be at least 5 characters long"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  htmlFor="newPassword"
                  variant="standard"
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  New Password
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  minLength={5}
                  id="newPassword"
                  name="newPassword"
                  type={showNewPassword}
                  fullWidth
                  autoComplete="newPassword"
                  placeholder="••••••••••"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowNewPassword(
                              showNewPassword == "password"
                                ? "text"
                                : "password"
                            )
                          }
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          {showNewPassword == "password" ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={errors.newPassword ? true : false}
                  helperText={
                    errors.newPassword &&
                    "Password must be at least 5 characters long"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  htmlFor="confirm"
                  variant="standard"
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  Confirm New Password
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  minLength={5}
                  id="confirm"
                  name="confirm"
                  type={showConfirmPassword}
                  fullWidth
                  autoComplete="password"
                  placeholder="••••••••••"
                  validate={(value) => value === getValues("newPassword")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(
                              showConfirmPassword == "password"
                                ? "text"
                                : "password"
                            )
                          }
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
                  error={errors.confirm ? true : false}
                  helperText={
                    errors.confirm && "Password and confirm password must match"
                  }
                />
              </Grid>

              <Grid item xs={12} textAlign="center" sx={{ mt: 2, p: 2 }}>
                <button
                  type="submit"
                  className="relative px-6 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-floraGreen ease"
                >
                  <ButtonBackground />

                  <UsersIcon sx={{ mr: 1 }} fontSize="small" />
                  <span className="relative">Change Password</span>
                </button>
              </Grid>
            </Grid>
          </form>
        </section>
      </div>
      <TaskConfirmationModal
        open={modalOpen}
        setOpen={setModalOpen}
        redirectURL="/admin/viewUsers"
        loading={loading}
        successMessage={successMessage}
        err={errorMessage}
      />
    </>
  );
};

export default ChangePassword;
