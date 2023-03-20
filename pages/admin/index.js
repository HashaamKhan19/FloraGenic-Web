import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Dashboard from "../../components/Admin/Dashboard";

const Index = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    const token = localStorage.getItem("token");
    if (!token || !userType) {
      localStorage.clear();
      router.push("/login");
    }
    if (userType !== "admin") {
      router.back();
    }
    setLoading(false);
  }, []);

  return <>{loading ? <CircularProgress size={50} /> : <Dashboard />}</>;
};

export default Index;
