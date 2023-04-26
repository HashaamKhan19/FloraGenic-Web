import { gql, useQuery } from "@apollo/client";
import React, { createContext, useState } from "react";

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

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < data?.products?.length; i++) {
      cart[i.toString()] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const cartItemsArray = Object.entries(cartItems).map(([id, quantity]) => ({
    id,
    quantity,
  }));

  console.log("HASHAM KI BARAT", cartItems);

  const addToCart = (id) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      const itemId = id.toString(); // make sure id is a string
      const itemQuantity = updatedCart[itemId] || 0;
      updatedCart[itemId] = itemQuantity + 1;
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      const itemId = id.toString(); // make sure id is a string
      const itemQuantity = updatedCart[itemId] || 0;
      if (itemQuantity === 1) {
        delete updatedCart[itemId];
      } else if (itemQuantity > 1) {
        updatedCart[itemId] = itemQuantity - 1;
      }
      return updatedCart;
    });
  };

  const removeCompletelyFromCart = (id) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      const itemId = id.toString(); // make sure id is a string
      if (updatedCart.hasOwnProperty(itemId)) {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  const contextValue = {
    cartItems: cartItemsArray,
    addToCart,
    removeFromCart,
    removeCompletelyFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
