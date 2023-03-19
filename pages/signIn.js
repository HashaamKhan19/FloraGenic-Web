import { Box } from "@mui/system";
import React from "react";
import Image from "next/legacy/image";
import { Button, MenuItem, Typography, useMediaQuery } from "@mui/material";
import ControlledTextInput from "../components/Generic/ControlledComponents/ControlledTextInput";
import { useForm } from "react-hook-form";
import ControlledSelect from "../components/Generic/ControlledComponents/ControlledSelect";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

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
        mx={2}
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
              Welcome Back
            </Typography>
          </Box>
        </Box>
        <Box
          flex={1}
          boxSizing={"border-box"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
        >
          <Box
            alignItems={"center"}
            display="flex"
            flexDirection={"column"}
            width={"100%"}
          >
            <Typography variant="h4" fontWeight={600}>
              Sign In
            </Typography>
            <Typography variant="h6">Log into your account</Typography>
          </Box>

          <Box
            width={"100%"}
            px={isMobile ? 5 : 10}
            display="flex"
            flexDirection={"column"}
            gap={2}
          >
            <ControlledSelect
              control={control}
              name={"userType"}
              required
              defaultValue="Customer"
            >
              <MenuItem value="Customer">Customer</MenuItem>
              <MenuItem value="Gardener">Gardener</MenuItem>
              <MenuItem value="NurseryOwner">Nursery Owner</MenuItem>
            </ControlledSelect>

            <ControlledTextInput
              control={control}
              name="email"
              required
              fullWidth
              placeholder="Email"
            />
            <ControlledTextInput
              control={control}
              name="email"
              required
              fullWidth
              placeholder="Password"
            />
          </Box>

          <Box width={"100%"} px={isMobile ? 5 : 10}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                py: 2,
                borderRadius: 20,
                bgcolor: "#62A82C",
                color: "white",
                mb: 2,
              }}
            >
              Login
            </Button>
            <Box display={"flex"} justifyContent="center">
              <Typography variant="h6" textAlign={"center"}>
                Don&apos;t have an account?
              </Typography>
              <Typography
                variant="h6"
                color="#62A82C"
                sx={{ cursor: "pointer" }}
                ml={1}
              >
                Sign Up
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
