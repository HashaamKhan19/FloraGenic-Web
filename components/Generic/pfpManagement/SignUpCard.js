import React, { useState } from "react";
import sideImage from "../../../public/images/SignIn-removebg.jpg";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import mainLogo from "../../../public/images/Logo.png";
import { useRouter } from "next/router";

// Forms
import { useForm, Controller } from "react-hook-form";
import ControlledTextField from "../../Generic/ControlledComponents/ControlledTextInput";
import ControlledSelect from "../../Generic/ControlledComponents/ControlledSelect";

// GraphQL
import { useMutation, gql } from "@apollo/client";

const SIGN_UP = gql`
  mutation Register($credentials: UserRegisterInput!) {
    register(credentials: $credentials)
  }
`;

const SignUpCard = () => {
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const router = useRouter();

  const [signUp, { data, loading, error }] = useMutation(SIGN_UP, {
    onCompleted: () => {
      router.push("/signIn");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    signUp({
      variables: {
        credentials: {
          email: data.email,
          password: data.password,
          userType: data.user,
        },
      },
    });
  };

  return (
    <div className="flex flex-row">
      {/* Image Container */}
      <div className="w-1/2">
        <Image
          className="h-screen lg:block xs:hidden"
          alt="Plant in a pot"
          src={sideImage}
        />
      </div>

      {/* Form Container */}
      <div className="w-1/2 px-24 py-[60px]">
        <form
          className="bg-emerald-50 px-6 py-8 flex flex-col rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Select Component */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <Link href={"/"}>
                <Image
                  src={mainLogo}
                  className="w-12 h-12"
                  alt="FloraGenic Logo"
                />
              </Link>
              <h1 className="text-3xl font-bold flex items-end ml-2">
                Sign Up
              </h1>
            </div>
            {/* User Selection */}
            <FormControl sx={{ minWidth: 140 }} size="small">
              <InputLabel id="demo-select-small">User</InputLabel>
              <ControlledSelect
                control={control}
                name="user"
                defaultValue="Customer"
                required
                labelId="demo-select-small"
                id="demo-select-small"
                label="Age"
              >
                <MenuItem value="Customer">Customer</MenuItem>
                <MenuItem value="Gardener">Gardener</MenuItem>
                <MenuItem value="Nursery Owner">Nursery Owner</MenuItem>
              </ControlledSelect>
            </FormControl>
          </div>

          {/* Inputs */}
          <ControlledTextField
            control={control}
            name="email"
            required
            pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
            label="Email Address"
            autoComplete="email"
            variant="outlined"
            fullWidth
            size="medium"
            error={errors.email ? true : false}
            helperText={errors.email && "Please Enter a Valid Email Address"}
            sx={{ marginTop: 3 }}
          />
          <ControlledTextField
            control={control}
            name="password"
            minLength={5}
            margin="dense"
            label="Password"
            type={visible ? "text" : "password"}
            variant="outlined"
            fullWidth
            size="medium"
            sx={{ marginTop: 2 }}
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

          <ControlledTextField
            control={control}
            name="confirmPassword"
            minLength={5}
            margin="dense"
            required
            validate={(value) => value === getValues("password")}
            label="Confirm Password"
            type={confirmVisible ? "text" : "password"}
            variant="outlined"
            fullWidth
            size="medium"
            sx={{ marginTop: 2 }}
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
            error={errors.confirmPassword ? true : false}
            helperText={
              errors.confirmPassword &&
              "Passwords do not match. Please try again."
            }
          />

          {error && (
            <div className="text-red-500 text-sm mt-2">
              Error: {error.message}
            </div>
          )}

          {/* Buttons */}
          <div className="mt-3">
            <a className="text-sm font-semibold text-emerald-600 hover:cursor-pointer hover:text-emerald-700 transition-all ease-in">
              Forgot Password?
            </a>
          </div>

          <div className="mt-4">
            <button
              className="bg-emerald-600 hover:bg-emerald-700 transition-all ease-in w-full py-2 rounded-lg text-white"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Sign in options */}

        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0">
            Or Continue With
          </p>
        </div>

        <div className="flex flex-row w-full justify-center mt-2">
          <a className="w-20 h-10 bg-slate-100 rounded-full hover:bg-slate-200 hover:cursor-pointer">
            <BsFacebook
              className="flex w-8 h-8 ml-6 mt-1 p-1"
              style={{ color: "blue" }}
            />
          </a>
          <a className="w-20 h-10 bg-slate-100 ml-10 rounded-full hover:bg-slate-200 hover:cursor-pointer">
            <FcGoogle className="w-8 h-8 ml-6 mt-1 p-1" />
          </a>
        </div>
        <p className="text-center text-black font-poppins text-sm mt-6">
          Already have an account?{" "}
          <Link
            className="text-emerald-600 font-poppins font-bold hover:cursor-pointer hover:text-emerald-700"
            href="/signIn"
          >
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpCard;
