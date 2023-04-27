import { Container, Grid, Paper, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import DashboardLinks from "./DashboardLinks";

const Dashboard = ({ data, loading, error }) => {
  return (
    <Container size={"xl"} py={"xl"}>
      <DashboardLinks data={data} loading={loading} error={error} />
    </Container>
  );
};

export default Dashboard;
