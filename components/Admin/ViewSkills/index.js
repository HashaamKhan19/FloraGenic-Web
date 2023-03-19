import { useQuery } from "@apollo/client";
import * as React from "react";
import { ViewReviewsIcon } from "../../../public/icons/ViewReviewsIcon";
import DataTable from "../../Generic/DataTable";
import LoadingScreen from "../../Generic/LoadingScreen";
import { columns } from "./columns";
import { GET_SKILLS } from "./queries";

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
