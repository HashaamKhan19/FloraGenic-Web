import { gql, useQuery } from '@apollo/client'
import {
  ActionIcon,
  Box,
  Button,
  CloseButton,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
} from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { ShopContext } from '../../../context/shopContextProvider'
import CartItemsDrawer from './CartItemsDrawer'

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

export default function CartItem({ closeDrawer }) {
  const { data, loading, error } = useQuery(GET_PRODUCTS)

  const { cartItems } = useContext(ShopContext)

  return (
    <Box style={{ height: 'calc(100vh - 200px)', overflowY: 'scroll' }}>
      {data?.products
        ?.filter((product) => {
          return cartItems.some((item) => item.id === product.id)
        })
        .map((product) => {
          return <CartItemsDrawer product={product} key={product.id} />
        })}
      <Stack
        style={{
          position: 'absolute',
          bottom: 5,
          left: 0,
          right: 0,
          padding: '1rem',
        }}
        spacing={'sm'}
      >
        <Button
          style={{
            backgroundColor: '#62A82C',
            color: 'white',
          }}
        >
          Checkout Now (Rs. 1000)
        </Button>
        <Link
          href={'/customer/viewCart'}
          style={{
            width: '100%',
          }}
        >
          <Button
            style={{
              backgroundColor: 'white',
              color: '#62A82C',
              border: '1px solid #62A82C',
              width: '100%',
            }}
            onClick={closeDrawer}
          >
            View Cart
          </Button>
        </Link>
      </Stack>
    </Box>
  )
}
