import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useMutation,
} from "@apollo/client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const UPDATE_SHIPPING_STATUS = gql`
  mutation OrderUpdate($orderUpdateId: ID!, $input: OrderUpdateInput) {
    orderUpdate(id: $orderUpdateId, input: $input)
  }
`;

const httpLink = new HttpLink({
  uri: "https://floragenic.herokuapp.com/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");

  operation.setContext({
    headers: {
      Authorization: token ? `${token}` : "",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function DispatchToggle({ shippingStatus, id, data }) {
  const [status, setStatus] = useState(shippingStatus);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [updateShippingStatus, { loading }] = useMutation(
    UPDATE_SHIPPING_STATUS,
    {
      client,
      onCompleted: (data) => {
        toast.success("Shipping status updated successfully");
        setStatus(
          status === "Pending"
            ? "Processing"
            : status === "Processing"
            ? "Dispatched"
            : "Delivered"
        );
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const handleBlock = async () => {
    updateShippingStatus({
      variables: {
        orderUpdateId: id,
        input: {
          orderStatus:
            status === "Pending"
              ? "Processing"
              : status === "Processing"
              ? "Dispatched"
              : "Delivered",
        },
      },
    });
  };

  if (loading) return <CircularProgress size={30} />;

  return (
    <>
      <Button
        onClick={handleClick}
        variant="outlined"
        color={status === "Pending" ? "error" : "success"}
        endIcon={
          <KeyboardArrowDownIcon sx={{ marginLeft: -1, marginRight: 1 }} />
        }
        size="small"
        sx={{
          padding: "1px 0",
          borderWidth: "1px",
          justifyContent: "center",
          fontFamily: "poppins",
          fontSize: "10px",
          maxWidth: "80px",
          paddingLeft: 1,
        }}
      >
        {status}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {status === "Pending" && (
          <MenuItem
            onClick={handleBlock}
            sx={{
              minWidth: "60px",
              justifyContent: "center",
              maxHeight: "10px",
              fontSize: "14px",
            }}
          >
            Processing
          </MenuItem>
        )}
        {status === "Processing" && (
          <MenuItem
            onClick={handleBlock}
            sx={{
              minWidth: "65px",
              justifyContent: "center",
              maxHeight: "10px",
              fontSize: "14px",
            }}
          >
            Dispatch
          </MenuItem>
        )}

        {status === "Dispatched" && (
          <MenuItem
            onClick={handleBlock}
            sx={{
              minWidth: "65px",
              justifyContent: "center",
              maxHeight: "10px",
              fontSize: "14px",
            }}
          >
            Delivered
          </MenuItem>
        )}
      </Menu>
    </>
  );
}
