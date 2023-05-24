import { Table, TableCell, TableRow } from "@mui/material";
import React from "react";
import Ratings from "../../Generic/Ratings";

const ReviewData = ({ data }) => {
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
            Name:
          </TableCell>
          <TableCell>
            {data?.customerDetails?.firstName} {data?.customerDetails?.lastName}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Email
          </TableCell>
          <TableCell>{data?.customerDetails?.userDetails?.email}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Review:
          </TableCell>
          <TableCell>
            <Ratings value={data.rating} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Review:
          </TableCell>
          <TableCell>{data?.review}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Dated:
          </TableCell>
          <TableCell>
            {new Date(parseInt(data.createdAt)).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </TableCell>
        </TableRow>
      </Table>
    </>
  );
};

export default ReviewData;
