import Grid from "@mui/material/Grid";
import React from "react";
import AreaChart from "../Charts/AreaChart";
import FeedbackChart from "../Charts/FeedbackChart";
import GrowthChart from "../Charts/GrowthChart";
import LineChart from "../Charts/LineChart";
import StatisticsCards from "../Charts/StatisticsCards";

import InventoryIcon from "@mui/icons-material/Inventory";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PeopleIcon from "@mui/icons-material/People";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import { gql, useQuery } from "@apollo/client";

import LoadingScreen from "../Generic/LoadingScreen";

const GET_ADMIN_STATS = gql`
  query Stats {
    stats {
      totalUsers
      totalNurseries
      totalProducts
      totalOrders
      feedbackByType {
        type
        count
      }
      productsByCategory {
        category
        count
      }
      usersByType {
        type
        count
      }
    }
  }
`;

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_ADMIN_STATS);

  if (loading) return <LoadingScreen />;

  if (error) return <p>Error :(</p>;

  const { stats } = data;

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="stretch"
        marginBottom={8}
      >
        <Grid item xs={6} sm={6} lg={3}>
          <StatisticsCards
            amount={stats.totalUsers}
            text={"Total Users"}
            icon={<ManageAccountsIcon color="primary" fill="red" />}
            percentage={"1"}
            trend={"up"}
          />
        </Grid>
        <Grid item xs={6} sm={6} lg={3}>
          <StatisticsCards
            amount={stats.totalNurseries}
            text={"Total Nurseries"}
            icon={<PeopleIcon color="primary" />}
            percentage={"10"}
            trend={"down"}
          />
        </Grid>
        <Grid item xs={6} sm={6} lg={3}>
          <StatisticsCards
            amount={stats.totalProducts}
            text={"Total Products"}
            icon={<WarehouseIcon color="primary" />}
            percentage={"15"}
            trend={"up"}
          />
        </Grid>
        <Grid item xs={6} sm={6} lg={3}>
          <StatisticsCards
            amount={stats.totalOrders}
            text={"Total Orders"}
            icon={<InventoryIcon color="primary" />}
            percentage={"7"}
            trend={"up"}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <GrowthChart />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <FeedbackChart
            data={
              stats.feedbackByType &&
              stats.feedbackByType.map((item) => {
                return item.count;
              })
            }
            labels={
              stats.feedbackByType &&
              stats.feedbackByType.map((item) => {
                return item.type;
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <FeedbackChart
            title="Products by Category"
            data={
              stats.productsByCategory &&
              stats.productsByCategory.map((item) => {
                return item.count;
              })
            }
            labels={
              stats.productsByCategory &&
              stats.productsByCategory.map((item) => {
                return item.category;
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <FeedbackChart
            title="Users by Type"
            data={
              stats.usersByType &&
              stats.usersByType.map((item) => {
                return item.count;
              })
            }
            labels={
              stats.usersByType &&
              stats.usersByType.map((item) => {
                return item.type;
              })
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
