import { Chip } from "@mui/material";
import ActionIcons from "../../Generic/ActionIcons";

export const columns = [
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
