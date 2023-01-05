import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { AddProductIcon } from "../../public/icons/AddProductIcon";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Link from "next/link";
import { useRouter } from "next/router";
import { InputAdornment } from "@mui/material";
//Controlled components
import { useForm } from "react-hook-form";
import ControlledTextInput from "../Generic/ControlledComponents/ControlledTextInput";
import ControlledDropzone from "../Generic/ControlledComponents/ControlledDropzone";
import ControlledSelect from "../Generic/ControlledComponents/ControlledSelect";
import { gql, useMutation, useQuery } from "@apollo/client";
import Loader from "../Generic/Loader";
import MultiDropzone from "../Generic/MultiDropzone";
import ControlledMultiDropzone from "../Generic/ControlledComponents/ControlledMultiDropzone";
import ButtonBackground from "../../assets/Pattern/ButtonBackground";
import { uploadMultipleImages } from "../../services/fileUpload";
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const GET_CATEGORIES = gql`
  query Categories {
    categories {
      id
      name
    }
  }
`;

const GET_NURSERIES = gql`
  query Nurseries {
    nurseries {
      id
      name
    }
  }
`;

const CREATE_PRODUCT = gql`
  mutation Mutation($data: ProductCreateInput!) {
    productCreate(data: $data) {
      id
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation ProductUpdate($productUpdateId: ID!, $data: ProductUpdateInput!) {
    productUpdate(id: $productUpdateId, data: $data)
  }
`;

