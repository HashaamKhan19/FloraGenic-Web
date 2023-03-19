import * as React from "react";
import DataTable from "../../Generic/DataTable";
import { columns } from "./columns";

const rows = [
  {
    id: 1,
    image: "Null",
    type: "Nursery",
    name: "Hashaam",
    date: "12/12/12",
    ratings: 5,
    status: "Active",
    actions: "iconsHere",
  },
  {
    id: 2,
    image: "Null",
    type: "Product",
    name: "Abdullah",
    date: "12/12/12",
    review: "Bad Product",
    ratings: 5,
    status: "Active",
    actions: "iconsHere",
  },
];

export default function ViewReviews() {
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
