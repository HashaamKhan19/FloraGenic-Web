import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { TextField, InputLabel, Select, MenuItem } from "@mui/material";
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

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const AddProduct = () => {
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
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      tags: [],
    },
  });

  console.log(errors);

  React.useEffect(() => {
    const parts = router.pathname.split("/");
    parts[parts.length - 1] == "addProduct" ? action : setAction("Edit");
    parts[parts.length - 1] == "addProduct" ? action2 : setAction2("Edit");
  }, [router]);

  const [quantity, setQuantity] = React.useState(1);
  const [tagsValue, setTagValue] = React.useState("");
  const [tagsKey, setTagKey] = React.useState(0);
  const [tags, setTag] = React.useState([]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleTagAdder = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getValues("tags").push(e.target.value);
      setTagKey(tagsKey + 1);
      setValue("tag", "");
    }
  };

  //   const [chipData, setChipData] = React.useState([{ key: 0, label: tags }])

  const handleDelete = (chipToDelete) => () => {
    // setTag((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    const tags = getValues("tags");
    const filteredTags = tags.filter((tag) => tag !== chipToDelete);
    setValue("tags", filteredTags);
    console.log(getValues("tags"));
  };

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
                  defaultValue={"Plant"}
                  fullWidth
                >
                  <MenuItem value={"Plant"}>Plants</MenuItem>
                  <MenuItem value={"Tools"}>Tools</MenuItem>
                  <MenuItem value={"Care"}>Care</MenuItem>
                </ControlledSelect>
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="productName"
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
                  id="productName"
                  name="productName"
                  fullWidth
                  autoComplete="Product Name"
                  error={errors.productName ? true : false}
                  helperText={errors.productName && "Product Name is required"}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="quantity"
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
                  id="quantity"
                  name="quantity"
                  fullWidth
                  autoComplete="Product Description"
                  error={errors.quantity ? true : false}
                  helperText={errors.quantity && "Product Quantity is required"}
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

              <Grid item xs={12} sm={6}>
                <InputLabel
                  htmlFor="wholeSalePrice"
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
                  id="wholeSalePrice"
                  name="wholeSalePrice"
                  fullWidth
                  autoComplete="Rs. 80"
                  error={errors.wholeSalePrice ? true : false}
                  helperText={
                    errors.wholeSalePrice && "Whole Sale Price is required"
                  }
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
                  rows={4}
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
                  Choose Nursery to add this Product to
                </InputLabel>
                <Select
                  id="nursery"
                  name="nursery"
                  autoComplete="Nursery"
                  defaultValue={"Nursery-x"}
                  fullWidth
                >
                  <MenuItem value={"Nursery-x"}>Nursery-x</MenuItem>
                  <MenuItem value={"Nursery-y"}>Nursery-y</MenuItem>
                  <MenuItem value={"Nursery-z"}>Nursery-z</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} textAlign="center" sx={{ mt: 2, p: 2 }}>
                <button class="relative px-6 py-2 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-floraGreen ease">
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
