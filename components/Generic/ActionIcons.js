import { gql, useMutation } from "@apollo/client";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Box, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import ActionConfirmationModal from "../Modal/ActionConfirmationModal";
import ViewUserModal from "../Modal/ViewUserModal";

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

const DELETE_CATEGORY_MUTATION = gql`
  mutation Mutation($categoryDeleteId: ID!) {
    categoryDelete(id: $categoryDeleteId)
  }
`;

const DELETE_PRODUCT_MUTATION = gql`
  mutation ProductDelete($productDeleteId: ID!) {
    productDelete(id: $productDeleteId)
  }
`;

const DELETE_ORDER_MUTATION = gql`
  mutation ProductDelete($orderDeleteId: ID!) {
    orderDelete(id: $orderDeleteId)
  }
`;

const DELETE_COMPLAINT_MUTATION = gql`
  mutation ComplaintDelete($complaintDeleteId: ID!) {
    complaintDelete(id: $complaintDeleteId)
  }
`;

const DELETE_GIG_MUTATION = gql`
  mutation GigDelete($gigDeleteId: ID!) {
    gigDelete(id: $gigDeleteId)
  }
`;

const ActionIcons = ({
  type,
  text,
  warningText,
  viewText,
  data,
  updateRows,
}) => {
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

  const [deleteCategory] = useMutation(DELETE_CATEGORY_MUTATION, {
    onCompleted: () => {
      alert("Category deleted successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION, {
    onCompleted: () => {
      alert("Product deleted successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [deleteOrder] = useMutation(DELETE_ORDER_MUTATION, {
    onCompleted: () => {
      alert("Order deleted successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [deleteComplaint] = useMutation(DELETE_COMPLAINT_MUTATION, {
    onCompleted: () => {
      alert("Complaint deleted successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [deleteGig] = useMutation(DELETE_GIG_MUTATION, {
    onCompleted: () => {
      alert("Gig deleted successfully");

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
      case "gig":
        router.push(`editGig/${data.id}`);
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
        deleteProduct({
          variables: {
            productDeleteId: data.id,
          },
        });
        break;
      case "category":
        deleteCategory({
          variables: {
            categoryDeleteId: data.id,
          },
        });
        break;
      case "nursery":
        deleteNursery({
          variables: {
            nurseryDeleteId: data.id,
          },
        });
        break;
      case "order":
        deleteOrder({
          variables: {
            orderDeleteId: data.id,
          },
        });
        break;

      case "complaint":
        deleteComplaint({
          variables: {
            complaintDeleteId: data.id,
          },
        });
        break;
      case "gig":
        deleteGig({
          variables: {
            gigDeleteId: data.id,
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

        {type !== "order" && (
          <Tooltip title="Edit">
            <Edit sx={{ ...styles, color: "info.main" }} onClick={handleEdit} />
          </Tooltip>
        )}
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
