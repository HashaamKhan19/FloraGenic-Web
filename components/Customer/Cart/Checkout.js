import { useContext, useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import PaymentScreen from "./PaymentScreen";
import { ShopContext } from "../../../context/shopContextProvider";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const GET_PAYMENT_INTENT = gql`
  mutation CreatePaymentIntent($amount: Int!) {
    createPaymentIntent(amount: $amount)
  }
`;

const Checkout = ({ selectedAddress }) => {
  const [clientSecret, setClientSecret] = useState("");
  const { totalPrice } = useContext(ShopContext);

  const [getIntent, { data, loading, error }] = useMutation(
    GET_PAYMENT_INTENT,
    {
      variables: {
        amount: totalPrice + 200 + Math.floor(Math.random() * 0.18),
      },
      onCompleted: (data) => {
        setClientSecret(data.createPaymentIntent);
      },
    }
  );

  useEffect(() => {
    getIntent();
  }, []);

  return (
    <>
      {clientSecret && stripePromise ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentScreen selectedAddress={selectedAddress} />
        </Elements>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Checkout;
