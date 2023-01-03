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
import { uploadImage } from "../../services/fileUpload";
import ControlledSelect from "../Generic/ControlledComponents/ControlledSelect";
import ButtonBackground from "../../assets/Pattern/ButtonBackground";

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

const ADD_NURSERY_OWNER = gql`
  mutation RegisterNurseryOwner(
    $credentials: UserRegisterInput!
    $details: NurseryOwnerCreateInput!
  ) {
    registerNurseryOwner(credentials: $credentials, details: $details)
  }
`;

const UPDATE_ADMIN = gql`
  mutation UpdateAdmin(
    $updateAdminId: ID!
    $credentials: UserUpdateInput!
    $details: AdminUpdateInput!
  ) {
    updateAdmin(
      id: $updateAdminId
      credentials: $credentials
      details: $details
    )
  }
`;

const UPDATE_GARDENER = gql`
  mutation UpdateGardener(
    $updateGardenerId: ID!
    $credentials: UserUpdateInput!
    $details: GardenerUpdateInput!
  ) {
    updateGardener(
      id: $updateGardenerId
      credentials: $credentials
      details: $details
    )
  }
`;

const UPDATE_NURSERY_OWNER = gql`
  mutation UpdateNurseryOwner(
    $updateNurseryOwnerId: ID!
    $credentials: UserUpdateInput!
    $details: NurseryOwnerUpdateInput!
  ) {
    updateNurseryOwner(
      id: $updateNurseryOwnerId
      credentials: $credentials
      details: $details
    )
  }
`;

const UPDATE_CUSTOMER = gql`
  mutation UpdateNurseryOwner(
    $updateCustomerId: ID!
    $credentials: UserUpdateInput!
    $details: CustomerUpdateInput!
  ) {
    updateCustomer(
      id: $updateCustomerId
      credentials: $credentials
      details: $details
    )
  }
`;

const AddUser = ({ data = {} }) => {
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

  const [addNurseryOwner] = useMutation(ADD_NURSERY_OWNER, {
    onCompleted: () => {
      alert("User added successfully");
    },
    onError: (error) => {
      alert(error);
    },
  });

  const [updateAdmin] = useMutation(UPDATE_ADMIN, {
    onCompleted: () => {
      alert("User updated successfully");
    },
    onError: (error) => {
      alert(error);
    },
  });

  const [updateGardener] = useMutation(UPDATE_GARDENER, {
    onCompleted: () => {
      alert("User updated successfully");
    },
    onError: (error) => {
      alert(error);
    },
  });

  const [updateNurseryOwner] = useMutation(UPDATE_NURSERY_OWNER, {
    onCompleted: () => {
      alert("User updated successfully");
    },
    onError: (error) => {
      alert(error);
    },
  });

  const [updateCustomer] = useMutation(UPDATE_CUSTOMER, {
    onCompleted: () => {
      alert("User updated successfully");
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
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  React.useEffect(() => {
    const parts = router.pathname.split("/");
    parts[parts.length - 1] == "addUser" ? action : setAction("Edit");
  }, [router, action]);

  React.useEffect(() => {
    if (action == "Edit") {
      setUserType(data.userType);
      console.log(data);
      reset({ ...data, ...data.details });
    }
  }, [data, action, reset]);

  const onSubmit = async (formData) => {
    const image = await uploadImage(formData.image, "user-profile-images");

    if (password === "") {
      delete formData.password;
    }

    if (userType == "Customer") {
      if (action == "Edit") {
        updateCustomer({
          variables: {
            updateCustomerId: data.id,
            credentials: {
              email: formData.email,
              password: formData.password,
              userType: userType,
            },
            details: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              phoneNumber: formData.phoneNumber,
              gender: formData.gender,
              nationality: formData.nationality,
              image: image,
            },
          },
        });
      } else {
        addCustomer({
          variables: {
            credentials: {
              email: formData.email,
              password: formData.password,
              userType: userType,
            },
            details: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              phoneNumber: formData.phoneNumber,
              gender: formData.gender,
              nationality: formData.nationality,
              image: image,
            },
          },
        });
      }
    }

    if (userType == "Gardener") {
      if (action == "Edit") {
        updateGardener({
          variables: {
            updateGardenerId: data.id,
            credentials: {
              email: formData.email,
              password: formData.password,
              userType: userType,
            },
            details: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              phoneNumber: formData.phoneNumber,
              gender: formData.gender,
              nationality: formData.nationality,
              image: image,
              CNIC: formData.CNIC,
            },
          },
        });
      } else {
        addGardener({
          variables: {
            credentials: {
              email: formData.email,
              password: formData.password,
              userType: userType,
            },
            details: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              phoneNumber: formData.phoneNumber,
              gender: formData.gender,
              nationality: formData.nationality,
              image: image,
              CNIC: formData.CNIC,
            },
          },
        });
      }
    }

    if (userType == "Admin") {
      if (action == "Edit") {
        updateAdmin({
          variables: {
            updateAdminId: data.id,
            credentials: {
              email: formData.email,
              password: formData.password,
              userType: userType,
            },
            details: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              phoneNumber: formData.phoneNumber,
              gender: formData.gender,
              nationality: formData.nationality,
              image: image,
              CNIC: formData.CNIC,
            },
          },
        });
      } else {
        addAdmin({
          variables: {
            credentials: {
              email: formData.email,
              password: formData.password,
              userType: userType,
            },
            details: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              phoneNumber: formData.phoneNumber,
              gender: formData.gender,
              nationality: formData.nationality,
              image: image,
              CNIC: formData.CNIC,
            },
          },
        });
      }
    }

    if (userType == "NurseryOwner") {
      if (action == "Edit") {
        updateNurseryOwner({
          variables: {
            updateNurseryOwnerId: data.id,
            credentials: {
              email: formData.email,
              password: formData.password,
              userType: userType,
            },
            details: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              phoneNumber: formData.phoneNumber,
              gender: formData.gender,
              nationality: formData.nationality,
              image: image,
              CNIC: formData.CNIC,
            },
          },
        });
      } else {
        addNurseryOwner({
          variables: {
            credentials: {
              email: formData.email,
              password: formData.password,
              userType: userType,
            },
            details: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              phoneNumber: formData.phoneNumber,
              gender: formData.gender,
              nationality: formData.nationality,
              image: image,
              CNIC: formData.CNIC,
            },
          },
        });
      }
    }
  };

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
              <ControlledSelect
                control={control}
                required
                name="userType"
                id="userType"
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
              </ControlledSelect>
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
                <ButtonBackground />
               
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
