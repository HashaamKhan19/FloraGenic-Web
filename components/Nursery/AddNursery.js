import { AlternateEmail } from "@mui/icons-material";
import { InputAdornment, InputLabel, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import React from "react";
import { AddProductIcon } from "../../public/icons/AddProductIcon";

// Controlled Input
import { useForm } from "react-hook-form";
import ControlledSelect from "../Generic/ControlledComponents/ControlledSelect";
import ControlledTelInput from "../Generic/ControlledComponents/ControlledTelInput";
import ControlledTextInput from "../Generic/ControlledComponents/ControlledTextInput";
import ControlledTimePicker from "../Generic/ControlledComponents/ControlledTimePicker";

// GraphQL
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useMutation,
  useQuery,
} from "@apollo/client";
import ButtonBackground from "../../assets/Pattern/ButtonBackground";
import { uploadMultipleImages } from "../../services/fileUpload";
import CityOptions from "../Generic/CityOptions";
import ControlledMultiDropzone from "../Generic/ControlledComponents/ControlledMultiDropzone";
import LoadingScreen from "../Generic/LoadingScreen";
import ActionConfirmationModal from "../Generic/TaskConfirmationModal";

const ADD_NURSERY = gql`
  mutation NurseryCreate($data: NurseryCreateInput!) {
    nurseryCreate(data: $data)
  }
`;

const UPDATE_NURSERY = gql`
  mutation NurseryUpdate($nurseryUpdateId: ID!, $data: NurseryUpdateInput!) {
    nurseryUpdate(id: $nurseryUpdateId, data: $data)
  }
`;

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

