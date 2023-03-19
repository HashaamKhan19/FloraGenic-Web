import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { ViewReviewsIcon } from "../../public/icons/ViewReviewsIcon";
import SearchField from "../Generic/SearchField";
import Export from "../Generic/Export";
import BlockToggle from "../Generic/BlockToggle";
import ReviewActions from "../Generic/ReviewActions";
import ActionIcons from "../Generic/ActionIcons";
import { gql, useQuery } from "@apollo/client";
import LoadingScreen from "../Generic/LoadingScreen";
import Image from "next/legacy/image";
import placeholder from "../../assets/images/placeholder.png";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "Image",
    width: 70,
    align: "center",
    renderCell: (params) => {
      return (
        <Image
          src={params?.row?.image || placeholder}
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
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
    flex: 1,
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
          blocked={params.row.hiddenStatus}
          id={params.row.id}
          type="skill"
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
          type="skill"
          text={"Are you sure you want to delete this skill?"}
          viewText={"Details of Skill Here"}
          warningText={"This action cannot be undone."}
          data={params?.row}
        />
      );
    },
  },
];

const GET_SKILLS = gql`
  query Skills {
    skills {
      id
      name
      description
      image
    }
  }
`;

export default function ViewSkills() {
  const [searchValue, setSearchValue] = React.useState("");

  const { loading, error, data } = useQuery(GET_SKILLS);

  if (loading) return <LoadingScreen />;

  if (error) return <p>Error :(</p>;

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
            <ViewReviewsIcon sx={{ mt: 1 }} fontSize="large" />
            View Skills
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
        rows={data.skills}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        autoHeight
        disableSelectionOnClick
      />
    </Box>
  );
}
