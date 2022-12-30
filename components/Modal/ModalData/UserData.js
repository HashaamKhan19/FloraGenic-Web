import { Table, TableCell, TableRow } from "@mui/material";
import Image from "next/legacy/image";
import React from "react";

const UserData = ({ data }) => {
  return (
    <>
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
    </>
  );
};

export default UserData;
