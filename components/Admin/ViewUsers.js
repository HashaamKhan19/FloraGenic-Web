import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import ActionIcons from "../Generic/ActionIcons";
import BlockToggle from "../Generic/BlockToggle";
import SearchField from "../Generic/SearchField";
import Export from "../Generic/Export";
import Link from "next/link";
import { UsersIcon } from "../../public/icons/UsersIcon";
import Loader from "../Generic/Loader";

// GraphQL
import { useQuery, gql } from "@apollo/client";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "image", headerName: "Image", width: 70 },
  { field: "userType", headerName: "Role", width: 120 },
  {
    field: "fullName",
    headerName: "Full name",
    width: 200,
    flex: 1,
    valueGetter: (params) =>
      `${params?.row?.details?.firstName || ""} ${
        params?.row?.details?.lastName || ""
      }`,
  },
  { field: "email", headerName: "Email Address", width: 200, flex: 1   },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 200,
    flex: 1,
    valueGetter: (params) =>
      params?.row?.details?.phoneNumber || "Not Provided",
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 150,
    valueGetter: (params) => params?.row?.details?.gender || "N/A",
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: () => {
      return <BlockToggle />;
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: () => {
      return (
        <ActionIcons
          type="user"
          text={"Are you sure you want to delete this User?"}
          warningText={"This action is irreversable!"}
          viewText={"User Data Here"}
        />
      );
    },
  },
];

const rows = [
  {
    id: 1,
    image: "Null",
    role: "Admin",
    lastName: "Snow",
    firstName: "Jon",
    email: "jonSnow@gmail.com",
    phone: 35312322,
    address: "Liaqatbagh Stadium Rawat Road",
    status: "Active",
    actions: "iconsHere",
  },
];

const GET_USERS = gql`
  query Users {
    users {
      id
      email
      userType
      bannedStatus
      details {
        ... on Customer {
          id
          firstName
          lastName
          nationality
          phoneNumber
          gender
          image
          createdAt
          updatedAt
        }
        ... on Admin {
          id
          firstName
          lastName
          nationality
          phoneNumber
          CNIC
          image
          createdAt
          updatedAt
        }
        ... on Gardener {
          id
          firstName
          lastName
          nationality
          phoneNumber
          CNIC
          image
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export default function ViewUsers() {
  const [anchorElImport, setAnchorElImport] = React.useState(null);
  const [anchorElExport, setAnchorElExport] = React.useState(null);
  const importOpen = Boolean(anchorElImport);
  const exportOpen = Boolean(anchorElExport);

  const { loading, error, data } = useQuery(GET_USERS);

  // Menu handlers
  const handleImportClick = (event) => {
    setAnchorElImport(event.currentTarget);
  };
  const handleImportClose = () => {
    setAnchorElImport(null);
  };
  const handleExportClick = (event) => {
    setAnchorElExport(event.currentTarget);
  };
  const handleExportClose = () => {
    setAnchorElExport(null);
  };

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
          // mb: 5,
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
            <UsersIcon sx={{ mr: 1, mb: 0.3 }} fontSize="medium" />
            View Users
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

          <Link href={"/admin/addUser"}>
            <button className="bg-floraGreen px-3 py-1 rounded-md shadow-md text-white hover:scale-[1.02] transition duration-500">
              <UsersIcon
                sx={{ color: "white", mr: 1, mb: 0.3 }}
                fontSize="small"
              />
              Add User
            </button>
          </Link>

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
        rows={data.users}
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
