import { gql, useQuery } from "@apollo/client";
import Dashboard from "../../../components/Customer/ProfileManagement/Dashboard";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/authContext";

export default function CustomerDashboard() {
  const router = useRouter();

  const { user } = useContext(AuthContext);

  return (
    <div
      style={{
        backgroundColor: "#F6F9FC",
      }}
    >
      <Dashboard />
    </div>
  );
}
