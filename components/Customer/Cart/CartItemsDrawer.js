import {
  ActionIcon,
  CloseButton,
  Divider,
  Group,
  Image,
  NumberInput,
  Paper,
  Stack,
  Text,
} from '@mantine/core'
import React, { useContext, useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { ShopContext } from '../../../context/shopContextProvider'

const CartItemsDrawer = ({ product, index }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    removeCompletelyFromCart,
  } = useContext(ShopContext)

  return (
    <>
      <Paper py={'sm'} px={'sm'}>
        <Group position="apart" noWrap>
          <Group spacing={'xs'} noWrap>
            <Stack spacing={0} pr={'xs'}>
              <ActionIcon
                size={28}
                variant="default"
                style={{
                  borderRadius: '20%',
                  borderColor: '#62A82C',
                  color: '#62A82C',
                  zIndex: 1,
                }}
                onClick={() => {
                  addToCart(product.id)
                }}
              >
                <FiPlus />
              </ActionIcon>
              <Text
                style={{
                  color: 'darkslategray',
                  fontSize: '1rem',
                  textAlign: 'center',
                }}
                py={4}
              >
                {cartItems[index].quantity}
              </Text>
              <ActionIcon
                size={28}
                variant="default"
                style={{
                  borderRadius: '20%',
                }}
                onClick={() => {
                  removeFromCart(product.id)
                }}
                disabled={cartItems[index].quantity === 1}
              >
                <FiMinus />
              </ActionIcon>
            </Stack>
            <Image
              src={product?.images[0] || 'no image'}
              alt="ProdImage"
              width={70}
              height={70}
              radius={'md'}
            />
            <Stack spacing={1}>
              <Text size="md" weight={500}>
                {product.name || 'Product Name'}
              </Text>
              <Text size="xs" weight={300}>
                {product?.category?.name || 'Category'}
              </Text>
              <Text
                size="md"
                weight={500}
                style={{
                  color: '#C70039',
                }}
              >
                Rs. {product.retailPrice || 'Price'}
              </Text>
            </Stack>
          </Group>
          <CloseButton
            ml={'lg'}
            size={'lg'}
            onClick={() => {
              removeCompletelyFromCart(product.id)
            }}
          />
        </Group>
      </Paper>
      <Divider my={'sm'} />
    </>
  )
}

export default CartItemsDrawer
