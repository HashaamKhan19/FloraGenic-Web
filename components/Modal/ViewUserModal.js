import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Table, TableCell, TableRow } from "@mui/material";
import Image from "next/legacy/image";

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

            <Image
              src={data?.details?.image}
              alt="Profile Image"
              showLoading
              duration={0}
              width={200}
              height={200}
              style={{
                height: "auto",
                aspectRatio: "1",
                objectFit: "cover",
                borderRadius: "50%",
                padding: "20px",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            />

            <Table
              width="full"
              size="small"
              sx={{ mt: 2, "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  Name:
                </TableCell>
                <TableCell>
                  {data?.details?.firstName + " " + data?.details?.lastName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  Role:
                </TableCell>
                <TableCell>{data?.userType}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  Email Address:
                </TableCell>
                <TableCell>{data?.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  Phone Number:
                </TableCell>
                <TableCell>{data?.details?.phoneNumber}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  Gender:
                </TableCell>
                <TableCell>{data?.details?.gender}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  Nationality:
                </TableCell>
                <TableCell>{data?.details?.nationality}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  CNIC:
                </TableCell>
                <TableCell>{data?.details?.CNIC || "N/A"}</TableCell>
              </TableRow>
            </Table>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
