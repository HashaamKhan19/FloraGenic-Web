import {
  ActionIcon,
  CloseButton,
  Divider,
  Group,
  Image,
  NumberInput,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import React, { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { ShopContext } from "../../../context/shopContextProvider";

const CartItemsDrawer = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    removeCompletelyFromCart,
    processing,
  } = useContext(ShopContext);

  console.log("cartItems ->:", cartItems);

  return (
    <>
      {cartItems.map((item, index) => {
        return (
          <>
            <Paper py={"sm"} px={"sm"} key={index}>
              <Group position="apart" noWrap>
                <Group spacing={"xs"} noWrap>
                  <Stack spacing={0} pr={"xs"}>
                    <ActionIcon
                      size={28}
                      variant="default"
                      style={{
                        borderRadius: "20%",
                        borderColor: "#62A82C",
                        color: "#62A82C",
                        zIndex: 1,
                      }}
                      disabled={processing}
                      onClick={() => {
                        addToCart(item?.productID, 1);
                      }}
                    >
                      <FiPlus />
                    </ActionIcon>
                    <Text
                      style={{
                        color: "darkslategray",
                        fontSize: "1rem",
                        textAlign: "center",
                      }}
                      py={4}
                    >
                      {item.quantity}
                    </Text>
                    <ActionIcon
                      size={28}
                      variant="default"
                      style={{
                        borderRadius: "20%",
                      }}
                      onClick={() => {
                        addToCart(item?.productID, -1);
                      }}
                      disabled={processing || item.quantity === 1}
                    >
                      <FiMinus />
                    </ActionIcon>
                  </Stack>
                  <Image
                    src={item?.productDetails?.images[0] || "no image"}
                    alt="ProdImage"
                    width={70}
                    height={70}
                    radius={"md"}
                  />
                  <Stack spacing={1}>
                    <Text size="md" weight={500}>
                      {item?.productDetails?.name || "Product Name"}
                    </Text>
                    <Text size="xs" weight={300}>
                      {item?.productDetails?.category?.name || "Category"}
                    </Text>
                    <Text
                      size="md"
                      weight={500}
                      style={{
                        color: "#C70039",
                      }}
                    >
                      Rs. {item?.productDetails?.retailPrice || "Price"}
                    </Text>
                  </Stack>
                </Group>
                <CloseButton
                  ml={"lg"}
                  size={"lg"}
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                />
              </Group>
            </Paper>
            <Divider my={"sm"} />;
          </>
        );
      })}
    </>
  );
};

export default CartItemsDrawer;
