import {
  Container,
  Grid,
  Paper,
  Radio,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import Checkout from "./Checkout";

const PaymentDetails = ({ selectedAddress }) => {
  const [checked, setChecked] = useState("card");

  return (
    <>{checked === "card" && <Checkout selectedAddress={selectedAddress} />}</>
  );
};

export default PaymentDetails;
