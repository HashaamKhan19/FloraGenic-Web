import { gql, useQuery } from '@apollo/client'
import React, { createContext, useState } from 'react'

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
`

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS)

  const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < data?.products?.length + 1; i++) {
      cart[i] = 0
    }
    return cart
  }

  const [cartItems, setCartItems] = useState(getDefaultCart())

  const cartItemsArray = Object.entries(cartItems).map(([id, quantity]) => ({
    id,
    quantity,
  }))

  const addToCart = (id) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev }
      const itemQuantity = updatedCart[id] || 0
      updatedCart[id] = itemQuantity + 1
      return updatedCart
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev }
      const itemQuantity = updatedCart[id] || 0
      if (itemQuantity === 1) {
        delete updatedCart[id]
      } else if (itemQuantity > 1) {
        updatedCart[id] = itemQuantity - 1
      }
      return updatedCart
    })
  }

  const removeCompletelyFromCart = (id) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev }
      delete updatedCart[id]
      return updatedCart
    })
  }

  const contextValue = {
    cartItems: cartItemsArray,
    addToCart,
    removeFromCart,
    removeCompletelyFromCart,
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
