import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import * as React from "react";
import { UsersIcon } from "../../public/icons/UsersIcon";
import ActionIcons from "../Generic/ActionIcons";
import BlockToggle from "../Generic/BlockToggle";
import Export from "../Generic/Export";
import SearchField from "../Generic/SearchField";

// GraphQL
import { gql, useQuery } from "@apollo/client";
import { Button, Link } from "@mui/material";
import Image from "next/legacy/image";
import placeholder from "../../assets/images/placeholder.png";
import LoadingScreen from "../Generic/LoadingScreen";

import DataTable from "../Generic/DataTable";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "image",
    headerName: "Image",
    width: 70,
    align: "center",
    renderCell: (params) => {
      return (
        <Image
          src={params?.row?.details?.image || placeholder}
          alt={"profile"}
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
    field: "fullName",
    headerName: "Full name",
    width: 200,
    flex: 1,
    valueGetter: (params) =>
      `${params?.row?.details?.firstName || ""} ${
        params?.row?.details?.lastName || ""
      }`,
  },
  { field: "userType", headerName: "Role", width: 120 },
  { field: "email", headerName: "Email Address", width: 200, flex: 1 },
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
    width: 80,
    valueGetter: (params) => params?.row?.details?.gender || "N/A",
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      console.log(params);
      return (
        <BlockToggle
          blocked={params.row.bannedStatus}
          id={params.row.id}
          type="user"
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
          type="user"
          text={"Are you sure you want to delete this User?"}
          warningText={"This action is irreversable!"}
          viewText={"User Data Here"}
          data={params?.row}
        />
      );
    },
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

          phoneNumber
          gender
          CNIC
          image
          createdAt
          updatedAt
        }
        ... on Gardener {
          id
          firstName
          lastName
          city
          phoneNumber
          gender
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
  const [rows, setRows] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [pageSize, setPageSize] = React.useState(10);

  const { loading, error, data, refetch } = useQuery(GET_USERS);

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

  React.useEffect(() => {
    if (data?.users?.length) {
      setRows(() => {
        return data?.users?.filter((user) => {
          return (
            (user?.details?.firstName + " " + user?.details?.lastName)
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            user?.email?.toLowerCase().includes(searchValue.toLowerCase()) ||
            user?.userType?.toLowerCase().includes(searchValue.toLowerCase())
          );
        });
      });
    }
  }, [data, searchValue]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return `Error! ${error.message}`;
  }

  return (
    <DataTable
      rows={rows}
      columns={columns}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      title="View Users"
      Icon={UsersIcon}
      buttonText="Add User"
      buttonLink="/admin/addUser"
    />
  );
}
