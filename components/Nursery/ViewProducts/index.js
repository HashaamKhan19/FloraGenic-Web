import { useQuery } from "@apollo/client";
import * as React from "react";
import { AddProductIcon } from "../../../public/icons/AddProductIcon";
import DataTable from "../../Generic/DataTable";
import LoadingScreen from "../../Generic/LoadingScreen";
import { columns } from "./columns";
import { GET_PRODUCTS } from "./queries";

export default function ViewProducts() {
  const [anchorElImport, setAnchorElImport] = React.useState(null);
  const [anchorElExport, setAnchorElExport] = React.useState(null);
  const importOpen = Boolean(anchorElImport);
  const exportOpen = Boolean(anchorElExport);

  const [rows, setRows] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  React.useEffect(() => {
    if (data?.products) {
      setRows(() => {
        return data?.products?.filter((product) => {
          return (
            product?.name?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
            product?.category?.name
              ?.toLowerCase()
              ?.includes(searchValue.toLowerCase()) ||
            product?.description
              ?.toLowerCase()
              ?.includes(searchValue.toLowerCase())
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
      title="View Products"
      Icon={AddProductIcon}
      buttonText="Add Product"
      buttonLink="/admin/addProduct"
    />
  );
}
