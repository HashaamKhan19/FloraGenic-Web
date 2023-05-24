import React, { useContext } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button } from "@mantine/core";
import { toast } from "react-hot-toast";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useMutation,
} from "@apollo/client";
import { AuthContext } from "../../../context/authContext";
import { ShopContext } from "../../../context/shopContextProvider";
import { useRouter } from "next/router";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  formStyles: {
    display: "flex",
    width: "500px",
    flexDirection: "column",
  },
};

const CREATE_ORDER = gql`
  mutation OrderCreate($input: OrderCreateInput) {
    orderCreate(input: $input)
  }
`;

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

const PaymentScreen = ({ selectedAddress }) => {
  const stripe = useStripe();
  const elements = useElements();

  const { user } = useContext(AuthContext);
  const { setCartItems } = useContext(ShopContext);
  const router = useRouter();

  const [createOrder] = useMutation(CREATE_ORDER, {
    client: client,
    onCompleted: (data) => {
      toast.success("Payment Successful. Order Placed!");
      setCartItems([]);
      router.push("/customer");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
      redirect: "if_required",
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error ocurred.");
      }
    } else {
      createOrder({
        variables: {
          input: {
            shippingAddress: selectedAddress.id,
            paymentType: "Stripe",
            paymentStatus: "Paid",
          },
        },
      });
    }
  };

  return (
    <main style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.formStyles}>
        <PaymentElement />
        <Button type="submit" variant={"filled"} disabled={!stripe} my={20}>
          Pay Now
        </Button>
      </form>
    </main>
  );
};

export default PaymentScreen;
