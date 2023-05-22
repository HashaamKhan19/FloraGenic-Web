import React, { useEffect } from "react";
import Hero from "../../components/Customer/Hero/Hero";
import { AuthContext } from "../../context/authContext";
import { useRouter } from "next/router";

export default function Index() {
  return (
    <div
      style={{
        backgroundColor: "#F6F9FC",
      }}
    >
      <Hero />
    </div>
  );
}
