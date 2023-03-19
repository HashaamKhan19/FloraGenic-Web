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
import DataTable from "../Generic/DataTable";

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
  const [rows, setRows] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const { loading, error, data } = useQuery(GET_SKILLS);

  React.useEffect(() => {
    if (data?.skills) {
      setRows(() => {
        return data?.skills?.filter((skill) => {
          return (
            skill?.name?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
            skill?.description
              ?.toLowerCase()
              ?.includes(searchValue.toLowerCase())
          );
        });
      });
    }
  }, [data, searchValue]);

  if (loading) return <LoadingScreen />;

  if (error) return <p>Error :(</p>;

  return (
    <DataTable
      rows={rows}
      columns={columns}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      title="View Skills"
      Icon={ViewReviewsIcon}
      buttonText="Add Skill"
      buttonLink="/admin/addSkill"
    />
  );
}
