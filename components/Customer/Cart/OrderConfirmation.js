import {
  ActionIcon,
  Badge,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  Stack,
  createStyles,
  Text,
  Button,
  Center,
} from "@mantine/core";
import Link from "next/link";
import React, { useContext } from "react";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import PaymentDetails from "./PaymentDetails";
import { ShopContext } from "../../../context/shopContextProvider";
import { AuthContext } from "../../../context/authContext";

const useStyles = createStyles((theme) => ({
  normalText: {
    color: "darkslategray",
    fontSize: "14px",
  },
  priceText: {
    color: "darkslategray",
    fontSize: "16px",
    fontWeight: 500,
  },
}));

const OrderConfirmation = ({ prevStep, data, selectedAddress }) => {
  const { classes } = useStyles();

  const { user } = useContext(AuthContext);

  const { cartItems, totalPrice } = useContext(ShopContext);

  return (
    <Container size={"xl"} pt={40} pb={"xl"}>
      <Grid gutter={0}>
        <Grid.Col sm={6}>
          <Stack>
            <Paper p={"xl"} shadow="xs">
              <Group pb={"sm"} spacing={"xs"}>
                <Text
                  style={{
                    color: "darkslategray",
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  Delivery Address
                </Text>
              </Group>
              <Paper
                style={{
                  backgroundColor: "#F6F9FC",
                  position: "relative",
                }}
              >
                <Stack spacing={5} py={"xs"} pl={"lg"}>
                  <Group spacing={"xs"} noWrap>
                    <Text
                      weight={425}
                      style={{
                        color: "darkslategray",
                        fontSize: "14px",
                      }}
                    >
                      Address:{" "}
                    </Text>
                    <Text className={classes.normalText}>
                      {selectedAddress?.location} {selectedAddress?.city}
                    </Text>
                  </Group>

                  <Group spacing={"xs"} noWrap>
                    <Text
                      weight={425}
                      style={{
                        color: "darkslategray",
                        fontSize: "14px",
                      }}
                    >
                      Phone Number:{" "}
                    </Text>
                    <Text className={classes.normalText}>
                      {user?.details?.phoneNumber}
                    </Text>
                  </Group>
                </Stack>
              </Paper>
            </Paper>
          </Stack>
          <Paper
            style={{
              backgroundColor: "#F6F9FC",
            }}
            p={"xs"}
            mt={"xl"}
          >
            <Stack>
              <Text
                style={{
                  color: "darkslategray",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Your Order
              </Text>

              {cartItems.map((item, index) => (
                <Group position="apart" key={index}>
                  <Text className={classes.normalText}>
                    {item.quantity} x {item.productDetails.name}
                  </Text>
                  <Text className={classes.priceText}>
                    Rs. {item.totalPrice}
                  </Text>
                </Group>
              ))}

              <Divider />

              <Group position="apart">
                <Text className={classes.normalText}>Subtotal</Text>
                <Text className={classes.priceText}>Rs. {totalPrice}</Text>
              </Group>

              <Group position="apart">
                <Text className={classes.normalText}>Shipping</Text>
                <Text className={classes.priceText}>Rs. 200</Text>
              </Group>

              <Group position="apart">
                <Text className={classes.normalText}>GST</Text>
                <Text className={classes.priceText}>
                  Rs. {Math.floor(totalPrice * 0.18)}
                </Text>
              </Group>

              <Divider />

              <Group position="apart">
                <Text
                  style={{
                    color: "darkslategray",
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  Total
                </Text>
                <Text
                  style={{
                    color: "darkslategray",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  Rs. {totalPrice + 200 + Math.floor(totalPrice * 0.18)}
                </Text>
              </Group>
            </Stack>
          </Paper>
          <Group pt={"lg"}>
            <Button
              variant="outline"
              style={{
                border: "1px solid #62A82C",
                color: "#62A82C",
              }}
              onClick={prevStep}
            >
              Go Back
            </Button>
          </Group>
        </Grid.Col>

        <Grid.Col sm={6} pb={"xl"} pl={"xl"}>
          <PaymentDetails selectedAddress={selectedAddress} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default OrderConfirmation;
