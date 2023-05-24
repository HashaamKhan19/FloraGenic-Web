import * as React from "react";
import DataTable from "../../Generic/DataTable";
import { columns } from "./columns";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";

export default function ViewReviews({ rows = [] }) {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <DataTable
      rows={rows}
      columns={columns}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      title="View Reviews"
      Icon={HouseSidingIcon}
    />
  );
}
