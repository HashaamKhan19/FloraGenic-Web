import { Box } from "@mui/system";
import React from "react";
import Image from "next/legacy/image";
import { Button, MenuItem, Typography, useMediaQuery } from "@mui/material";
import ControlledTextInput from "../../Generic/ControlledComponents/ControlledTextInput";
import { useForm } from "react-hook-form";
import ControlledSelect from "../../Generic/ControlledComponents/ControlledSelect";
import Link from "next/link";
import AuthLayout from "../AuthLayout";

const SignInCard = () => {
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthLayout handleSubmit={handleSubmit} onSubmit={onSubmit}>
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
          <Link href={"/register"}>
            <Typography
              variant="h6"
              color="#62A82C"
              sx={{ cursor: "pointer" }}
              ml={1}
            >
              Sign Up
            </Typography>
          </Link>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default SignInCard;
