import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import * as React from "react";
import { UsersIcon } from "../../../public/icons/UsersIcon";
import ActionIcons from "../../Generic/ActionIcons";
import BlockToggle from "../../Generic/BlockToggle";
import Export from "../../Generic/Export";
import SearchField from "../../Generic/SearchField";

// GraphQL
import { gql, useQuery } from "@apollo/client";
import { Button, Link } from "@mui/material";
import Image from "next/legacy/image";
import placeholder from "../../../assets/images/placeholder.png";
import LoadingScreen from "../../Generic/LoadingScreen";

const DataTable = ({
  columns,
  rows,
  searchValue,
  setSearchValue,
  title,
  Icon,
  buttonText,
  buttonLink,
}) => {
  const [pageSize, setPageSize] = React.useState(10);
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
            <Icon sx={{ mr: 1, mb: 0.3 }} fontSize="medium" />
            {title}
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
          <SearchField
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <Link href={buttonLink}>
            <button className="bg-floraGreen px-3 py-1 rounded-md shadow-md text-white hover:scale-[1.02] transition duration-500">
              <Icon sx={{ color: "white", mr: 1, mb: 0.3 }} fontSize="small" />
              {buttonText}
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
        rows={rows}
        columns={columns}
        pagination
        pageSize={pageSize}
        rowsPerPageOptions={[10, 25, 50]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        checkboxSelection
        autoHeight
        disableSelectionOnClick
      />
    </Box>
  );
};

export default DataTable;
