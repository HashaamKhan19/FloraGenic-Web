import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

const UserTypeModal = ({ open, handleOpen, handleClose, type, setType }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={2}
        sx={{
          bgcolor: "background.paper",
          p: 5,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Select Account Type
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
          Select the account type you want to create.
        </Typography>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={type}
            name="radio-buttons-group"
            onChange={(e) => setType(e.target.value)}
          >
            <FormControlLabel
              value="Customer"
              control={<Radio />}
              label="Customer"
            />
            <FormControlLabel
              value="Gardener"
              control={<Radio />}
              label="Gardener"
            />
            <FormControlLabel
              value="NurseryOwner"
              control={<Radio />}
              label="Nursery Owner"
            />
          </RadioGroup>
        </FormControl>

        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            mt: 2,
          }}
        >
          Create Account
        </Button>
      </Box>
    </Modal>
  );
};

export default UserTypeModal;
