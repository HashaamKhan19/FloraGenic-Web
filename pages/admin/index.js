import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Dashboard from "../../components/Admin/Dashboard";
import { AuthContext } from "../../context/authContext";

const Index = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const { user } = React.useContext(AuthContext);
  // useEffect(() => {
  //   const userType = user?.userType || localStorage.getItem("userType");
  //   const token = user?.token || localStorage.getItem("token");
  //   if (!token || !userType) {
  //     localStorage.clear();
  //     router.push("/login");
  //   } else if (userType !== "Admin") {
  //     // Go back only if there is a previous page
  //     if (router.asPath !== router.route) {
  //       router.back();
  //     }

  //     // router.back();
  //   }
  //   setLoading(false);
  // }, []);

  return <>{loading ? <CircularProgress size={50} /> : <Dashboard />}</>;
};

export default Index;
