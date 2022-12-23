import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import ActionConfirmationModal from "../Modal/ActionConfirmationModal";
import ViewUserModal from "../Modal/ViewUserModal";

const ActionIcons = ({ type, text, warningText, viewText, data }) => {
  // Action Confirmation Modal States
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // View User Modal States
  const [viewOpen, setViewOpen] = React.useState(false);
  const handleViewOpen = () => setViewOpen(true);
  const handleViewClose = () => setViewOpen(false);

  const router = useRouter();
  const styles = {
    cursor: "pointer",
    "&:hover": {
      filter: "brightness(0.8)",
    },
  };

  const handleEdit = () => {
    switch (type) {
      case "user":
        router.push(`editUser/${data.id}`);
        break;
      case "product":
        router.push(`editProduct/${data.id}`);
        break;
      case "category":
        router.push(`editCategory/${data.id}`);
        break;
      case "nursery":
        router.push(`editNursery/${data.id}`);
        break;
    }
  };

  const handleDelete = () => {
    switch (type) {
      case "user":
        router.push(`deleteUser/${data.id}`);
        break;
      case "product":
        router.push(`deleteProduct/${data.id}`);
        break;
      case "category":
        router.push(`deleteCategory/${data.id}`);
        break;
      case "nursery":
        router.push(`deleteNursery/${data.id}`);
        break;
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Tooltip title="View">
          <Visibility
            sx={{ ...styles, color: "info.dark" }}
            onClick={handleViewOpen}
          />
        </Tooltip>
        <Tooltip title="Edit">
          <Edit sx={{ ...styles, color: "info.main" }} onClick={handleEdit} />
        </Tooltip>
        <Tooltip title="Delete">
          <Delete
            sx={{ ...styles, color: "error.main" }}
            onClick={handleOpen}
          />
        </Tooltip>
      </Box>

      <ActionConfirmationModal
        open={open}
        handleClose={handleClose}
        text={text}
        warningText={warningText}
      />

      <ViewUserModal
        viewOpen={viewOpen}
        handleViewClose={handleViewClose}
        viewText={viewText}
        type={type}
      />
    </>
  );
};

export default ActionIcons;
