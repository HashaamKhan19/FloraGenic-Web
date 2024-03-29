import {
  ActionIcon,
  Badge,
  Box,
  Burger,
  Button,
  Divider,
  Grid,
  Group,
  Image,
  Indicator,
  Paper,
  Stack,
  Stepper,
  StepperProps,
  Text,
  createStyles,
} from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiTwotoneCheckCircle } from "react-icons/ai";
import { BiPackage } from "react-icons/bi";
import { BsBagCheckFill, BsCheckCircleFill, BsTruck } from "react-icons/bs";
import { FaGifts } from "react-icons/fa";
import ProductReview from "./ProductReview";
import { useMediaQuery } from "@mantine/hooks";
import { HiOutlineDownload } from "react-icons/hi";

const useStyles = createStyles(() => ({
  customText: {
    fontWeight: 500,
    fontSize: "14px",
    color: "darkslategray",
  },
  customText2: {
    fontWeight: 500,
    fontSize: "16px",
    color: "darkslategray",
  },
  customText3: {
    fontWeight: 500,
    fontSize: "14px",
    color: "gray",
  },
  customText4: {
    fontSize: "1.1rem",
    fontWeight: 500,
    color: "darkslategray",
  },
}));

const OrderDetails = ({ orderDetails }) => {
  const [active, setActive] = useState(0);
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const match768 = useMediaQuery("(max-width: 768px)");
  const match550 = useMediaQuery("(max-width: 550px)");

  useEffect(() => {
    switch (orderDetails?.orderStatus) {
      case "Pending":
        setActive(0);
        break;
      case "Processing":
        setActive(1);
        break;
      case "Shipped":
        setActive(2);
        break;
      case "Delivered":
        setActive(3);
        break;
    }
  }, [orderDetails]);

  function StyledStepper(props) {
    return (
      <Stepper
        p={"xl"}
        styles={{
          stepBody: {
            display: "none",
          },

          step: {
            padding: 0,
          },

          stepIcon: {
            borderWidth: 0,
          },

          separator: {
            marginLeft: -2,
            marginRight: -2,
            height: 3,
          },

          separatorActive: {
            backgroundColor: "#62A82C",
          },
        }}
        active={2}
        {...props}
        size="xl"
      />
    );
  }

  return (
    <>
      <Group position="apart">
        <Group spacing={"xs"}>
          <BsBagCheckFill size={22} color="#62A82C" />
          <Text
            style={{
              fontWeight: 500,
              fontSize: "24px",
              color: "darkslategray",
            }}
          >
            Order Details
          </Text>
        </Group>
      </Group>

      <Paper p={"xl"} mt={"lg"} shadow="xs" radius={"md"}>
        <StyledStepper active={active}>
          <Stepper.Step
            completedIcon={
              <>
                <BiPackage size={30} />
                <AiOutlineCheckCircle
                  size={16}
                  style={{
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                    zIndex: 1,
                    backgroundColor: "gray",
                    fill: "white",
                    borderRadius: "50%",
                  }}
                />
              </>
            }
            icon={<BiPackage size={30} />}
            color="#62A82C"
            style={{
              position: "relative",
            }}
          />
          <Stepper.Step
            icon={<BsTruck size={28} />}
            completedIcon={
              <>
                <BsTruck size={28} />
                <AiOutlineCheckCircle
                  size={16}
                  style={{
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                    zIndex: 1,
                    backgroundColor: "gray",
                    fill: "white",
                    borderRadius: "50%",
                  }}
                />
              </>
            }
            color="#62A82C"
            style={{
              position: "relative",
            }}
          />
          <Stepper.Step
            icon={<FaGifts size={28} />}
            completedIcon={
              <>
                <FaGifts size={28} />
                <AiOutlineCheckCircle
                  size={16}
                  style={{
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                    zIndex: 1,
                    backgroundColor: "gray",
                    fill: "white",
                    borderRadius: "50%",
                  }}
                />
              </>
            }
            color="#62A82C"
            style={{
              position: "relative",
            }}
          />
        </StyledStepper>
        <Group pt={"xl"} position="right">
          <Badge variant="light" c={"#62A82C"} size="lg">
            <Text c={"#62A82C"} weight={400}>
              Estimated Delivery Date 4th October
            </Text>
          </Badge>
        </Group>
      </Paper>

      <Paper bg={"#e5e5e5"} mt={"xl"} radius={"md"} withBorder>
        <Group position="apart" py={"xs"} px={"md"}>
          <Group>
            <Text className={classes.customText3}>Order Id:</Text>
            <Text className={classes.customText}>{orderDetails?.id}</Text>
          </Group>
          <Group>
            <Text className={classes.customText3}>Placed On:</Text>
            <Text className={classes.customText}>
              {new Date(
                parseInt(orderDetails?.orderingDate)
              ).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </Text>
          </Group>
        </Group>

        {orderDetails?.productsDetails?.map((item, index) => {
          return (
            <Paper
              key={item.id}
              py={"xl"}
              m={"xs"}
              style={{
                borderBottomLeftRadius: 7,
                borderBottomRightRadius: 7,
              }}
            >
              <Group position="apart">
                <Group noWrap pl={"xl"}>
                  <Image
                    src={item?.images?.[0]}
                    height={100}
                    width={100}
                    radius={"sm"}
                  />
                  <Stack spacing={"xs"} pl={"xs"}>
                    <Text className={classes.customText4}>{item.name}</Text>
                    <Text className={classes.customText3}>
                      Rs. {item.retailPrice} x{" "}
                      {orderDetails?.products?.[index]?.quantity}
                    </Text>
                  </Stack>
                </Group>

                <Group hidden={match768 ? true : false}>
                  <Text className={classes.customText3}>
                    Product Category:{" "}
                  </Text>
                  <Text
                    c={"#62A82C"}
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    {item.category?.name}
                  </Text>
                </Group>

                <Group ml={match550 ? "xl" : 0}>
                  <Button
                    variant="light"
                    c={"#62A82C"}
                    mr={"lg"}
                    onClick={() => {
                      setOpened(true);
                    }}
                  >
                    <Text weight={400}>Write a Review</Text>
                  </Button>
                </Group>
              </Group>
            </Paper>
          );
        })}
      </Paper>

      <Grid>
        <Grid.Col md={6}>
          <Paper mt={"xl"} radius={"md"} p={"xl"} withBorder>
            <Stack spacing={"lg"}>
              <Text className={classes.customText2}>Shipping Address</Text>
              <Text className={classes.customText3}>
                i8 Markaz, Zaki Center, Islamabad
              </Text>
            </Stack>
          </Paper>
          <Group position="right" mt={"md"}>
            <Button
              leftIcon={<HiOutlineDownload size={20} />}
              style={{
                backgroundColor: "#62A82C",
                color: "White",
              }}
            >
              Export Data to CSV
            </Button>
          </Group>
        </Grid.Col>
        <Grid.Col md={6}>
          <Paper mt={"xl"} radius={"md"} withBorder p={"xl"}>
            <Stack>
              <Text className={classes.customText4}>Total Summary</Text>
              <Group position="apart">
                <Text className={classes.customText}>Subtotal</Text>
                <Text className={classes.customText3}>
                  Rs.{" "}
                  {orderDetails?.totalPrice -
                    200 -
                    Math.floor(orderDetails?.totalPrice * 0.18)}
                </Text>
              </Group>
              <Group position="apart">
                <Text className={classes.customText}>Delivery Charges</Text>
                <Text className={classes.customText3}>Rs. 200</Text>
              </Group>
              <Group position="apart">
                <Text className={classes.customText}>GST</Text>
                <Text className={classes.customText3}>
                  Rs. {Math.floor(orderDetails?.totalPrice * 0.18)}
                </Text>
              </Group>

              <Divider />

              <Group position="apart">
                <Text className={classes.customText2}>Total</Text>
                <Text className={classes.customText2}>
                  Rs. {orderDetails?.totalPrice}
                </Text>
              </Group>

              <Group position="apart">
                <Text className={classes.customText}>Payment Method </Text>
                <Text className={classes.customText3}>
                  {orderDetails?.paymentType}
                </Text>
              </Group>

              <Group position="apart">
                <Text className={classes.customText}>Payment Status </Text>
                <Text className={classes.customText3}>
                  {orderDetails?.paymentStatus}
                </Text>
              </Group>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>

      <ProductReview opened={opened} setOpened={setOpened} />
    </>
  );
};

export default OrderDetails;
