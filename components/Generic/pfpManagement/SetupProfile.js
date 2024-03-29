import {
  Box,
  CircularProgress,
  InputLabel,
  MenuItem,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UsersIcon } from "../../../public/icons/UsersIcon";
import ControlledDropzone from "../ControlledComponents/ControlledDropzone";
import ControlledPatternInput from "../ControlledComponents/ControlledPatternInput";
import ControlledSelect from "../ControlledComponents/ControlledSelect";
import ControlledTelInput from "../ControlledComponents/ControlledTelInput";
import ControlledTextInput from "../ControlledComponents/ControlledTextInput";

// GraphQL
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useMutation,
} from "@apollo/client";
import { uploadImage } from "../../../services/fileUpload";
import { AuthContext } from "../../../context/authContext";
import { toast } from "react-hot-toast";

const SETUP_CUSTOMER_PROFILE = gql`
  mutation CustomerCreate($data: CustomerCreateInput!) {
    customerCreate(data: $data) {
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
  }
`;

const httpLink = new HttpLink({
  uri: "https://floragenic.herokuapp.com/graphql",
  // uri: "http://localhost:4000/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const SETUP_NURSERY_PROFILE = gql`
  mutation NurseryOwnerCreate($data: NurseryOwnerCreateInput!) {
    nurseryOwnerCreate(data: $data) {
      id
      firstName
      lastName
      gender
      nationality
      phoneNumber
      CNIC
      image
      nurseries
      createdAt
      updatedAt
    }
  }
`;

const SetupGardenerProfile = () => {
  const router = useRouter();
  const user = router.query.userType;
  const userID = router.query.userID;

  const { setUser } = useContext(AuthContext);

  const [createCustomerProfile, { data, loading }] = useMutation(
    SETUP_CUSTOMER_PROFILE,
    {
      client: client,
      onCompleted: (data) => {
        toast.success("Profile Created Successfully");
        setUser(data.customerCreate);
        window.location.href = "/customer";
      },
      onError: (error) => {
        toast.error("Something went wrong");
        console.log(error);
      },
    }
  );

  const [setupNurseryProfile, { data: nurseryData, loading: nurseryLoading }] =
    useMutation(SETUP_NURSERY_PROFILE, {
      client,
      onCompleted: (data) => {
        toast.success("Profile Created Successfully");
        setUser(data.nurseryOwnerCreate);
        window.location.href = "/nursery";
      },
      onError: (error) => {
        toast.error("Something went wrong");
        console.log(error);
      },
    });

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageURL = await uploadImage(data.image);

    if (user === "NurseryOwner") {
      setupNurseryProfile({
        variables: {
          data: {
            firstName: data.firstName,
            gender: data.gender,
            image: imageURL,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
            nationality: data.nationality,
            CNIC: data.CNIC,
          },
        },
      });
    } else {
      createCustomerProfile({
        variables: {
          data: {
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
            gender: data.gender,
            nationality: data.nationality,
            image: imageURL,
          },
        },
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 5,
      }}
    >
      <Paper
        sx={{
          padding: 5,
          boxShadow: 5,
          width: "80%",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-semibold text-gray-800 capitalize text-center p-4">
            <UsersIcon sx={{ mr: 1 }} fontSize="large" />
            Setup Profile for {user}
          </h1>
          <Grid container spacing={3} mt={2}>
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
                Enter First Name
              </InputLabel>
              <ControlledTextInput
                control={control}
                required
                id="firstName"
                name="firstName"
                fullWidth
                autoComplete="family-name"
                error={errors.firstName ? true : false}
                helperText={errors.firstName && "First Name is required"}
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
                Enter Last Name
              </InputLabel>
              <ControlledTextInput
                control={control}
                required
                id="lastName"
                name="lastName"
                fullWidth
                autoComplete="family-name"
                error={errors.lastName ? true : false}
                helperText={errors.lastName && "Last Name is required"}
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
                Enter Phone Number
              </InputLabel>
              <ControlledTelInput
                control={control}
                required
                defaultCountry="PK"
                id="phoneNumber"
                name="phoneNumber"
                fullWidth
                autoComplete="phoneNumber"
                error={errors.phoneNumber ? true : false}
                helperText={errors.phoneNumber && "Phone Number is required"}
              />
            </Grid>

            {user !== "Customer" && (
              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="CNIC"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  Enter CNIC
                </InputLabel>
                <ControlledPatternInput
                  control={control}
                  required
                  format="#####-#######-#"
                  pattern={/^[0-9]{5}-[0-9]{7}-[0-9]$/}
                  id="CNIC"
                  name="CNIC"
                  fullWidth
                  autoComplete="CNIC"
                  error={errors.CNIC ? true : false}
                  helperText={errors.CNIC && "CNIC is required"}
                />
              </Grid>
            )}
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
                Gender
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
            <Grid item xs={12} sm={user !== "Customer" ? 6 : 12}>
              <InputLabel
                htmlFor="nationality"
                variant="standard"
                required
                sx={{
                  mb: 1.5,
                  color: "text.primary",
                  "& span": { color: "error.light" },
                }}
              >
                Nationality
              </InputLabel>
              <ControlledSelect
                control={control}
                required
                defaultValue="pakistan"
                id="nationality"
                name="nationality"
                autoComplete="Pakistan"
                fullWidth
              >
                <MenuItem value="pakistan">Pakistan</MenuItem>
              </ControlledSelect>
            </Grid>
            {/* <Grid item xs={12}>
              <InputLabel
                htmlFor="address"
                variant="standard"
                required
                sx={{
                  mb: 1.5,
                  color: "text.primary",
                  "& span": { color: "error.light" },
                }}
              >
                Enter Address
              </InputLabel>
              <ControlledTextInput
                control={control}
                required
                id="address"
                name="address"
                fullWidth
                autoComplete="address"
                error={errors.address ? true : false}
                helperText={errors.address && "Address is required"}
              />
            </Grid> */}
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
                Enter Profile Image
              </InputLabel>
              <ControlledDropzone
                control={control}
                getValues={getValues}
                setValue={setValue}
                // required
                name="image"
                id="image"
              />
            </Grid>
            <Grid item xs={12} textAlign="center" sx={{ mt: 2, p: 2 }}>
              <button className="relative px-6 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-floraGreen ease">
                <span className="absolute bottom-0 left-0 h-full -ml-2">
                  <svg
                    viewBox="0 0 487 487"
                    className="w-auto h-full opacity-100 object-stretch"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                      fill="#FFF"
                      fillRule="nonzero"
                      fillOpacity=".1"
                    ></path>
                  </svg>
                </span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                  <svg
                    viewBox="0 0 487 487"
                    className="object-cover w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                      fill="#FFF"
                      fillRule="nonzero"
                      fillOpacity=".1"
                    ></path>
                  </svg>
                </span>
                <UsersIcon sx={{ mr: 1 }} fontSize="small" />

                <span className="relative">
                  {loading || nurseryLoading ? (
                    <CircularProgress size={20} />
                  ) : (
                    `Add ${user}`
                  )}
                </span>
              </button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default SetupGardenerProfile;
