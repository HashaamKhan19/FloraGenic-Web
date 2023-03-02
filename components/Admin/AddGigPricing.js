import { Box } from "@mui/material";
import React from "react";
import PackageForm from "./PackageForm";

const AddGigPricing = ({ control, errors }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        width: "100%",
        gap: "20px",
      }}
    >
      <PackageForm title={"Package 1"} control={control} errors={errors} show />
      <PackageForm
        title={"Package 2"}
        control={control}
        errors={errors}
        deletable
      />
      <PackageForm
        title={"Package 3"}
        control={control}
        errors={errors}
        deletable
      />
    </Box>
  );
};
export default AddGigPricing;
