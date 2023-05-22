import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";
import * as React from "react";
import { CategoryIcon } from "../../../public/icons/CategoryIcon";
import DataTable from "../../Generic/DataTable";
import LoadingScreen from "../../Generic/LoadingScreen";
import { columns } from "./columns";

import { GET_CATEGORIES } from "./queries";
const httpLink = new HttpLink({
  uri: "https://floragenic.herokuapp.com/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");

  operation.setContext({
    headers: {
      Authorization: token ? `${token}` : "",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function ViewCategories() {
  const [rows, setRows] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const { data, loading, error } = useQuery(GET_CATEGORIES, {
    client,
  });

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
