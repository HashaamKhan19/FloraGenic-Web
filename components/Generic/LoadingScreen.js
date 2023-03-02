import { Box } from "@mui/material";
import Lottie from "lottie-react";
import React from "react";
import data from "../../assets/animations/loading-animation.json";

const LoadingScreen = () => {
  return (
    <Box
      height={"calc(100% - 64px)"}
      width={"100%"}
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent="center"
    >
      <Lottie
        animationData={data}
        loop={true}
        style={{
          minHeight: "300px",
          minWidth: "300px",
          maxHeight: "500px",
          maxWidth: "500px",
          height: "100%",
          width: "100%",
        }}
      />
    </Box>
  );
};

export default LoadingScreen;
