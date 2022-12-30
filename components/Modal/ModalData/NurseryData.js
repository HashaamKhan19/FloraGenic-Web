import { Table, TableCell, TableRow } from "@mui/material";
import Image from "next/legacy/image";
import React from "react";

const NurseryData = ({ data }) => {
  return (
    <>
      <Image
        src={data?.image}
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
          <TableCell>{data?.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Details:
          </TableCell>
          <TableCell>{data?.details}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Nursery Address:
          </TableCell>
          <TableCell>{data?.address}</TableCell>
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
          <TableCell>{data?.phoneNumber}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Opening Hours:
          </TableCell>
          <TableCell>
            {new Date(data?.openingHours).toLocaleTimeString()}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Closing Hours:
          </TableCell>
          <TableCell>
            {new Date(data?.closingHours).toLocaleTimeString()}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Website:
          </TableCell>
          <TableCell>{data?.website || "N/A"}</TableCell>
        </TableRow>
      </Table>
    </>
  );
};

export default NurseryData;
