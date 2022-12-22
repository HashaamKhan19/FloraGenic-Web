import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, InputLabel, Select, MenuItem } from "@mui/material";
import AddAdmin from "./AddAdmin";
import AddCustomer from "./AddCustomer";
import AddGardener from "./AddGardener";
import AddNurseryOwner from "./AddNurseryOwner";
import { UsersIcon } from "../../public/icons/UsersIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation, gql } from "@apollo/client";

const ADD_CUSTOMER = gql`
  mutation RegisterCustomer(
    $credentials: UserRegisterInput!
    $details: CustomerCreateInput!
  ) {
    registerCustomer(credentials: $credentials, details: $details)
  }
`;

const ADD_GARDENER = gql`
  mutation RegisterGardener(
    $credentials: UserRegisterInput!
    $details: GardenerCreateInput!
  ) {
    registerGardener(credentials: $credentials, details: $details)
  }
`;

const ADD_ADMIN = gql`
  mutation RegisterAdmin(
    $credentials: UserRegisterInput!
    $details: AdminCreateInput!
  ) {
    registerAdmin(credentials: $credentials, details: $details)
  }
`;

const AddUser = () => {
  const [userType, setUserType] = React.useState("Customer");
  const [action, setAction] = React.useState("Add");

  const [addCustomer] = useMutation(ADD_CUSTOMER, {
    onCompleted: () => {
      alert("Customer added successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [addGardener] = useMutation(ADD_GARDENER, {
    onCompleted: () => {
      alert("Customer added successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [addAdmin] = useMutation(ADD_ADMIN, {
    onCompleted: () => {
      alert("User added successfully");
    },
    onError: (error) => {
      alert(error);
    },
  });

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  React.useEffect(() => {
    const parts = router.pathname.split("/");
    parts[parts.length - 1] == "addUser" ? action : setAction("Edit");
  }, [router]);

  const onSubmit = (data) => {
    if (userType == "Customer") {
      addCustomer({
        variables: {
          credentials: {
            email: data.email,
            password: data.password,
            userType: userType,
          },
          details: {
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
            gender: data.gender,
            nationality: data.nationality,
            image: data.image.preview,
          },
        },
      });
    }

    if (userType == "Gardener") {
      addGardener({
        variables: {
          credentials: {
            email: data.email,
            password: data.password,
            userType: userType,
          },
          details: {
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
            // gender: data.gender,
            nationality: data.nationality,
            image: data.image.preview,
            CNIC: data.CNIC,
          },
        },
      });
    }

    if (userType == "Admin") {
      addAdmin({
        variables: {
          credentials: {
            email: data.email,
            password: data.password,
            userType: userType,
          },
          details: {
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
            // gender: data.gender,
            nationality: data.nationality,
            image: data.image.preview,
            CNIC: data.CNIC,
          },
        },
      });
    }
  };

  console.log(errors);

  return (
    <div className="flex justify-center">
      <section className="w-[75%] p-4 bg-white rounded-md shadow-md ">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize text-center p-4">
          <UsersIcon sx={{ mr: 1 }} fontSize="large" />
          {action} {userType}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3} sx={{ mt: 5, px: 2 }}>
            <Grid item xs={12}>
              <InputLabel
                htmlFor="userType"
                variant="standard"
                required
                sx={{
                  mb: 1.5,
                  color: "text.primary",
                  "& span": { color: "error.light" },
                }}
              >
                User Category
              </InputLabel>
              <Select
                id="userType"
                name="userType"
                autoComplete="userType"
                defaultValue={"Customer"}
                fullWidth
              >
                <MenuItem
                  value={"Customer"}
                  onClick={() => {
                    setUserType("Customer");
                  }}
                >
                  Customer
                </MenuItem>
                <MenuItem
                  value={"Gardener"}
                  onClick={() => {
                    setUserType("Gardener");
                  }}
                >
                  Gardener
                </MenuItem>
                <MenuItem
                  value={"NurseryOwner"}
                  onClick={() => {
                    setUserType("NurseryOwner");
                  }}
                >
                  Nursery Owner
                </MenuItem>
                <MenuItem
                  value={"Admin"}
                  selected="true"
                  onClick={() => {
                    setUserType("Admin");
                  }}
                >
                  Admin
                </MenuItem>
              </Select>
            </Grid>

            {userType == "Admin" ? (
              <AddAdmin
                control={control}
                getValues={getValues}
                setValue={setValue}
                errors={errors}
              />
            ) : userType == "Gardener" ? (
              <AddGardener
                control={control}
                getValues={getValues}
                setValue={setValue}
                errors={errors}
              />
            ) : userType == "NurseryOwner" ? (
              <AddNurseryOwner
                control={control}
                getValues={getValues}
                setValue={setValue}
                errors={errors}
              />
            ) : (
              <AddCustomer
                control={control}
                getValues={getValues}
                setValue={setValue}
                errors={errors}
              />
            )}

            <Grid item xs={12} textAlign="center" sx={{ mt: 2, p: 2 }}>
              <button
                type="submit"
                class="relative px-6 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-floraGreen ease"
              >
                <span class="absolute bottom-0 left-0 h-full -ml-2">
                  <svg
                    viewBox="0 0 487 487"
                    class="w-auto h-full opacity-100 object-stretch"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                      fill="#FFF"
                      fill-rule="nonzero"
                      fill-opacity=".1"
                    ></path>
                  </svg>
                </span>
                <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                  <svg
                    viewBox="0 0 487 487"
                    class="object-cover w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                      fill="#FFF"
                      fill-rule="nonzero"
                      fill-opacity=".1"
                    ></path>
                  </svg>
                </span>
                <UsersIcon sx={{ mr: 1 }} fontSize="small" />
                <span class="relative">
                  {action} {userType}
                </span>
              </button>
            </Grid>
          </Grid>
        </form>
      </section>
    </div>
  );
};

export default AddUser;
