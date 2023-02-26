import { gql, useMutation } from "@apollo/client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import mainLogo from "../../../public/images/Logo.png";
import sideImage from "../../../public/images/SignIn-removebg.jpg";
import ControlledSelect from "../ControlledComponents/ControlledSelect";
import ControlledTextInput from "../ControlledComponents/ControlledTextInput";

const LOGIN_QUERY = gql`
  mutation LoginCustomer($credentials: UserLoginInput!) {
    loginCustomer(credentials: $credentials) {
      id
      email
      userType
      bannedStatus
      token
      details {
        ... on Customer {
          id
          firstName
          lastName
          nationality
          phoneNumber
          gender
          image
          createdAt
          updatedAt
        }
        ... on Admin {
          id
          firstName
          lastName
          gender
          nationality
          phoneNumber
          CNIC
          image
          createdAt
          updatedAt
        }
        ... on Gardener {
          id
          firstName
          lastName
          gender
          nationality
          phoneNumber
          CNIC
          image
          createdAt
          updatedAt
        }
        ... on NurseryOwner {
          id
          firstName
          lastName
          gender
          nationality
          phoneNumber
          CNIC
          image
          createdAt
          updatedAt
        }
      }
    }
  }
`;

const SignInCard = () => {
  const [visible, setVisible] = useState(false);

  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [loginUser, { data, loading, error }] = useMutation(LOGIN_QUERY, {
    onCompleted: (data) => {
      console.log(data);
      localStorage.setItem("token", data.loginCustomer.token);
      if (data.loginCustomer.details) {
        router.push("/admin");
      } else {
        router.push({
          pathname: "/setupProfile",
          query: {
            userType: data.loginCustomer.userType,
            userID: data.loginCustomer.id,
          },
        });
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data) => {
    loginUser({
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
          alt="Plant image"
          src={sideImage}
        />
      </div>

      {/* Form Container */}
      <div className="w-1/2 px-24 py-24">
        <form
          className="bg-emerald-50 px-6 py-10 flex flex-col rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Select Component */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <Link href={"/"}>
                <Image
                  src={mainLogo}
                  alt="FloraGenic Logo"
                  className="w-12 h-12"
                />
              </Link>
              <h1 className="text-3xl font-bold flex items-end ml-2">Login</h1>
            </div>
            {/* User Selection */}
            <FormControl sx={{ minWidth: 140 }} size="small">
              <InputLabel id="demo-select-small">User</InputLabel>
              <ControlledSelect
                name="user"
                control={control}
                defaultValue="Customer"
                required
                labelId="demo-select-small"
                id="demo-select-small"
                label="Age"
              >
                <MenuItem value={"Customer"}>Customer</MenuItem>
                <MenuItem value={"Gardener"}>Gardener</MenuItem>
                <MenuItem value={"NurseryOwner"}>Nursery Owner</MenuItem>
              </ControlledSelect>
            </FormControl>
          </div>
          {/* Inputs */}
          <ControlledTextInput
            control={control}
            name="email"
            required
            pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
            margin="normal"
            label="Email Address"
            autoComplete="email"
            variant="outlined"
            fullWidth
            size="medium"
            error={errors.email ? true : false}
            helperText={errors.email && "Please Enter a Valid Email Address"}
            sx={{ marginTop: 3 }}
          />

          <ControlledTextInput
            control={control}
            name="password"
            required
            minLength={5}
            margin="normal"
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
          {loading && (
            <p className="text-green-500 text-sm my-3">
              Logging in, Please Wait...
            </p>
          )}
          {error && (
            <p className="text-red-500 text-sm my-3">Error: {error.message}</p>
          )}
          {data && data.loginCustomer && data.loginCustomer.bannedStatus && (
            <p className="text-red-500 text-sm my-3">
              Error: Your account has been banned. Please contact admin.
            </p>
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
              Sign In
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
          Don&apos;t have an account yet?{" "}
          <Link
            className="text-emerald-600 font-poppins font-bold hover:cursor-pointer hover:text-emerald-700"
            href="/signUp"
          >
            Register for free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInCard;
