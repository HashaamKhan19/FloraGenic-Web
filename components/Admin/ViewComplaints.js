import { gql, useQuery } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import { ViewReviewsIcon } from "../../public/icons/ViewReviewsIcon";
import ComplaintStatus from "../Generic/ComplaintStatus";
import Export from "../Generic/Export";
import LoadingScreen from "../Generic/LoadingScreen";
import ReviewActions from "../Generic/ReviewActions";
import SearchField from "../Generic/SearchField";

const columns = [
  { field: "id", headerName: "ID", width: 40 },
  {
    field: "email",
    headerName: "Complaint By",
    width: 200,
    valueGetter: (params) => params.row?.userDetails?.email || "Anonymous",
  },
  { field: "type", headerName: "Category", width: 120 },
  { field: "date", headerName: "Added On", width: 150 },
  { field: "title", headerName: "Subject", width: 200 },
  { field: "description", headerName: "Description", width: 200, flex: 1 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: () => {
      return <ComplaintStatus />;
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
        <ReviewActions
          text={"Are you sure you want to delete this Complaint?"}
          warningText={"This action is irreversable!"}
          viewText={"Complaint Details"}
          viewSubject={"Complaint Subject"}
          replyText={"Complaint"}
          type="complaint"
          data={params?.row}
        />
      );
    },
  },
];

const rows = [
  {
    id: 1,
    email: "Hashaam@gmail.com",
    category: "Nursery",
    date: "12/12/12",
    subject: "Bug",
    status: "Active",
    actions: "iconsHere",
  },
];

const GET_COMPLAINTS = gql`
  query Query {
    complaints {
      id
      userId
      type
      title
      description
      date
      read
      userDetails {
        email
      }
    }
  }
`;

export default function ViewComplants() {
  const { loading, error, data } = useQuery(GET_COMPLAINTS);

  if (loading) return <LoadingScreen />;

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
            View Complaints
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
        rows={data.complaints || []}
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
