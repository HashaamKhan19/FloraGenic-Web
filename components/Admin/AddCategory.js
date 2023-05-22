import { InputLabel, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import React from "react";
import { CategoryIcon } from "../../public/icons/CategoryIcon";

// Controlled components
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useMutation,
} from "@apollo/client";
import { useForm } from "react-hook-form";
import ButtonBackground from "../../assets/Pattern/ButtonBackground";
import { uploadImage } from "../../services/fileUpload";
import ControlledDropzone from "../Generic/ControlledComponents/ControlledDropzone";
import ControlledTextInput from "../Generic/ControlledComponents/ControlledTextInput";
import ActionConfirmationModal from "../Modal/ActionConfirmationModal";
import TaskConfirmationModal from "../Generic/TaskConfirmationModal";

const ADD_CATEGORY = gql`
  mutation CategoryCreate($data: CategoryCreateInput!) {
    categoryCreate(data: $data) {
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

const UPDATE_CATEGORY = gql`
  mutation CategoryUpdate($categoryUpdateId: ID!, $data: CategoryUpdateInput!) {
    categoryUpdate(id: $categoryUpdateId, data: $data)
  }
`;

const AddCategory = ({ data = {} }) => {
  const [action, setAction] = React.useState("Enter");
  const [action2, setAction2] = React.useState("Add");

  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState(null);

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

  const [addCategory] = useMutation(ADD_CATEGORY, {
    client,
    onCompleted: () => {
      setLoading(false);
      setSuccessMessage("Category added successfully");
    },
    onError: (error) => {
      setLoading(false);
      setErrorMessage(error);
    },
  });

  const [updateCategory] = useMutation(UPDATE_CATEGORY, {
    client,
    onCompleted: () => {
      setLoading(false);
      setSuccessMessage("Category updated successfully");
    },
    onError: (error) => {
      setLoading(false);
      setErrorMessage(error);
    },
  });

  const onSubmit = async (formData) => {
    setLoading(true);
    setModalOpen(true);
    const image = await uploadImage(formData.image, "category-images");
    if (action == "Edit") {
      updateCategory({
        variables: {
          categoryUpdateId: data.id,
          data: {
            name: formData.name,
            description: formData.description,
            image: image,
          },
        },
      });
    } else {
      addCategory({
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
    parts[parts.length - 1] == "addCategory" ? action : setAction("Edit");
    parts[parts.length - 1] == "addCategory" ? action2 : setAction2("Edit");
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
            {action2} Category
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
                  {action} Category Name
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="name"
                  name="name"
                  placeholder="product"
                  fullWidth
                  autoComplete="Category Name"
                  error={errors.name ? true : false}
                  helperText={errors.name && "Category Name is required"}
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
                  {action} Category Description
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="description"
                  name="description"
                  placeholder="enter category description here"
                  fullWidth
                  multiline
                  rows={2}
                  autoComplete="Category Description"
                  error={errors.description ? true : false}
                  helperText={
                    errors.description && "Category Description is required"
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
                  {action} Profile Image
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
                <button className="relative px-6 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-floraGreen ease">
                  <ButtonBackground />
                  <CategoryIcon sx={{ mr: 0.3, mb: 0.2 }} fontSize="small" />
                  <span className="relative">{action2} Category</span>
                </button>
              </Grid>
            </Grid>
          </form>
        </section>
      </div>
      <TaskConfirmationModal
        open={modalOpen}
        redirectURL="/admin/viewCategories"
        loading={loading}
        successMessage={successMessage}
        err={errorMessage}
      />
    </>
  );
};

export default AddCategory;
