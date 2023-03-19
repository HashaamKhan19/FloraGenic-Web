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
import DataTable from "../Generic/DataTable";

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

  const [rows, setRows] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const { loading, error, data } = useQuery(GET_NURSERIES);

  React.useEffect(() => {
    if (data?.nurseries) {
      setRows(() => {
        return data?.nurseries?.filter((nursery) => {
          return (
            nursery?.name?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
            nursery?.email?.toLowerCase().includes(searchValue.toLowerCase()) ||
            nursery?.details
              ?.toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            nursery?.address?.toLowerCase().includes(searchValue.toLowerCase())
          );
        });
      });
    }
  }, [data, searchValue]);

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
    <DataTable
      rows={rows}
      columns={columns}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      title="View Nurseries"
      Icon={HouseSidingIcon}
      buttonText="Add Nursery"
      buttonLink="/admin/addNursery"
    />
  );
}
