import { gql, useQuery } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Image from "next/legacy/image";
import Link from "next/link";
import * as React from "react";
import { CategoryIcon } from "../../public/icons/CategoryIcon";
import ActionIcons from "../Generic/ActionIcons";
import BlockToggle from "../Generic/BlockToggle";
import DataTable from "../Generic/DataTable";
import Export from "../Generic/Export";
import LoadingScreen from "../Generic/LoadingScreen";
import SearchField from "../Generic/SearchField";

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
          src={params?.row?.image}
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
  { field: "name", headerName: "Category Name", width: 200 },
  {
    field: "description",
    headerName: "Category Description",
    width: 220,
    flex: 1,
  },
  {
    field: "hiddenStatus",
    headerName: "Status",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return (
        <BlockToggle
          blocked={params.row.hiddenStatus}
          id={params.row.id}
          type="category"
          hide
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
          type="category"
          viewText="Details of Category"
          text="Are you sure you want to delete this category?"
          warningText={"This action cannot be undone."}
          data={params?.row}
        />
      );
    },
  },
];

const GET_CATEGORIES = gql`
  query Categories {
    categories {
      id
      name
      description
      hiddenStatus
      image
      createdAt
      updatedAt
    }
  }
`;

const rows = [
  {
    id: 1,
    image: "Null",
    categoryName: "Tools",
    categoryDescription: "Tools serve as Tools",
    status: "Active",
    actions: "iconsHere",
  },
];

export default function ViewCategories() {
  const [rows, setRows] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  React.useEffect(() => {
    if (data?.categories) {
      setRows(() => {
        return data?.categories?.filter((category) => {
          return (
            category?.name
              ?.toLowerCase()
              ?.includes(searchValue.toLowerCase()) ||
            category?.description
              ?.toLowerCase()
              ?.includes(searchValue.toLowerCase())
          );
        });
      });
    }
  }, [data, searchValue]);

  if (loading) return <LoadingScreen />;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <DataTable
      rows={rows}
      columns={columns}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      title="View Categories"
      Icon={CategoryIcon}
      buttonText="Add Category"
      buttonLink="/admin/addCategory"
    />
  );
}
