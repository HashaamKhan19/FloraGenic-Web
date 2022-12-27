import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { AddProductIcon } from "../../public/icons/AddProductIcon";
import { AlternateEmail } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { MuiTelInput } from "mui-tel-input";
import TimeChooser from "../Generic/TimeChooser";

// Controlled Input
import { useForm } from "react-hook-form";
import ControlledTextInput from "../Generic/ControlledComponents/ControlledTextInput";
import ControlledTelInput from "../Generic/ControlledComponents/ControlledTelInput";
import ControlledSelect from "../Generic/ControlledComponents/ControlledSelect";
import ControlledTimePicker from "../Generic/ControlledComponents/ControlledTimePicker";

// GraphQL
import { useMutation, gql, useQuery } from "@apollo/client";
import CityOptions from "../Generic/CityOptions";
import Loader from "../Generic/Loader";

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

const GET_NURSERY_OWNERS = gql`
  query NurseryOwners {
    nurseryOwners {
      id
      firstName
      lastName
      phoneNumber
      userDetails {
        email
      }
    }
  }
`;

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const AddNursery = ({ data = {} }) => {
  const [action, setAction] = React.useState("Enter");

  const [nurseryOwners, setNurseryOwners] = React.useState([]);

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [nurseryCreate] = useMutation(ADD_NURSERY, {
    onCompleted: () => {
      alert("Nursery Added");
    },
    onError: (error) => {
      console.log(error);
      alert(error.message);
    },
  });

  const [nurseryUpdate] = useMutation(UPDATE_NURSERY, {
    onCompleted: () => {
      alert("Nursery Added");
    },
    onError: (error) => {
      console.log(error);
      alert(error.message);
    },
  });

  const { loading, error } = useQuery(GET_NURSERY_OWNERS, {
    onCompleted: (data) => {
      setNurseryOwners(data.nurseryOwners);
      console.log(data);
    },
    onError: (error) => {
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

  const [quantity, setQuantity] = React.useState(1);
  const [tagsValue, setTagValue] = React.useState("");
  const [tagsKey, setTagKey] = React.useState(0);
  const [tags, setTag] = React.useState([]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  const onSubmit = (formData) => {
    if (action == "Edit") {
      nurseryUpdate({
        variables: {
          nurseryUpdateId: data.id,
          data: {
            nurseryOwnerID: formData.nurseryOwner,
            name: formData.name,
            address: formData.address + ", " + formData.city,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            website: formData.website,
            openingHours: formData.openingHours,
            closingHours: formData.closingHours,
            details: formData.details,
          },
        },
      });
    } else {
      nurseryCreate({
        variables: {
          data: {
            nurseryOwnerID: formData.nurseryOwner,
            name: formData.name,
            address: formData.address + ", " + formData.city,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            website: formData.website,
            openingHours: formData.openingHours,
            closingHours: formData.closingHours,
            details: formData.details,
          },
        },
      });
    }
    router.push("/admin/viewNurseries");
  };

  const handleTagAdder = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      tags.push({
        key: tagsKey,
        label: tagsValue,
      });
      setTagKey(tagsKey + 1);
    }
  };

  //   const [chipData, setChipData] = React.useState([{ key: 0, label: tags }])

  const handleDelete = (chipToDelete) => () => {
    setTag((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  if (loading) return <Loader />;
  if (error) return <p>{"Error :("}</p>;

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
              <Grid item xs={12}>
                <InputLabel
                  htmlFor="nurseryOwner"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  Nursery Owner
                </InputLabel>
                <ControlledSelect
                  control={control}
                  required
                  id="nurseryOwner"
                  name="nurseryOwner"
                  autoComplete="nurseryOwner"
                  fullWidth
                  error={errors.nurseryOwner ? true : false}
                  helperText={
                    errors.nurseryOwner && "Please select a nursery owner"
                  }
                >
                  {nurseryOwners.map((nurseryOwner) => (
                    <MenuItem value={nurseryOwner.id} key={nurseryOwner.id}>
                      {nurseryOwner.firstName} {nurseryOwner.lastName} {"("}
                      {nurseryOwner.userDetails.email}
                      {")"}
                    </MenuItem>
                  ))}
                </ControlledSelect>
              </Grid>

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
                  {action} Email
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
                  id="email"
                  name="email"
                  fullWidth
                  autoComplete="email"
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
                  pattern={
                    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
                  }
                  fullWidth
                  autoComplete="Website URL"
                  error={errors.website ? true : false}
                  helperText={errors.website && "Website URL is required"}
                />
              </Grid>

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
                        fillOpacity=".1"
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
                        fillOpacity=".1"
                      ></path>
                    </svg>
                  </span>
                  <AddProductIcon sx={{ mt: 0.6 }} fontSize="medium" />
                  <span class="relative">
                    {action === "Enter" ? "Add" : "Update"} Nursery
                  </span>
                </button>
              </Grid>
            </Grid>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddNursery;
