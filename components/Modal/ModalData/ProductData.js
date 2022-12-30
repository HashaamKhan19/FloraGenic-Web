import { Table, TableCell, TableRow } from "@mui/material";
import Image from "next/legacy/image";
import React from "react";

const ProductData = ({ data }) => {
  console.log(data);
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
            Nursery:
          </TableCell>
          <TableCell>{data?.nursery?.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Category:
          </TableCell>
          <TableCell>{data?.category?.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Status:
          </TableCell>
          <TableCell>{data?.hidden ? "Hidden" : "Visible"}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Wholesale Price:
          </TableCell>
          <TableCell>Rs. {data?.wholesalePrice}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Retail Price:
          </TableCell>
          <TableCell>Rs. {data?.retailPrice}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Stock:
          </TableCell>
          <TableCell>{data?.stock} Items</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Sold:
          </TableCell>
          <TableCell>{data?.sold} Items</TableCell>
        </TableRow>
      </Table>
    </>
  );
};

export default ProductData;
