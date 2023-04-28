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

const OrderConfirmation = ({ prevStep, data }) => {
  const { classes } = useStyles();

  const { cartItems } = useContext(ShopContext);

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
                      Zaki Center, i8, Islamabad
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
                    <Text className={classes.normalText}>+9212312312</Text>
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
                    {item.quantity} x Oliver Plant
                  </Text>
                  <Text className={classes.priceText}>$ 20.00</Text>
                </Group>
              ))}

              <Divider />

              <Group position="apart">
                <Text className={classes.normalText}>Subtotal</Text>
                <Text className={classes.priceText}>$ 60.00</Text>
              </Group>

              <Group position="apart">
                <Text className={classes.normalText}>Shipping</Text>
                <Text className={classes.priceText}>$ 10.00</Text>
              </Group>

              <Group position="apart">
                <Text className={classes.normalText}>Tax</Text>
                <Text className={classes.priceText}>$ 0.00</Text>
              </Group>

              <Group position="apart">
                <Text className={classes.normalText}>Discount</Text>
                <Text className={classes.priceText}>$ 0.00</Text>
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
                  $ 70.00
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
          <PaymentDetails />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default OrderConfirmation;
