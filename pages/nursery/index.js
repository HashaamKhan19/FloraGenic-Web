import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../../components/Nursery/Dashboard";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/authContext";
import { CircularProgress } from "@mui/material";

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
        router.push("/loginNursery");
      } else if (userType === "NurseryOwner") {
        setLoading(false);
        router.push("/nursery");
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
