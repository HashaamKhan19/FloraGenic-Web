import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import * as React from "react";
import DataTable from "../../Generic/DataTable";
import LoadingScreen from "../../Generic/LoadingScreen";
import { columns } from "./columns";
import { GET_NURSERIES } from "./queries";

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

export default function ViewNurseries() {
  const [anchorElImport, setAnchorElImport] = React.useState(null);
  const [anchorElExport, setAnchorElExport] = React.useState(null);
  const importOpen = Boolean(anchorElImport);
  const exportOpen = Boolean(anchorElExport);

  const [rows, setRows] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const { loading, error, data } = useQuery(GET_NURSERIES, { client });

  React.useEffect(() => {
    if (data?.nurseries) {
      setRows(() => {
        return data?.nurseries?.filter((nursery) => {
          return (
            nursery?.name?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
            nursery?.email?.toLowerCase().includes(searchValue.toLowerCase()) ||
            nursery?.details
              ?.toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            nursery?.address?.toLowerCase().includes(searchValue.toLowerCase())
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
      title="View Nurseries"
      Icon={HouseSidingIcon}
      buttonText="Add Nursery"
      buttonLink="/admin/addNursery"
    />
  );
}
