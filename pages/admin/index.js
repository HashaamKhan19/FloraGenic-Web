import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useContext, useState } from "react";
import Dashboard from "../../components/Admin/Dashboard";
import { AuthContext } from "../../context/authContext";

const Index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const checkUserType = () => {
      const userType = user?.userType || localStorage.getItem("userType");
      const token = user?.token || localStorage.getItem("token");

      if (!token || !userType) {
        localStorage.clear();
        router.push("/loginAdmin");
      } else if (userType === "Admin") {
        setLoading(false);
        router.push("/admin");
      } else {
        setLoading(false);
        router.push("/");
      }
    };

    checkUserType();
  }, []);

  return <>{loading ? <CircularProgress size={50} /> : <Dashboard />}</>;
};

export default Index;
