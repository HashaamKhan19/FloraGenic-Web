import { gql, useQuery } from "@apollo/client";
import {
  ActionIcon,
  Box,
  Button,
  CloseButton,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { ShopContext } from "../../../context/shopContextProvider";
import CartItemsDrawer from "./CartItemsDrawer";

export default function CartItem({ closeDrawer }) {
  const { cartItems } = useContext(ShopContext);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <Box style={{ height: "calc(100vh - 200px)", overflowY: "scroll" }}>
      <CartItemsDrawer />

      {cartItems.length !== 0 && (
        <Stack
          style={{
            position: "absolute",
            bottom: 5,
            left: 0,
            right: 0,
            padding: "1rem",
          }}
          spacing={"sm"}
        >
          <Link
            href={"/customer/viewCart"}
            style={{
              width: "100%",
            }}
          >
            <Button
              style={{
                backgroundColor: "#62A82C",
                color: "white",
                width: "100%",
              }}
              onClick={closeDrawer}
            >
              Checkout Now (Rs. {totalAmount})
            </Button>
          </Link>

          <Link
            href={"/customer/viewCart"}
            style={{
              width: "100%",
            }}
          >
            <Button
              style={{
                backgroundColor: "white",
                color: "#62A82C",
                border: "1px solid #62A82C",
                width: "100%",
              }}
              onClick={closeDrawer}
            >
              View Cart ({cartItems.reduce((total, item) => total + 1, 0)})
            </Button>
          </Link>
        </Stack>
      )}
    </Box>
  );
}
