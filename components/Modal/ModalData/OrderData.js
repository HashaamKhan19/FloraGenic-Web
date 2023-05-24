import { Chip, Table, TableCell, TableRow } from "@mui/material";
import Image from "next/legacy/image";
import React from "react";

const OrderData = ({ data }) => {
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
            Customer Name:
          </TableCell>
          <TableCell>
            {data?.customerDetails?.firstName +
              " " +
              data?.customerDetails?.lastName}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Ordered On :
          </TableCell>
          <TableCell>
            {new Date(parseInt(data?.orderingDate)).toLocaleDateString(
              "en-US",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            )}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Total Price:
          </TableCell>
          <TableCell>{`Rs. ${data?.totalPrice}`}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Discount:
          </TableCell>
          <TableCell>{`${data?.discount}%`}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            After Discount:
          </TableCell>
          <TableCell>{`Rs. ${data?.totalPriceAfterDiscount}`}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Order Status:
          </TableCell>
          <TableCell>
            <Chip label={data?.orderStatus} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Payment Status:
          </TableCell>
          <TableCell>
            <Chip label={data?.paymentStatus} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: "600",
            }}
          >
            Products
          </TableCell>
          <TableCell>
            {data?.products?.map((product, index) => (
              <p key={index}>
                {product?.productDetails?.name} x {product?.quantity}
              </p>
            ))}
          </TableCell>
        </TableRow>
      </Table>
    </>
  );
};

export default OrderData;
