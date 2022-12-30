import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Chip, Typography } from "@mui/material";
import PaymentActions from "../Generic/PaymentActions";
import ComplaintStatus from "../Generic/ComplaintStatus";
import SearchField from "../Generic/SearchField";
import Export from "../Generic/Export";
import { ViewReviewsIcon } from "../../public/icons/ViewReviewsIcon";
import { gql, useQuery } from "@apollo/client";
import Loader from "../Generic/Loader";
import ActionIcons from "../Generic/ActionIcons";

const GET_ORDERS = gql`
  query Query {
    orders {
      id
      customerID
      totalPrice
      discount
      totalPriceAfterDiscount
      shippingAddress
      orderingDate
      shipmentDate
      receivedDate
      paymentStatus
      orderStatus
      customerDetails {
        firstName
        lastName
        userDetails {
          email
        }
      }
    }
  }
`;

const columns = [
  { field: "id", headerName: "ID", width: 40 },
  {
    field: "name",
    headerName: "Customer",
    width: 200,
    flex: 1,
    valueGetter: (params) => {
      return `${params.row.customerDetails.firstName} ${params.row.customerDetails.lastName}`;
    },
  },
  {
    field: "orderingDate",
    headerName: "Ordered On",
    width: 150,
    valueGetter: (params) => {
      console.log(params.row.orderingDate);
      return new Date(params.row.orderingDate).toString();
    },
  },
  {
    field: "totalPrice",
    headerName: "Total Price",
    width: 150,
    valueGetter: (params) => {
      return `Rs. ${params.row.totalPrice}`;
    },
  },
  {
    field: "discount",
    headerName: "Discount",
    width: 150,
    valueGetter: (params) => {
      return `${params.row.discount}%`;
    },
  },
  {
    field: "totalPriceAfterDiscount",
    headerName: "After Discount",
    width: 150,
    valueGetter: (params) => {
      return `Rs. ${params.row.totalPriceAfterDiscount}`;
    },
  },
  {
    field: "orderStatus",
    headerName: "Order Status",
    width: 150,
    align: "center",
    renderCell: (params) => {
      return <Chip label={params.row.orderStatus} />;
    },
  },
  {
    field: "paymentStatus",
    headerName: "Payment Status",
    width: 150,
    align: "center",
    renderCell: (params) => {
      return <Chip label={params.row.paymentStatus} />;
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return (
        <ActionIcons
          text={"Are you sure you want to delete this Order?"}
          warningText={"This action is irreversable!"}
          viewText={"Order Details here"}
          type={"order"}
          data={params?.row}
        />
      );
    },
  },
];

const rows = [
  {
    id: 1,
    name: "Hashaam Khan",
    date: "12/12/12",
    method: "MasterCard",
    actions: "iconsHere",
  },
];

export default function ViewOrders() {
  const { loading, error, data } = useQuery(GET_ORDERS);
  if (loading) return <Loader />;
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "5%",
        paddingLeft: "5%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1.5,
          gap: 1,
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          backgroundColor: "primary.light",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="h5"
            align="center"
            alignItems={"center"}
            sx={{ marginLeft: 1 }}
          >
            <ViewReviewsIcon sx={{ mt: 1 }} fontSize="large" />
            View Orders
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            boxShadow: "none",
          }}
        >
          <SearchField />
          <Export />
        </Box>
      </Box>
      <DataGrid
        sx={{
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus, .MuiDataGrid-columnHeader:focus":
            {
              outline: "none",
            },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#F0F4F6",
            color: "black",
            fontSize: 16,
          },
          boxShadow: "0 5px 5px -5px",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
        rows={data.orders || []}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        autoHeight
        disableSelectionOnClick
      />
    </Box>
  );
}
