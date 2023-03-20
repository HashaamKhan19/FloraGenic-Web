import { gql, useQuery } from "@apollo/client";
import { Box, Chip, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import { ViewReviewsIcon } from "../../../public/icons/ViewReviewsIcon";
import ActionIcons from "../../Generic/ActionIcons";
import DataTable from "../../Generic/DataTable";
import Export from "../../Generic/Export";
import LoadingScreen from "../../Generic/LoadingScreen";
import SearchField from "../../Generic/SearchField";
import { columns } from "./columns";
import { GET_ORDERS } from "./queries";

export default function ViewOrders() {
  const { loading, error, data } = useQuery(GET_ORDERS);

  const [rows, setRows] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  React.useEffect(() => {
    if (data?.orders?.length) {
      console.log(data);
      setRows(() => {
        return data?.orders?.filter((order) => {
          return (
            (
              order?.customerDetails?.firstName +
              " " +
              order?.customerDetails?.lastName
            )
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            order?.customerDetails?.userDetails?.email
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          );
        });
      });
    }
  }, [data, searchValue]);
  if (loading) return <LoadingScreen />;
  return (
    <DataTable
      rows={rows}
      columns={columns}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      title="View Orders"
      Icon={ViewReviewsIcon}
    />
  );
}
