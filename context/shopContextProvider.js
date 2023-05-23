import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useMutation,
  useQuery,
} from "@apollo/client";
import React, { createContext, useState } from "react";
import { CREATE_CART_ITEM, GET_CART_ITEMS } from "./cart-query";
import { DELETE_CART_ITEM } from "./cart-query";
import { toast } from "react-hot-toast";

export const ShopContext = createContext({});

const httpLink = new HttpLink({
  uri: "https://floragenic.herokuapp.com/graphql",
  // uri: "http://localhost:4000/graphql",
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

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [processing, setProcessing] = useState(false);
  const { loading, error, data } = useQuery(GET_CART_ITEMS, {
    client,
    onCompleted: (data) => {
      setCartItems(data.cartItems);
      setProcessing(false);
    },
    onError: (error) => {
      toast.error(error.message);
      setProcessing(false);
    },
  });

  const [addToCartMutation] = useMutation(CREATE_CART_ITEM, {
    client,
    onCompleted: (data) => {
      setCartItems(data.cartItemCreate);
      setProcessing(false);
    },
    onError: (error) => {
      toast.error(error.message);
      setProcessing(false);
    },
  });

  const [removeFromCartMutation] = useMutation(DELETE_CART_ITEM, {
    client,
    onCompleted: (data) => {
      setCartItems(data.cartItemDelete);
      setProcessing(false);
    },
    onError: (error) => {
      toast.error(error.message);
      setProcessing(false);
    },
  });

  const [removeCompletelyFromCartMutation] = useMutation(DELETE_CART_ITEM, {
    client,
    onCompleted: () => {
      setCartItems([]);
      setProcessing(false);
    },
    onError: (error) => {
      toast.error(error.message);
      setProcessing(false);
    },
  });

  const addToCart = (product, quantity) => {
    setProcessing(true);
    addToCartMutation({
      variables: {
        data: {
          productID: product,
          quantity: quantity,
        },
      },
    });
  };

  const removeFromCart = (id) => {
    setProcessing(true);
    removeFromCartMutation({
      variables: {
        cartItemDeleteId: id,
      },
    });
  };

  const clearCart = () => {
    setProcessing(true);
    removeCompletelyFromCartMutation();
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    processing,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
