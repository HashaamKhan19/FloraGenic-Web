import { gql, useQuery } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Image from "next/legacy/image";
import Link from "next/link";
import * as React from "react";
import Placeholder from "../../assets/images/placeholder.png";
import { AddProductIcon } from "../../public/icons/AddProductIcon";
import ActionIcons from "../Generic/ActionIcons";
import BlockToggle from "../Generic/BlockToggle";
import DataTable from "../Generic/DataTable";
import Export from "../Generic/Export";
import LoadingScreen from "../Generic/LoadingScreen";
import SearchField from "../Generic/SearchField";

const GET_PRODUCTS = gql`
  query Query($data: ProductSearchInput) {
    products(data: $data) {
      id
      nurseryID
      name
      description
      category {
        name
      }
      hidden
      retailPrice
      wholesalePrice
      stock
      sold
      images
      overallRating
      tags
      createdAt
      updatedAt
      nursery {
        id
        name
      }
    }
  }
`;

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
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
    field: "category",
    headerName: "Category",
    width: 100,
    valueGetter: (params) => {
      return params.row.category.name;
    },
  },
  {
    field: "name",
    headerName: "Product Name",
    width: 150,
  },
  {
    field: "description",
    headerName: "Description",
    width: 150,
    flex: 1,
  },
  {
    field: "nursery",
    headerName: "Nursery",
    width: 280,
    flex: 1,
    valueGetter: (params) => {
      return params.row.nursery.name;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return (
        <BlockToggle
          blocked={params.row.hidden}
          id={params.row.id}
          type="product"
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
          type="product"
          text={"Are you sure you want to delete this product?"}
          viewText={"Details of Product Here"}
          warningText={"This action cannot be undone."}
          data={params?.row}
        />
      );
    },
  },
];

const rows = [
  {
    id: 1,
    image: "Null",
    category: "Tools",
    name: "Axe",
    retail: 123,
    wholeSale: 456,
    quantity: 2,
    nursery: "Liaqatbagh Nursery Rawat Road",
    status: "Active",
    actions: "iconsHere",
  },
];

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
