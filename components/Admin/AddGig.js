import { gql, useMutation } from "@apollo/client";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

import ButtonBackground from "../../assets/Pattern/ButtonBackground";
import { CategoryIcon } from "../../public/icons/CategoryIcon";
import { uploadImage } from "../../services/fileUpload";

// Controlled components
import ControlledDropzone from "../Generic/ControlledComponents/ControlledDropzone";
import ControlledTextInput from "../Generic/ControlledComponents/ControlledTextInput";

const ADD_GIG = gql`
  mutation GigCreate($data: GigCreateInput!) {
    gigCreate(data: $data) {
      id
      name
      description
      hiddenStatus
      image
      createdAt
      updatedAt
    }
  }
`;

const UPDATE_GIG = gql`
  mutation GigUpdate($gigUpdateId: ID!, $data: GigUpdateInput!) {
    gigUpdate(id: $gigUpdateId, data: $data)
  }
`;

const AddGig = ({ data = {} }) => {
  const [action, setAction] = React.useState("Enter");
  const [action2, setAction2] = React.useState("Add");

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [addGig] = useMutation(ADD_GIG, {
    onCompleted: () => {
      alert("Gig Added Successfully");
      router.push("/admin/viewCategories");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [updateGig] = useMutation(UPDATE_GIG, {
    onCompleted: () => {
      alert("Gig Updated Successfully");
      router.push("/admin/viewCategories");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = async (formData) => {
    const image = await uploadImage(formData.image, "gig-images");
    if (action == "Edit") {
      updateGig({
        variables: {
          gigUpdateId: data.id,
          data: {
            name: formData.name,
            description: formData.description,
            image: image,
          },
        },
      });
    } else {
      addGig({
        variables: {
          data: {
            name: formData.name,
            description: formData.description,
            image: image,
          },
        },
      });
    }
  };

  React.useEffect(() => {
    const parts = router.pathname.split("/");
    parts[parts.length - 1] == "addGig" ? action : setAction("Edit");
    parts[parts.length - 1] == "addGig" ? action2 : setAction2("Edit");
  }, [router, action, action2]);

  React.useEffect(() => {
    if (action == "Edit") {
      reset(data);
    }
  }, [data, action, reset]);

  return (
    <>
      <div className="flex justify-center">
        <section className="w-[75%] p-4 bg-white rounded-md shadow-md ">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize text-center p-4">
            <CategoryIcon sx={{ mr: 1, mb: 0.3 }} fontSize="large" />
            {action2} Gig
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} sx={{ mt: 5, px: 2 }}>
              <Grid item xs={12}>
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
                  {action} Gig Name
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="name"
                  name="name"
                  fullWidth
                  autoComplete="Gig Name"
                  error={errors.name ? true : false}
                  helperText={errors.name && "Gig Name is required"}
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
                  {action} Gig Description
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="description"
                  name="description"
                  fullWidth
                  multiline
                  rows={2}
                  autoComplete="Gig Description"
                  error={errors.description ? true : false}
                  helperText={
                    errors.description && "Gig Description is required"
                  }
                />
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
                  {action} Gig Image
                </InputLabel>
                <ControlledDropzone
                  control={control}
                  getValues={getValues}
                  setValue={setValue}
                  // required
                  name="image"
                  id="image"
                />
                {errors.image && (
                  <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                    Image is required
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12} textAlign="center" sx={{ mt: 2, p: 2 }}>
                <button class="relative px-6 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-floraGreen ease">
                  <ButtonBackground />
                  <CategoryIcon sx={{ mr: 0.3, mb: 0.2 }} fontSize="small" />
                  <span class="relative">{action2} Gig</span>
                </button>
              </Grid>
            </Grid>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddGig;
