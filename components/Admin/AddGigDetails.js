import { InputLabel, MenuItem } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import ControlledSelect from "../Generic/ControlledComponents/ControlledSelect";
import ControlledTextInput from "../Generic/ControlledComponents/ControlledTextInput";

const AddGigDetails = ({ control, errors, gardeners }) => {
  return (
    <>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabel
              htmlFor="gigOwner"
              variant="standard"
              required
              sx={{
                mb: 1.5,
                color: "text.primary",
                "& span": { color: "error.light" },
              }}
            >
              Choose Gardener to handle Over this Gig to
            </InputLabel>
            <ControlledSelect
              control={control}
              required
              id="gigOwner"
              name="gigOwner"
              autoComplete="gigOwner"
              fullWidth
            >
              {gardeners.map((gardener) => (
                <MenuItem key={gardener.id} value={gardener.id}>
                  {gardener.firstName + " " + gardener.lastName}
                </MenuItem>
              ))}
            </ControlledSelect>
          </Grid>

          <Grid item xs={12}>
            <InputLabel
              htmlFor="gigTitle"
              variant="standard"
              required
              sx={{
                mb: 1.5,
                color: "text.primary",
                "& span": { color: "error.light" },
              }}
            >
              Enter Gig Title
            </InputLabel>
            <ControlledTextInput
              control={control}
              required
              id="gigTitle"
              name="gigTitle"
              fullWidth
              autoComplete="Gig Title"
              error={errors.name ? true : false}
              helperText={errors.name && "Gig Title is required"}
            />
          </Grid>

          <Grid item xs={12}>
            <InputLabel
              htmlFor="gigDescription"
              variant="standard"
              required
              sx={{
                mb: 1.5,
                color: "text.primary",
                "& span": { color: "error.light" },
              }}
            >
              Enter Gig Description
            </InputLabel>
            <ControlledTextInput
              control={control}
              required
              id="gigDescription"
              name="gigDescription"
              fullWidth
              multiline
              rows={2}
              autoComplete="Gig Description"
              error={errors.address ? true : false}
              helperText={errors.address && "Gig Description is required"}
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default AddGigDetails;
