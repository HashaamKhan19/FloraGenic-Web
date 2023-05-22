import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useContext, useState } from "react";
import Dashboard from "../../components/Admin/Dashboard";
import { AuthContext } from "../../context/authContext";

const Index = () => {
  return <Dashboard />;
};

export default Index;
