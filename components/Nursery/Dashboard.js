import React from "react";
import Grid from "@mui/material/Grid";
import GrowthChart from "../Charts/GrowthChart";
import FeedbackChart from "../Charts/FeedbackChart";
import StatisticsCards from "../Charts/StatisticsCards";
import AreaChart from "../Charts/AreaChart";
import LineChart from "../Charts/LineChart";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PeopleIcon from "@mui/icons-material/People";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import InventoryIcon from "@mui/icons-material/Inventory";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";
import { ShoppingBag } from "@mui/icons-material";

const GET_DASHBOARD_STATS = gql`
  query StatsNursery {
    statsNursery {
      totalNurseries
      totalOrders
      totalProducts
      productsByCategory {
        category
        count
      }
    }
  }
`;

const httpLink = new HttpLink({
  uri: "https://floragenic.herokuapp.com/graphql",
  // uri: "http://localhost:4000/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: localStorage.getItem("token") || "",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_DASHBOARD_STATS, {
    client,
  });

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="stretch"
        marginBottom={8}
      >
        <Grid item xs={6} sm={6} lg={4}>
          <StatisticsCards
            amount={data?.statsNursery?.totalNurseries || 0}
            text={"Total Nurseries"}
            icon={<WarehouseIcon color="primary" />}
            percentage={"15"}
            trend={"up"}
          />
        </Grid>
        <Grid item xs={6} sm={6} lg={4}>
          <StatisticsCards
            amount={data?.statsNursery?.totalProducts || 0}
            text={"Total Product"}
            icon={<InventoryIcon color="primary" />}
            percentage={"7"}
            trend={"up"}
          />
        </Grid>
        <Grid item xs={6} sm={6} lg={4}>
          <StatisticsCards
            amount={data?.statsNursery?.totalOrders || 0}
            text={"Total Orders"}
            icon={<ShoppingBag color="primary" fill="red" />}
            percentage={"1"}
            trend={"up"}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <FeedbackChart
            title="Products by Category"
            data={
              data?.statsNursery?.productsByCategory &&
              data?.statsNursery?.productsByCategory.map((item) => {
                return item.count;
              })
            }
            labels={
              data?.statsNursery?.productsByCategory &&
              data?.statsNursery?.productsByCategory.map((item) => {
                return item.category;
              })
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
