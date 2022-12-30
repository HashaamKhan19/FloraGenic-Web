import { Table, TableCell, TableRow } from "@mui/material";
import Image from "next/legacy/image";
import React from "react";

const ComplaintData = ({ data }) => {
  console.log(data);
  return (
    <>
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
            Complaint By:
          </TableCell>
          <TableCell>
            {data?.userDetails
              ? data?.userDetails?.firstName + " " + data?.userDetails?.lastName
              : "Anonymous"}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Title:
          </TableCell>
          <TableCell>{data?.title}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Description:
          </TableCell>
          <TableCell>{data?.description}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Status:
          </TableCell>
          <TableCell>{data?.read ? "Replied" : "Not Replied"}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Dated:
          </TableCell>
          <TableCell>{data?.date}</TableCell>
        </TableRow>
      </Table>
    </>
  );
};

export default ComplaintData;
