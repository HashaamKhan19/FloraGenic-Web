import React, { useEffect } from "react";
import TaskConfirmationModal from "../../../components/Generic/TaskConfirmationModal";
import { UsersIcon } from "../../../public/icons/UsersIcon";
import ButtonBackground from "../../../assets/Pattern/ButtonBackground";
import { InputLabel, MenuItem } from "@mui/material";
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
  gql,
  useMutation,
} from "@apollo/client";
import { uploadImage } from "../../../services/fileUpload";

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

const UPDATE_PROFILE = gql`
  mutation UpdateProfile($details: updateProfileInput!) {
    updateProfile(details: $details) {
      firstName
      lastName
      phoneNumber
      gender
      image
    }
  }
`;

const EditProfile = () => {
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
  const userType = user?.userType;

  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState(null);
  const [selected, setSelected] = React.useState([]);

  useEffect(() => {
    reset({
      ...user?.details,
    });
  }, [user]);

  const [updateProfile, { data, error }] = useMutation(UPDATE_PROFILE, {
    client,
    onCompleted: (data) => {
      console.log(data);
      setUser({
        ...user,
        details: {
          ...user.details,
          ...data.updateProfile,
        },
      });
      setSuccessMessage("Profile updated successfully");
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
    const image = await uploadImage(data.image);
    updateProfile({
      variables: {
        details: {
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          gender: data.gender,
          image: image,
        },
      },
    });
  };

  return (
    <>
      <div className="flex justify-center ">
        <section className="w-[75%] p-4 bg-white rounded-md shadow-md ">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize text-center p-4">
            <UsersIcon sx={{ mr: 1 }} fontSize="large" />
            Edit Profile
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} sx={{ mt: 5, px: 2 }}>
              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="firstName"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  Edit First Name
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  name="firstName"
                  placeholder="Jane"
                  id="firstName"
                  fullWidth
                  autoComplete="family-name"
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName && "First name is required"}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="lastName"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  Edit Last Name
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  name="lastName"
                  placeholder="Doe"
                  id="lastName"
                  fullWidth
                  autoComplete="family-name"
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName && "Last name is required"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="phoneNumber"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  Edit Phone Number
                </InputLabel>
                <ControlledTelInput
                  control={control}
                  name="phoneNumber"
                  required
                  defaultCountry="PK"
                  id="phoneNumber"
                  fullWidth
                  autoComplete="phoneNumber"
                  error={errors.phoneNumber ? true : false}
                  helperText={errors.phoneNumber && "Phone number is required"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="gender"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  Select Gender
                </InputLabel>
                <ControlledSelect
                  control={control}
                  required
                  defaultValue="male"
                  id="gender"
                  name="gender"
                  autoComplete="gender"
                  fullWidth
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </ControlledSelect>
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  htmlFor="image"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  Edit Profile Image
                </InputLabel>
                <ControlledDropzone
                  control={control}
                  getValues={getValues}
                  setValue={setValue}
                  // required
                  name="image"
                  id="image"
                  error={errors.image ? true : false}
                  helperText={"Image is required"}
                />
              </Grid>

              <Grid item xs={12} textAlign="center" sx={{ mt: 2, p: 2 }}>
                <button
                  type="submit"
                  className="relative px-6 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-floraGreen ease"
                >
                  <ButtonBackground />

                  <UsersIcon sx={{ mr: 1 }} fontSize="small" />
                  <span className="relative">Edit Profile</span>
                </button>
              </Grid>
            </Grid>
          </form>
        </section>
      </div>
      <TaskConfirmationModal
        open={modalOpen}
        redirectURL="/admin/viewUsers"
        loading={loading}
        successMessage={successMessage}
        err={errorMessage}
      />
    </>
  );
};

export default EditProfile;
