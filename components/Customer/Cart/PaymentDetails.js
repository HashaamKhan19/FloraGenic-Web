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

const PaymentDetails = () => {
  const [checked, setChecked] = useState("card");

  console.log("====================================");
  console.log("checked", checked);
  console.log("====================================");

  return <>{checked === "card" && <Checkout />}</>;
};

export default PaymentDetails;
