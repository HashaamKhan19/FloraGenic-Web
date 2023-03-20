import { Box } from "@mui/material";
import Image from "next/legacy/image";
import React from "react";
import LandingPageBackground from "../../assets/images/landing-page-bg.jpg";
import LandingPageForeground from "../../assets/images/transparent-leaf-bark.png";

const LandingPage = () => {
  return (
    <Box
      p="100px"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundImage: `url(${LandingPageBackground.src})`,
        objectFit: "cover",
        backgroundSize: "cover",
        position: "relative",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        height="100%"
        width={"100%"}
        bgcolor="rgba(61, 117, 48, 0.5)"
        borderRadius={5}
        sx={{
          backdropFilter: "blur(30px)",
        }}
      ></Box>
      <div
        style={{
          position: "absolute",
          bottom: 50,
          right: 0,
          width: 800,
        }}
      >
        <Image src={LandingPageForeground} alt="Landing Page Foreground" />
      </div>
    </Box>
  );
};

export default LandingPage;
