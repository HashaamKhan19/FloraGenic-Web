import { useQuery } from "@apollo/client";
import * as React from "react";
import { UsersIcon } from "../../../public/icons/UsersIcon";
import DataTable from "../../Generic/DataTable";
import LoadingScreen from "../../Generic/LoadingScreen";
import { columns } from "./columns";
import { GET_USERS } from "./queries";

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
