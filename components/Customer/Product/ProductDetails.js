import { Badge, Box, Button, Group, Rating, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useContext } from "react";
import { ShopContext } from "../../../context/shopContextProvider";

const ProductDetails = ({ data, loading, error }) => {
  const matches768 = useMediaQuery("(max-width: 768px)");

  const { cartItems, addToCart, removeFromCart, processing } =
    useContext(ShopContext);

  console.log("====================================");
  console.log("cartItems details", cartItems);
  console.log("====================================");

  return (
    <Box mt={matches768 ? "md" : "0"} px={matches768 ? "md" : "0"}>
      <Text
        weight={600}
        style={{
          fontSize: 28,
          color: "darkslategray",
        }}
      >
        {data?.name || "Product Name"}
      </Text>
      <Group align="center" spacing={"sm"}>
        <Rating value={data?.overallRating} size="md" readOnly />
        <Text
          weight={400}
          style={{
            fontSize: 14,
            color: "darkslategray",
          }}
        >
          {data?.overallRating} ({data?.sold || 0})
        </Text>
      </Group>
      <Group mt={"lg"}>
        <Text
          weight={600}
          style={{
            fontSize: 14,
            color: "darkslategray",
          }}
        >
          Category:{" "}
        </Text>
        <Badge color="green" variant="filled">
          {data?.category?.name || "Category"}
        </Badge>
      </Group>
      <Group spacing={"xs"} mt={"sm"}>
        <Text
          weight={600}
          style={{
            fontSize: 14,
            color: "darkslategray",
          }}
        >
          Seller:
        </Text>
        <Text
          style={{
            fontSize: 14,
            cursor: "pointer",
          }}
          weight={600}
          c={"green"}
        >
          {data?.nursery?.name || "null"}
        </Text>
      </Group>
      <Stack spacing={0}>
        <Text
          weight={600}
          style={{
            fontSize: 14,
            color: "darkslategray",
          }}
          mt={"md"}
        >
          Description:
        </Text>
        <Box
          sx={{
            minHeight: 75,
          }}
        >
          <Text
            mt={"xs"}
            style={{
              color: "darkslategray",
              fontSize: 14,
            }}
            lineClamp={3}
          >
            {data?.description || "null"}
          </Text>
        </Box>
      </Stack>
      <Stack spacing={0}>
        <Text
          weight={600}
          style={{
            fontSize: 23,
            color: "#d4172e",
          }}
          mt={"md"}
        >
          Rs. {data?.retailPrice || 0}
        </Text>
        <Text
          weight={600}
          style={{
            fontSize: 14,
            color: "darkslategray",
          }}
        >
          {data?.stock > 0 ? "In Stock" : "Out of Stock"}
        </Text>
      </Stack>
      <Button
        mt={"lg"}
        color="green"
        disabled={processing || loading || error || data?.stock === 0}
        onClick={() => {
          addToCart(data?.id, 1);
        }}
      >
        Add To Cart
      </Button>
    </Box>
  );
};

export default ProductDetails;
