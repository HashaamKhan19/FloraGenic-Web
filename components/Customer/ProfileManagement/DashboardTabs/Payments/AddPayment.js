import { Button, Group, Modal, Select, TextInput } from "@mantine/core";
import { useContext, useState } from "react";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useMutation,
  useQuery,
} from "@apollo/client";
import { useForm } from "@mantine/form";

const httpLink = new HttpLink({
  uri: "https://floragenic.herokuapp.com/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");

  operation.setContext({
    headers: {
      Authorization: token ? `${token}` : "",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
  const form = useForm({
    intialValues: {
      cardHolderName: "",
      cardNumber: "",
      cardExpiryDate: "",
      cardCVV: "",
    },
  });

  const [payment] = useMutation(
    ADD_PAYMENT,
    { client },
    {
      onCompleted: () => {
        console.log("Payment Added");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const handleSubmit = (values) => {
    payment({
      variables: {
        payment: {
          cardHolderName: values.cardHolderName,
          cardNumber: values.cardNumber,
          cardExpiryDate: values.cardExpiryDate,
          cardCVV: values.cardCVV,
          cardType: "Visa",
        },
      },
    });
    setOpened(false);
  };

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
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
          {...form.getInputProps("cardNumber")}
        />
        <TextInput
          mt={"md"}
          label="Card Holder Name"
          placeholder="Name on card here"
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
          {...form.getInputProps("cardHolderName")}
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
            {...form.getInputProps("cardExpiryDate")}
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
            {...form.getInputProps("cardCVV")}
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
            type="submit"
          >
            Save
          </Button>
        </Group>
      </form>
    </Modal>
  );
};
export default AddPayment;
