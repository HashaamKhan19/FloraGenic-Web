import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import ActionConfirmationModal from "../Modal/ActionConfirmationModal";
import ViewUserModal from "../Modal/ViewUserModal";
import { useMutation, gql } from "@apollo/client";

const DELETE_USER_MUTATION = gql`
  mutation Mutation($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId)
  }
`;

const DELETE_NURSERY_MUTATION = gql`
  mutation Mutation($nurseryDeleteId: ID!) {
    nurseryDelete(id: $nurseryDeleteId)
  }
`;

const ActionIcons = ({ type, text, warningText, viewText, data }) => {
  // Action Confirmation Modal States
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // View User Modal States
  const [viewOpen, setViewOpen] = React.useState(false);
  const handleViewOpen = () => setViewOpen(true);
  const handleViewClose = () => setViewOpen(false);

  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      alert("User deleted successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const [deleteNursery] = useMutation(DELETE_NURSERY_MUTATION, {
    onCompleted: () => {
      alert("Nursery deleted successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });

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
        deleteUser({
          variables: {
            deleteUserId: data.id,
          },
        });
        break;
      case "product":
        router.push(`editProduct/${data.id}`);
        break;
      case "category":
        router.push(`editCategory/${data.id}`);
        break;
      case "nursery":
        deleteNursery({
          variables: {
            nurseryDeleteId: data.id,
          },
        });
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
        handleConfirm={handleDelete}
        handleClose={handleClose}
        text={text}
        warningText={warningText}
      />

      <ViewUserModal
        viewOpen={viewOpen}
        handleViewClose={handleViewClose}
        viewText={viewText}
        type={type}
        data={data}
      />
    </>
  );
};

export default ActionIcons;
