import React from "react";
import EditAdmin from "../../../components/Generic/pfpManagement/EditAdmin";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

const GET_ADMIN = gql`
  query Query {
    profileDetails {
      id
      email
      userType
      bannedStatus
      token
    }
  }
`;

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

export default function Settings() {
  const { data, loading, error } = useQuery(GET_ADMIN, { client });

  console.log("dataL:", data);

  return (
    <>
      <EditAdmin data={data} loading={loading} error={error} />
    </>
  );
}
