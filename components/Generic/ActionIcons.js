import { gql, useMutation } from "@apollo/client";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Box, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import ActionConfirmationModal from "../Modal/ActionConfirmationModal";
import ViewUserModal from "../Modal/ViewUserModal";
import { toast } from "react-hot-toast";

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

const DELETE_SKILL_MUTATION = gql`
  mutation SkillDelete($skillDeleteId: ID!) {
    skillDelete(id: $skillDeleteId)
  }
`;

const ActionIcons = ({ type, text, warningText, viewText, data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [loading, setLoading] = React.useState(false);

  // View User Modal States
  const [viewOpen, setViewOpen] = React.useState(false);
  const handleViewOpen = () => setViewOpen(true);
  const handleViewClose = () => setViewOpen(false);

  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      setLoading(false);
      handleClose();
      toast.success("User deleted successfully");
    },
    onError: (error) => {
      setLoading(false);
      handleClose();
      toast.error(error.message);
    },
  });
  const [deleteNursery] = useMutation(DELETE_NURSERY_MUTATION, {
    onCompleted: () => {
      setLoading(false);
      handleClose();
      toast.success("Nursery deleted successfully");
    },
    onError: (error) => {
      setLoading(false);
      handleClose();
      toast.error(error.message);
    },
  });

  const [deleteCategory] = useMutation(DELETE_CATEGORY_MUTATION, {
    onCompleted: () => {
      setLoading(false);
      handleClose();
      toast.success("Category deleted successfully");
    },
    onError: (error) => {
      setLoading(false);
      handleClose();
      toast.error(error.message);
    },
  });

  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION, {
    onCompleted: () => {
      setLoading(false);
      handleClose();
      toast.success("Product deleted successfully");
    },
    onError: (error) => {
      setLoading(false);
      handleClose();
      toast.error(error.message);
    },
  });

  const [deleteOrder] = useMutation(DELETE_ORDER_MUTATION, {
    onCompleted: () => {
      setLoading(false);
      handleClose();
      toast.success("Order deleted successfully");
    },
    onError: (error) => {
      setLoading(false);
      handleClose();
      toast.error(error.message);
    },
  });

  const [deleteComplaint] = useMutation(DELETE_COMPLAINT_MUTATION, {
    onCompleted: () => {
      setLoading(false);
      handleClose();
      toast.success("Complaint deleted successfully");
    },
    onError: (error) => {
      setLoading(false);
      handleClose();
      toast.error(error.message);
    },
  });

  const [deleteGig] = useMutation(DELETE_GIG_MUTATION, {
    onCompleted: () => {
      setLoading(false);
      handleClose();
      toast.success("Gig deleted successfully");
    },
    onError: (error) => {
      setLoading(false);
      handleClose();
      toast.error(error.message);
    },
  });

  const [deleteSkill] = useMutation(DELETE_SKILL_MUTATION, {
    onCompleted: () => {
      setLoading(false);
      handleClose();
      toast.success("Skill deleted successfully");
    },
    onError: (error) => {
      setLoading(false);
      handleClose();
      toast.error(error.message);
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
      case "skill":
        router.push(`editSkill/${data.id}`);
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
        console.log(data.id);
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
      case "skill":
        deleteSkill({
          variables: {
            skillDeleteId: data.id,
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
        loading={loading}
        setLoading={setLoading}
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
