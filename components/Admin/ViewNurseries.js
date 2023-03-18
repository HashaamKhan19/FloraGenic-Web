import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import * as React from "react";
import ActionIcons from "../Generic/ActionIcons";
import BlockToggle from "../Generic/BlockToggle";
import Export from "../Generic/Export";
import SearchField from "../Generic/SearchField";

// GraphQL
import { gql, useQuery } from "@apollo/client";
import Image from "next/legacy/image";
import Placeholder from "../../assets/images/placeholder.png";
import LoadingScreen from "../Generic/LoadingScreen";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "image",
    headerName: "Image",
    width: 70,
    renderCell: (params) => {
      return (
        <Image
          src={params?.row?.images[0] || Placeholder}
          alt={"Nursery Image"}
          width={30}
          height={30}
          objectFit="cover"
          style={{
            borderRadius: "50%",
            marginRight: 10,
          }}
        />
      );
    },
  },
  {
    field: "name",
    headerName: "Nursery Name",
    width: 150,
    flex: 1,
  },
  { field: "email", headerName: "Email Address", width: 250, flex: 1 },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 180,
    flex: 1,
    valueFormatter: (params) => {
      return params.value ? params.value : "Not Available";
    },
  },
  { field: "address", headerName: "Address", width: 200, flex: 1 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return (
        <BlockToggle
          blocked={params.row.bannedStatus}
          id={params.row.id}
          type="nursery"
        />
      );
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
          type="nursery"
          text={"Are you sure you want to delete this Nursery?"}
          warningText={"This action is irreversable!"}
          viewText={"Nursery Data Here"}
          data={params?.row}
        />
      );
    },
  },
];

const GET_NURSERIES = gql`
  query Query {
    nurseries {
      id
      name
      details
      openingHours
      closingHours
      rating
      address
      phoneNumber
      email
      website
      images
      createdAt
      updatedAt
    }
  }
`;

export default function ViewNurseries() {
  const [anchorElImport, setAnchorElImport] = React.useState(null);
  const [anchorElExport, setAnchorElExport] = React.useState(null);
  const importOpen = Boolean(anchorElImport);
  const exportOpen = Boolean(anchorElExport);

  const { loading, error, data } = useQuery(GET_NURSERIES);

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
            <HouseSidingIcon sx={{ mr: 0.3, mb: 0.4 }} fontSize="large" />
            View Nurseries
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

          <Link href={"/admin/addNursery"}>
            <button className="bg-floraGreen px-3 py-[2px] rounded-md shadow-md text-white hover:scale-[1.02] transition duration-500">
              <HouseSidingIcon sx={{ color: "white", mr: 0.3, mb: 0.3 }} />
              Add Nursery
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
        rows={data?.nurseries || []}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        autoHeight
        disableSelectionOnClick
      />
    </Box>
  );
}
