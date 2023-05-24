import React from "react";
import { Box, Tooltip } from "@mui/material";
import { Visibility, Delete } from "@mui/icons-material";
import ReplyIcon from "@mui/icons-material/Reply";
import ActionConfirmationModal from "../Modal/ActionConfirmationModal";
import ViewFeedbackModal from "../Modal/ViewFeedbackModal";
import ReplyFeedbackModal from "../Modal/ReplyFeedbackModal";
import { DELETE_COMPLAINT } from "../Admin/ViewComplaints/queries";
import { useMutation } from "@apollo/client";
import { toast } from "react-hot-toast";

const ReviewActions = ({
  text,
  warningText,
  viewText,
  viewSubject,
  replyText,
  data,
  type,
}) => {
  // Action Confirmation Modal States
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // View Modal States
  const [openView, setOpenView] = React.useState(false);
  const handleOpenView = () => setOpenView(true);
  const handleCloseView = () => setOpenView(false);

  // Reply Modal States
  const [openReply, setOpenReply] = React.useState(false);
  const handleOpenReply = () => setOpenReply(true);
  const handleCloseReply = () => setOpenReply(false);

  const [loading, setLoading] = React.useState(false);

  const [deleteComplaint] = useMutation(DELETE_COMPLAINT, {
    onCompleted: () => {
      setLoading(false);
      handleClose();
      toast.success("Complaint deleted successfully");
    },
    onError: (error) => {
      setLoading(false);
      handleClose();
      toast.error(error);
    },
  });

  const styles = {
    cursor: "pointer",
    "&:hover": {
      filter: "brightness(0.8)",
    },
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
            onClick={handleOpenView}
          />
        </Tooltip>
        <Tooltip title="Reply">
          <ReplyIcon
            sx={{ ...styles, color: "info.main" }}
            onClick={handleOpenReply}
          />
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
        loading={loading}
        setLoading={setLoading}
        handleConfirm={() =>
          deleteComplaint({ variables: { complaintDeleteId: data?.id } })
        }
      />

      <ViewFeedbackModal
        viewText={viewText}
        viewSubject={viewSubject}
        viewOpen={openView}
        handleViewClose={handleCloseView}
        data={data}
        type={type}
      />

      <ReplyFeedbackModal
        replyText={replyText}
        replyOpen={openReply}
        handleReplyClose={handleCloseReply}
      />
    </>
  );
};

export default ReviewActions;