const AddNursery = ({ data = {} }) => {
  const [action, setAction] = React.useState("Enter");

  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState(null);

  const [nurseryOwners, setNurseryOwners] = React.useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [nurseryCreate] = useMutation(ADD_NURSERY, {
    client,
    onCompleted: () => {
      setLoading(false);
      setSuccessMessage("Nursery added successfully");
    },
    onError: (error) => {
      setLoading(false);
      setErrorMessage(error);
      console.log(error);
    },
  });

  const [nurseryUpdate] = useMutation(UPDATE_NURSERY, {
    client,
    onCompleted: () => {
      setLoading(false);
      setSuccessMessage("Gardener updated successfully");
    },
    onError: (error) => {
      setLoading(false);
      setErrorMessage(error);
      console.log(error);
    },
  });

  const router = useRouter();

  React.useEffect(() => {
    const parts = router.pathname.split("/");
    parts[parts.length - 1] == "addNursery" ? action : setAction("Edit");
  }, [router, action]);

  React.useEffect(() => {
    if (action == "Edit") {
      console.log({ ...data, nurseryOwner: data.nurseryOwnerID });
      reset({ ...data, nurseryOwner: data.nurseryOwnerID });
    }
  }, [data, action, reset]);

  const onSubmit = async (formData) => {
    setLoading(true);
    setModalOpen(true);
    const images = await uploadMultipleImages(formData.images);
    if (action == "Edit") {
      nurseryUpdate({
        variables: {
          nurseryUpdateId: data.id,
          data: {
            name: formData.name,
            address: formData.address,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            website: formData.website,
            openingHours: formData.openingHours,
            closingHours: formData.closingHours,
            details: formData.details,
            images: images,
          },
        },
      });
    } else {
      nurseryCreate({
        variables: {
          data: {
            name: formData.name,
            address: formData.address + ", " + formData.city,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            website: formData.website,
            openingHours: formData.openingHours,
            closingHours: formData.closingHours,
            details: formData.details,
            images: images,
          },
        },
      });
    }
    router.push("/nursery/viewNurseries");
  };

  return (
    <>
      <div className="flex justify-center">
        <section className="w-[75%] p-4 bg-white rounded-md shadow-md ">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize text-center p-4">
            <AddProductIcon sx={{ mt: 1 }} fontSize="large" />
            {action} Nursery Details
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} sx={{ mt: 5, px: 2 }}>
              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="name"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  {action} Nursery Name
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="name"
                  name="name"
                  placeholder="Jane Nursery"
                  fullWidth
                  autoComplete="Nursery Name"
                  error={errors.name ? true : false}
                  helperText={errors.name && "Nursery Name is required"}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="city"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  Choose Nursery City
                </InputLabel>
                <CityOptions control={control} name="city" />
              </Grid>

              <Grid item xs={12}>
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
                  {action} Nursery Address
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="address"
                  name="address"
                  placeholder="1234 Main St"
                  fullWidth
                  multiline
                  rows={2}
                  autoComplete="Nursery Address"
                  error={errors.address ? true : false}
                  helperText={errors.address && "Nursery Address is required"}
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel
                  htmlFor="description"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  {action} Nursery Description
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="details"
                  name="details"
                  placeholder="Nursery Description/Details"
                  multiline
                  rows={2}
                  fullWidth
                  autoComplete="Nursery Address"
                  error={errors.details ? true : false}
                  helperText={
                    errors.details && "Nursery Description is required"
                  }
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="phoneNumber"
                  variant="standard"
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  {action} Phone Number
                </InputLabel>
                <ControlledTelInput
                  required={false}
                  control={control}
                  defaultCountry="PK"
                  id="phoneNumber"
                  name="phoneNumber"
                  fullWidth
                  autoComplete="phoneNumber"
                  error={errors.phoneNumber ? true : false}
                  helperText={errors.phoneNumber && "Phone Number is required"}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="email"
                  variant="standard"
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  {action} Contact Email
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
                  id="email"
                  name="email"
                  fullWidth
                  autoComplete="email"
                  placeholder="yourEmail@gmail.com"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmail />
                      </InputAdornment>
                    ),
                  }}
                  error={errors.email ? true : false}
                  helperText={errors.email && "Email is required"}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="openingTime"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  {action} Nursery Opening Hours
                </InputLabel>
                <ControlledTimePicker
                  control={control}
                  required
                  name="openingHours"
                  error={errors.openingHours ? true : false}
                  helperText={
                    errors.openingHours && "Opening Hours is required"
                  }
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="closingTime"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  {action} Nursery Closing Hours
                </InputLabel>
                <ControlledTimePicker
                  control={control}
                  required
                  name="closingHours"
                  fullWidth
                  error={errors.closingHours ? true : false}
                  helperText={
                    errors.closingHours && "Closing Hours is required"
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel
                  htmlFor="website"
                  variant="standard"
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  {action} Nursery Website URL
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  id="website"
                  name="website"
                  placeholder="https://www.example.com"
                  pattern={
                    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
                  }
                  fullWidth
                  autoComplete="Website URL"
                  error={errors.website ? true : false}
                  helperText={errors.website && "Website URL is required"}
                />
              </Grid>
              <Grid item xs={12}>
                <ControlledMultiDropzone
                  control={control}
                  getValues={getValues}
                  setValue={setValue}
                  required
                  name="images"
                  id="images"
                  error={errors.images ? true : false}
                  helperText="At least 1 image is required"
                />
              </Grid>

              <Grid item xs={12} textAlign="center" sx={{ mt: 2, p: 2 }}>
                <button
                  type="submit"
                  className="relative px-6 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-floraGreen ease"
                >
                  <ButtonBackground />
                  <AddProductIcon sx={{ mt: 0.6 }} fontSize="medium" />
                  <span className="relative">
                    {action === "Enter" ? "Add" : "Update"} Nursery
                  </span>
                </button>
              </Grid>
            </Grid>
          </form>
        </section>
      </div>
      <ActionConfirmationModal
        open={modalOpen}
        redirectURL="/admin/viewNurseries"
        loading={loading}
        successMessage={successMessage}
        err={errorMessage}
      />
    </>
  );
};

export default AddNursery;
