import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Table, TableCell, TableRow } from "@mui/material";
import Image from "next/legacy/image";
import UserData from "./ModalData/UserData";
import NurseryData from "./ModalData/NurseryData";
import CategoryData from "./ModalData/CategoryData";
import ProductData from "./ModalData/ProductData";
import SkillData from "./ModalData/SkillData";
import OrderData from "./ModalData/OrderData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
  textAlign: "center",
};

export default function ViewUserModal({
  viewText,
  viewOpen,
  handleViewClose,
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
              View {type} details
            </Typography>

            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                mt: 3,
                gap: 1,
              }}
            >
              <Typography>{viewText}</Typography>
            </Box> */}

            {type === "user" && <UserData data={data} />}
            {type === "nursery" && <NurseryData data={data} />}
            {type === "category" && <CategoryData data={data} />}
            {type === "product" && <ProductData data={data} />}
            {type === "skill" && <SkillData data={data} />}
            {type === "order" && <OrderData data={data} />}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
