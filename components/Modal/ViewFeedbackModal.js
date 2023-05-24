import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import ComplaintData from "./ModalData/ComplaintData";
import ReviewData from "./ModalData/ReviewData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
  textAlign: "center",
};

export default function ViewFeedbackModal({
  viewText,
  viewSubject,
  viewOpen,
  handleViewClose,
  open,
  type,
  data,
}) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={viewOpen}
        onClose={handleViewClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={viewOpen}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              gutterBottom
            >
              {viewSubject}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                mt: 3,
                gap: 1,
              }}
            >
              <Typography>{viewText}</Typography>
              {type === "review" ? (
                <ReviewData data={data} />
              ) : (
                <ComplaintData data={data} />
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
