import {
  Box,
  Button,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import ControlledSelect from "../Generic/ControlledComponents/ControlledSelect";
import ControlledTextInput from "../Generic/ControlledComponents/ControlledTextInput";

import Logo from "../../public/Logo/floraGenic.png";

const AuthLayout = ({ children, onSubmit, handleSubmit }) => {
  const isTablet = useMediaQuery("(max-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#ebf6db",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        maxWidth={"1280px"}
        maxHeight={"800px"}
        width={"100%"}
        height={"100%"}
        display={"flex"}
        borderRadius={"30px"}
        overflow={"hidden"}
        bgcolor={"white"}
      >
        <Box
          position={"relative"}
          flex={1}
          height={"100%"}
          display={isTablet && "none"}
        >
          <Image
            src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
          <Box
            height={"100%"}
            width={"100%"}
            position={"absolute"}
            display="flex"
            alignItems={"center"}
            bgcolor={"rgba(0,0,0,0.3)"}
          >
            <Typography
              variant="h4"
              fontWeight={600}
              color={"white"}
              textAlign={"center"}
              width={"100%"}
            >
              Hello, Friend!
            </Typography>
          </Box>
        </Box>
        <form
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 30,
            position: "relative",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            style={{
              top: "20px",
              position: "absolute",
            }}
          >
            <Image src={Logo} alt="logo" width={120} height={72} />
          </div>
          {children}
        </form>
      </Box>
    </Box>
  );
};

export default AuthLayout;
