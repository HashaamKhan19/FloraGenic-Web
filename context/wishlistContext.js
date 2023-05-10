import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addItemToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };

  const removeItemFromWishlist = (itemId) => {
    const updatedItems = wishlistItems.filter((item) => item.id !== itemId);
    setWishlistItems(updatedItems);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const contextValue = {
    wishlistItems,
    addItemToWishlist,
    removeItemFromWishlist,
    clearWishlist,
  };

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
};