const AddProduct = ({ data = {} }) => {
  const [action, setAction] = React.useState("Enter");
  const [action2, setAction2] = React.useState("Add");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    watch,
    clearErrors,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      tags: [],
    },
  });

  React.useEffect(() => {
    const parts = router.pathname.split("/");
    parts[parts.length - 1] == "addProduct" ? action : setAction("Edit");
    parts[parts.length - 1] == "addProduct" ? action2 : setAction2("Edit");
  }, [router, action, action2]);

  React.useEffect(() => {
    if (action == "Edit") {
      reset({ ...data, nursery: data.nursery.id, category: data.category.id });
    }
  }, [data, action, reset]);

  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useQuery(GET_CATEGORIES);
  const {
    data: nurseryData,
    loading: nurseryLoading,
    error: nurseryError,
  } = useQuery(GET_NURSERIES);

  const [createProduct, { loading: loading3, error: error3 }] = useMutation(
    CREATE_PRODUCT,
    {
      onCompleted: () => {
        alert("Product created successfully");
        router.push("/admin/viewProducts");
      },
      onError: (error) => {
        alert(error.message);
      },
    }
  );

  const [updateProduct, { loading: loading4, error: error4 }] = useMutation(
    UPDATE_PRODUCT,
    {
      onCompleted: () => {
        alert("Product updated successfully");
        router.push("/admin/viewProducts");
      },
      onError: (error) => {
        alert(error.message);
      },
    }
  );

  const onSubmit = async (formData) => {
    const images = await uploadMultipleImages(formData.images);
    if (action == "Edit") {
      updateProduct({
        variables: {
          productUpdateId: data.id,
          data: {
            nurseryID: formData.nursery,
            name: formData.name,
            description: formData.description,
            category: formData.category,
            // hidden: data.hidden,
            retailPrice: parseFloat(formData.retailPrice),
            wholesalePrice: parseFloat(formData.wholesalePrice),
            stock: parseInt(formData.stock),
            // sold: data.sold,
            images: images,
            tags: formData.tags,
          },
        },
      });
    } else {
      createProduct({
        variables: {
          data: {
            nurseryID: formData.nursery,
            name: formData.name,
            description: formData.description,
            category: formData.category,
            // hidden: data.hidden,
            retailPrice: parseFloat(formData.retailPrice),
            wholesalePrice: parseFloat(formData.wholesalePrice),
            stock: parseInt(formData.stock),
            // sold: data.sold,
            images: images,
            tags: formData.tags,
          },
        },
      });
    }
  };

  console.log(errors);

  const handleTagAdder = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getValues("tags").push(e.target.value);
      setValue("tag", "");
      clearErrors("tag");
    }
  };

  //   const [chipData, setChipData] = React.useState([{ key: 0, label: tags }])

  const handleDelete = (chipToDelete) => () => {
    // setTag((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    const tags = getValues("tags");
    const filteredTags = tags.filter((tag) => tag !== chipToDelete);
    setValue("tags", filteredTags);
    console.log(getValues("tags"));
    if (getValues("tags").length === 0) {
      setError("tag", { type: "required" });
    }
  };

  if (categoryLoading || nurseryLoading) return <Loader />;
  return (
    <>
      <div className="flex justify-center">
        <section className="w-[75%] p-4 bg-white rounded-md shadow-md ">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize text-center p-4">
            <AddProductIcon sx={{ mt: 1 }} fontSize="large" />
            {action2} Product
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} sx={{ mt: 5, px: 2 }}>
              <Grid item xs={12}>
                <InputLabel
                  htmlFor="category"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  Choose Product Category
                </InputLabel>
                <ControlledSelect
                  control={control}
                  required
                  id="category"
                  name="category"
                  autoComplete="category"
                  // defaultValue={"Plant"}
                  fullWidth
                  error={errors.category ? true : false}
                  helperText={errors.category && "Please select a category"}
                >
                  {categoryData.categories.map((category, index) => (
                    <MenuItem value={category.id} key={index}>
                      {category.name}
                    </MenuItem>
                  ))}
                </ControlledSelect>
              </Grid>

              <Grid item xs={12}>
                <InputLabel
                  htmlFor="nursery"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  Choose Nursery
                </InputLabel>
                <ControlledSelect
                  control={control}
                  required
                  name="nursery"
                  id="nursery"
                  autoComplete="Nursery"
                  // defaultValue={"Nursery-x"}
                  fullWidth
                  error={errors.nursery ? true : false}
                  helperText={errors.nursery && "Please select a nursery"}
                >
                  {nurseryData.nurseries.map((nursery, index) => (
                    <MenuItem value={nursery.id} key={index}>
                      {nursery.name}
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
                  {action} Product Name
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="name"
                  name="name"
                  fullWidth
                  autoComplete="Product Name"
                  error={errors.name ? true : false}
                  helperText={errors.name && "Product Name is required"}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="stock"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  {action} Product Quantity
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="stock"
                  name="stock"
                  fullWidth
                  autoComplete="Product Description"
                  error={errors.stock ? true : false}
                  helperText={errors.stock && "Product Quantity is required"}
                  // InputProps={{
                  //   startAdornment: (
                  //     <InputAdornment position="start">
                  //       <AlternateEmail />
                  //     </InputAdornment>
                  //   ),
                  // }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="wholesalePrice"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  {action} Whole Sale Price
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="wholesalePrice"
                  name="wholesalePrice"
                  fullWidth
                  autoComplete="Rs. 80"
                  error={errors.wholesalePrice ? true : false}
                  helperText={
                    errors.wholesalePrice && "Whole Sale Price is required"
                  }
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="retailPrice"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  {action} Retail Price
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="retailPrice"
                  name="retailPrice"
                  fullWidth
                  autoComplete="Rs. 100"
                  error={errors.retailPrice ? true : false}
                  helperText={errors.retailPrice && "Retail Price is required"}
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
                  {action} Product Description
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  required
                  id="description"
                  name="description"
                  fullWidth
                  multiline
                  rows={3}
                  error={errors.description ? true : false}
                  helperText={
                    errors.description && "Product Description is required"
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel
                  htmlFor="tags"
                  variant="standard"
                  required
                  sx={{
                    mb: 1.5,
                    color: "text.primary",
                    "& span": { color: "error.light" },
                  }}
                >
                  {action} Product Tags
                </InputLabel>
                <ControlledTextInput
                  control={control}
                  id="tag"
                  name="tag"
                  fullWidth
                  autoComplete="off"
                  onKeyDown={handleTagAdder}
                  validate={() => watch("tags").length > 0}
                  placeholder="Press Enter to add a new Tag"
                  error={errors.tag ? true : false}
                  helperText={errors.tag && "At least one tag is required"}
                />

                <div className="flex flex-wrap justify-start list-none p-2 m-0">
                  {watch("tags")?.map((data) => {
                    return (
                      <ListItem key={data.key}>
                        <Chip label={data} onDelete={handleDelete(data)} />
                      </ListItem>
                    );
                  })}
                </div>
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
                <button class="relative px-6 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-floraGreen ease">
                  <ButtonBackground />
                  <AddProductIcon sx={{ mt: 0.6 }} fontSize="medium" />
                  <span class="relative">{action} Product</span>
                </button>
              </Grid>
            </Grid>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddProduct;
