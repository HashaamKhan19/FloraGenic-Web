import {
  Button,
  Container,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useContext } from "react";
import { ShopContext } from "../../../context/shopContextProvider";
import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS = gql`
  query Query {
    products {
      category {
        name
      }
      description
      hidden
      id
      images
      name
      nursery {
        id
        images
        name
        details
      }
      overallRating
      retailPrice
      sold
      stock
    }
  }
`;

const CartDetails = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  const { cartItems, totalPrice } = useContext(ShopContext);

  return (
    <Container py={"xl"} mt={"xl"} px={0}>
      <Paper p={"xl"} shadow="xs" radius={"md"}>
        <Stack spacing={"xs"}>
          <Group position="apart">
            <Text
              style={{
                color: "grey",
              }}
            >
              Subtotal
            </Text>
            <Text
              style={{
                fontWeight: 500,
                color: "darkslategray",
                fontSize: "1.1rem",
              }}
            >
              Rs. {totalPrice}
            </Text>
          </Group>
          <Group position="apart">
            <Text
              style={{
                color: "grey",
              }}
            >
              Shipping
            </Text>
            <Text
              style={{
                fontWeight: 500,
                color: "darkslategray",
                fontSize: "1.1rem",
              }}
            >
              Rs. 200
            </Text>
          </Group>
          <Group position="apart">
            <Text
              style={{
                color: "grey",
              }}
            >
              GST
            </Text>
            <Text
              style={{
                fontWeight: 500,
                color: "darkslategray",
                fontSize: "1.1rem",
              }}
            >
              Rs. {Math.floor(totalPrice * 0.18)}
            </Text>
          </Group>
          {/* <Group position="apart">
            <Text
              style={{
                color: "grey",
              }}
            >
              Discount
            </Text>
            <Text
              style={{
                fontWeight: 500,
                color: "darkslategray",
                fontSize: "1.1rem",
              }}
            >
              Rs. 0
            </Text>
          </Group> */}
        </Stack>
        <Divider mt={"lg"} mb={"xs"} />
        <Group position="apart">
          <Text
            style={{
              color: "darkslategray",
              fontSize: "1.5rem",
              fontWeight: 500,
            }}
          >
            Total
            <Text
              style={{
                color: "grey",
                fontSize: "0.7rem",
                fontWeight: 400,
              }}
            >
              Inclusive of all taxes
            </Text>
          </Text>
          <Text
            style={{
              color: "darkslategray",
              fontSize: "1.5rem",
              fontWeight: 500,
            }}
          >
            Rs. {totalPrice + 200 + Math.floor(totalPrice * 0.18)}
          </Text>
        </Group>
        {/* <Stack mt={"lg"}>
          <TextInput
            placeholder="Enter Coupon Code"
            style={{ width: "100%" }}
            radius="sm"
            styles={(theme) => ({
              input: {
                "&:focus-within": {
                  borderColor: theme.colors.green[7],
                },
              },
            })}
          />
          <Button
            variant="outline"
            style={{
              border: "1px solid #62A82C",
              color: "#62A82C",
            }}
          >
            Apply Coupon
          </Button>
        </Stack> */}
      </Paper>
    </Container>
  );
};

export default CartDetails;
