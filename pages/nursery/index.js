import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../../components/Nursery/Dashboard";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/authContext";
import { CircularProgress } from "@mui/material";

const Index = () => {
  return <Dashboard />;
};

export default Index;
