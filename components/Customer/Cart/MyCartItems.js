import {
  ActionIcon,
  Box,
  Center,
  CloseButton,
  Container,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import React, { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ShopContext } from "../../../context/shopContextProvider";

const MyCartItems = () => {
  const { cartItems, addToCart, removeFromCart, removeCompletelyFromCart } =
    useContext(ShopContext);

  return (
    <Container>
      {cartItems?.map((item, index) => {
        return (
          <Paper
            key={item.id}
            my={"xl"}
            py={"xl"}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
            radius={"md"}
            shadow="xs"
            withBorder
          >
            <CloseButton
              style={{ position: "absolute", top: 10, right: 10 }}
              size={"md"}
              onClick={() => {
                removeCompletelyFromCart(product.id);
              }}
            />
            <Group noWrap pl={"xl"}>
              <Image
                src={item?.productDetails?.images[0] || "no image"}
                height={100}
                width={100}
                radius={"sm"}
              />
              <Stack spacing={"xs"} pl={"xs"}>
                <Text
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "darkslategray",
                  }}
                >
                  {item?.productDetails?.name || "Product Name"}
                </Text>
                <Text
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "grey",
                  }}
                >
                  Rs. {item?.productDetails?.retailPrice || "Price"}
                </Text>

                <Group noWrap>
                  <ActionIcon
                    variant="outline"
                    style={{
                      borderRadius: "20%",
                    }}
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                    disabled={item.quantity === 1}
                  >
                    <AiOutlineMinus />
                  </ActionIcon>

                  <Text>{item.quantity}</Text>

                  <ActionIcon
                    variant="outline"
                    style={{
                      borderRadius: "20%",
                      borderColor: "#62A82C",
                      color: "#62A82C",
                      zIndex: 1,
                    }}
                    onClick={() => {
                      addToCart(product.id);
                    }}
                  >
                    <AiOutlinePlus />
                  </ActionIcon>
                </Group>
              </Stack>

              <Text>Rs. {item.totalPrice}</Text>
            </Group>
          </Paper>
        );
      })}
    </Container>
  );
};

export default MyCartItems;
