import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Image,
  Paper,
  Stack,
  Stepper,
  Text,
} from "@mantine/core";
import { React, useState, useContext } from "react";
import MyCartItems from "./MyCartItems";
import CartDetails from "./CartDetails";
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";
import { ShopContext } from "../../../context/shopContextProvider";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { useForm } from "@mantine/form";
import { useStyles } from "./StepperStyles";
import { AuthContext } from "../../../context/authContext";
import OrderConfirmation from "./OrderConfirmation";

const StepIcon = ({ active, completed, icon }) => {
  const bgColor = completed ? "green" : "transparent";
  const color = completed ? "white" : "black";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        backgroundColor: bgColor,
        color: color,
        fontWeight: "bold",
      }}
    >
      {icon}
    </Box>
  );
};

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

const ViewCart = () => {
  const [active, setActive] = useState(0);

  const { data, loading, error } = useQuery(GET_PRODUCTS);

  const { cartItems } = useContext(ShopContext);
  const { user } = useContext(AuthContext);

  console.log("====================================");
  console.log("cart items hehe", cartItems);
  console.log("====================================");

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      cnic: "",
      address: "",
    },

    validate: (values) => {
      if (active === 1) {
        return {
          name:
            values?.name?.length < 2
              ? "Name must have at least 5 letters"
              : null,
          email: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
            values?.email?.trim()
          )
            ? "Invalid email address"
            : null,
          phoneNumber: !/^\+92[1-9]\d{9}$/.test(values?.phoneNumber?.trim())
            ? "Invalid phone number, must begin with +92"
            : null,
          cnic: !/^[0-9]{5}[0-9]{7}[0-9]$/.test(values?.cnic?.trim())
            ? "Invalid CNIC, dont put dashes, must be 13 digits"
            : null,
          address:
            values?.address?.trim()?.length < 5
              ? "Address must have at least 5 letters"
              : null,
        };
      }
    },
  });

  const handleFormSubmit = (values) => {
    console.log("====================================");
    console.log("values", values);
    console.log("====================================");
  };

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const { classes } = useStyles();

  return (
    <Container size={"xl"} pt={40}>
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        classNames={classes}
        allowNextStepsSelect={false}
        color="green"
      >
        <Stepper.Step
          style={{
            backgroundColor: active >= 0 ? "#62A82C" : "#bfe6a1",
            transition: "all 0.7s ease",
          }}
          label="1. Cart"
        >
          <Grid>
            <Grid.Col sm={cartItems?.length === 0 ? 12 : 8} mt={"xl"}>
              {cartItems?.length === 0 && (
                <Stack align="center" mt={"xl"} pb={"xl"}>
                  <Text
                    style={{
                      fontSize: "20px",
                      fontWeight: 525,
                      color: "darkslategray",
                    }}
                  >
                    Your cart is empty
                  </Text>
                  <Image
                    src="/icons/iconEmpty.png"
                    alt="Empty Cart"
                    width={64}
                    height={64}
                  />
                  <Link href="/customer/products">
                    <Button
                      style={{
                        backgroundColor: "#62A82C",
                        color: "#fff",
                      }}
                      mt={"xs"}
                    >
                      <Center>Shop Now</Center>
                    </Button>
                  </Link>
                </Stack>
              )}
              {data?.products
                ?.filter((product) => {
                  return cartItems.some((item) => item.id === product.id);
                })
                .map((product, index) => {
                  return (
                    <MyCartItems
                      product={product}
                      index={index}
                      key={product.id}
                    />
                  );
                })}
            </Grid.Col>
            <Grid.Col sm={4} pb={"xl"} hidden={cartItems?.length === 0}>
              <CartDetails />
              <Button
                fullWidth
                style={{
                  backgroundColor: "#62A82C",
                  color: "#fff",
                }}
                onClick={() => setActive(1)}
              >
                <Center>Proceed to Details</Center>
              </Button>
            </Grid.Col>
          </Grid>
        </Stepper.Step>
        <Stepper.Step
          style={{
            backgroundColor: active >= 1 ? "#62A82C" : "#bfe6a1",
            transition: "all 0.7s ease",
          }}
          label="2. Details"
          disabled={cartItems?.length === 0}
        >
          <Grid>
            <Grid.Col sm={8}>
              <ShippingDetails
                form={form}
                handleFormSubmit={handleFormSubmit}
              />
            </Grid.Col>
            <Grid.Col sm={4} pb={"xl"}>
              <CartDetails />
              <Stack spacing={"xs"} mb={"xl"}>
                <Button
                  fullWidth
                  style={{
                    backgroundColor: "#62A82C",
                    color: "#fff",
                  }}
                  onClick={nextStep}
                >
                  <Center>Proceed to Payment</Center>
                </Button>
                <Button
                  fullWidth
                  style={{
                    border: "1px solid #62A82C",
                    color: "#62A82C",
                    backgroundColor: "#fff",
                  }}
                  onClick={prevStep}
                >
                  <Center>Back to Cart</Center>
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
        </Stepper.Step>
        <Stepper.Step
          style={{
            backgroundColor: active >= 2 ? "#62A82C" : "#bfe6a1",
            transition: "all 0.7s ease",
          }}
          label="3. Payment"
          disabled={cartItems?.length === 0}
        >
          <Grid>
            <Grid.Col sm={12}>
              <OrderConfirmation prevStep={prevStep} data={data} />
            </Grid.Col>
          </Grid>
        </Stepper.Step>
      </Stepper>
    </Container>
  );
};

export default ViewCart;
