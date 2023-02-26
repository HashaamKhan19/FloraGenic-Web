import { AddCircleOutline, Delete } from "@mui/icons-material/";
import { Box, Grid, InputLabel, Typography } from "@mui/material";
import React from "react";
import ControlledTextInput from "../Generic/ControlledComponents/ControlledTextInput";

const PackageForm = ({ title, control, errors, show, deletable }) => {
  const [showPackage, setShowPackage] = React.useState(show || false);
  const packageTitle = React.useRef("");
  return (
    <Box
      sx={{
        flex: 1,
        p: 4,
        boxShadow: 2,
        borderRadius: 1,
      }}
    >
      {!showPackage && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            cursor: "pointer",
          }}
          onClick={() => {
            setShowPackage(true);
          }}
        >
          <AddCircleOutline
            sx={{
              fontSize: 100,
              mb: 2,
            }}
          />
          <Typography variant="h5" gutterBottom>
            Add {title}
          </Typography>
        </Box>
      )}
      {showPackage && (
        <>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {title}
            {deletable && (
              <Delete
                sx={{
                  fontSize: 30,
                  mb: 2,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setShowPackage(false);
                }}
              />
            )}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <InputLabel
                htmlFor="packageTitle"
                variant="standard"
                required
                sx={{
                  mb: 1.5,
                  color: "text.primary",
                  "& span": { color: "error.light" },
                }}
              >
                Enter Package Title
              </InputLabel>
              <ControlledTextInput
                control={control}
                required
                id="packageTitle"
                name="packageTitle"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel
                htmlFor="packageDetails"
                variant="standard"
                required
                sx={{
                  mb: 1.5,
                  color: "text.primary",
                  "& span": { color: "error.light" },
                }}
              >
                Enter Package Details
              </InputLabel>
              <ControlledTextInput
                control={control}
                required
                id="packageDetails"
                name="packageDetails"
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel
                htmlFor="deliveryTime"
                variant="standard"
                required
                sx={{
                  mb: 1.5,
                  color: "text.primary",
                  "& span": { color: "error.light" },
                }}
              >
                Enter Delivery Time
              </InputLabel>
              <ControlledTextInput
                control={control}
                required
                id="deliveryTime"
                name="deliveryTime"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel
                htmlFor="packagePrice"
                variant="standard"
                required
                sx={{
                  mb: 1.5,
                  color: "text.primary",
                  "& span": { color: "error.light" },
                }}
              >
                Enter Package Price
              </InputLabel>
              <ControlledTextInput
                control={control}
                required
                id="packagePrice"
                name="packagePrice"
                fullWidth
              />
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default PackageForm;
