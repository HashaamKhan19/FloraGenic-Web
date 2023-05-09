import { gql } from "@apollo/client";
import { Button, Group, Modal, Select, TextInput } from "@mantine/core";
import { useState } from "react";

const ADD_PAYMENT = gql`
  mutation Mutation($payment: PaymentInput!) {
    paymentCreate(payment: $payment) {
      id
      cardHolderName
      cardNumber
      cardExpiryDate
      cardCVV
    }
  }
`;

const AddPayment = ({ opened, setOpened }) => {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiryDate, setCardExpiryDate] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Add Payment Details"
      transition={"fade"}
      transitionDuration={700}
      transitionTimingFunction="ease"
      exitTransitionDuration={700}
      centered
    >
      <TextInput
        mt={"md"}
        label="Card Number"
        placeholder="1234 **** **** ****"
        styles={(theme) => ({
          input: {
            "&:focus-within": {
              borderColor: theme.colors.green[7],
            },
          },
        })}
      />
      <Group noWrap>
        <TextInput
          mt={"md"}
          label="Expiry Date"
          placeholder="12/37"
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
        />
        <TextInput
          mt={"md"}
          label="CVV"
          placeholder="123"
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
        />
      </Group>
      <Group position="right" mt={"lg"}>
        <Button
          style={{
            backgroundColor: "#111",
            color: "white",
          }}
          onClick={() => setOpened(false)}
        >
          Cancel
        </Button>
        <Button
          style={{
            backgroundColor: "#62A82C",
            color: "white",
          }}
        >
          Save
        </Button>
      </Group>
    </Modal>
  );
};
export default AddPayment;
