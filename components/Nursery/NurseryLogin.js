import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/authContext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";

const LOGIN_QUERY = gql`
  mutation Mutation($credentials: UserLoginInput!) {
    login(credentials: $credentials) {
      id
      email
      userType
      bannedStatus
      details {
        ... on NurseryOwner {
          CNIC
          createdAt
          firstName
          gender
          id
          image
          lastName
          nationality
          phoneNumber
        }
      }
      token
    }
  }
`;

const NurseryLogin = () => {
  const { setUser } = useContext(AuthContext);

  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { data, loading, error }] = useMutation(LOGIN_QUERY, {
    onCompleted: (data) => {
      toast.success("Login Successful!");

      localStorage.setItem("token", data.login.token);
      localStorage.setItem("userType", data.login.userType);
      localStorage.setItem("id", data.login.id);

      setUser(data.login.user);

      router.push("/nursery");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (event) => {
    event.preventDefault();
    login({
      variables: {
        credentials: {
          email: email,
          password: password,
          userType: "NurseryOwner",
        },
      },
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "1rem",
        backgroundImage: `url("https://images.unsplash.com/photo-1547936785-c57315d64694?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          maxWidth: "450px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "10px",
          border: "2px solid #62A82C",
        }}
      >
        <form onSubmit={onSubmit}>
          <Typography variant="h5" fontWeight={500} align="center">
            Nursery Owner Login
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            sx={{
              marginTop: "1rem",
              width: "100%",
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            sx={{ marginTop: "1rem", width: "100%" }}
            placeholder="Password"
            type={visible ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={(e) => {
                      setVisible(!visible);
                    }}
                  >
                    {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ marginTop: "1rem" }}
            type="submit"
            fullWidth
          >
            {loading ? <CircularProgress size={30} /> : "Login"}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default NurseryLogin;
