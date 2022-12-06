import React from "react";
import Image from "next/image";
import LoaderSrc from "../../assets/loader2.gif";
import { Box, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Image src={LoaderSrc} alt="Loading..." width={300} />
      <Typography variant="body1">Loading. Please wait..</Typography>
    </Box>
  );
};

export default Loader;
