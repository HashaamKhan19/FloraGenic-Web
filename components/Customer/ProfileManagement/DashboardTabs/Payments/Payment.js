import {
  ActionIcon,
  Button,
  Grid,
  Group,
  Modal,
  Paper,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import { AiOutlineCreditCard, AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import AddPayment from "./AddPayment";
import EditPayment from "./EditPayment";
import DeletePayment from "./DeletePayment";

const payments = [
  {
    id: 1,
    name: "Visa",
    number: "**** **** **** 1234",
    expiry: "12/2024",
  },
  {
    id: 2,
    name: "Mastercard",
    number: "**** **** **** 1234",
    expiry: "12/2024",
  },
];

const Payment = () => {
  const match768 = useMediaQuery("(max-width: 768px)");
  const match1000 = useMediaQuery("(max-width: 1000px)");

  const [opened, setOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);
  const [deleteOpened, setDeleteOpened] = useState(false);

  return (
    <>
      <Group position="apart" mt={match1000 ? "xl" : "0"} mb={"xl"}>
        <Group spacing={"xs"}>
          <AiOutlineCreditCard size={22} color="#62A82C" />
          <Text
            style={{
              fontWeight: 500,
              fontSize: "24px",
              color: "darkslategray",
            }}
          >
            My Payments
          </Text>
        </Group>

        <Button variant="light" c={"#62A82C"} onClick={() => setOpened(true)}>
          <Text weight={400}>Add Payment Method</Text>
        </Button>
      </Group>
      {payments.map((payment) => (
        <Paper key={payment.id} p={"md"} my={"xs"} shadow="xs">
          <Grid>
            <Grid.Col span={8}>
              <Group
                noWrap
                spacing={"xl"}
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text maw={100} truncate color="darkslategray">
                  {payment.name}
                </Text>
                <Text truncate maw={200} color="darkslategray">
                  {payment.number}
                </Text>
                <Text hidden={match768 ? true : false} color="darkslategray">
                  {payment.expiry}
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={4}>
              <Group spacing={"md"} position="right" noWrap>
                <ActionIcon
                  variant="light"
                  color="blue"
                  size="lg"
                  onClick={() => setEditOpened(true)}
                >
                  <CiEdit size={22} />
                </ActionIcon>
                <ActionIcon
                  variant="light"
                  color="red"
                  size="lg"
                  onClick={() => setDeleteOpened(true)}
                >
                  <AiOutlineDelete size={21} />
                </ActionIcon>
              </Group>
            </Grid.Col>
          </Grid>
        </Paper>
      ))}

      <AddPayment opened={opened} setOpened={setOpened} />
      <EditPayment editOpened={editOpened} setEditOpened={setEditOpened} />
      <DeletePayment
        deleteOpened={deleteOpened}
        setDeleteOpened={setDeleteOpened}
      />
    </>
  );
};

export default Payment;
