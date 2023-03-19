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

const CartItemsDrawer = ({ product }) => {
  const { cartItems } = useContext(ShopContext)

  console.log('====================================')
  console.log('cartItem quantity check', cartItems)
  console.log('====================================')

  const increase = () => {
    setValue((val) => val + 1)
  }

  const decrease = () => {
    if (value === 0) return
    setValue((val) => val - 1)
  }

  return (
    <>
      <Paper py={'sm'} px={'sm'}>
        <Group position="apart" noWrap>
          <Group spacing={'xs'} noWrap>
            <Stack spacing={0}>
              <ActionIcon
                size={28}
                variant="default"
                style={{
                  borderRadius: '50%',
                  borderColor: '#62A82C',
                  color: '#62A82C',
                }}
                onClick={increase}
              >
                <FiPlus />
              </ActionIcon>
              {/* <Text align="center">{value}</Text> */}
              <Group>
                <NumberInput
                  value={cartItems?.quantity}
                  hideControls
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  styles={{
                    input: {
                      border: 'none',
                    },
                  }}
                />
              </Group>
              <ActionIcon
                size={28}
                variant="default"
                style={{
                  borderRadius: '50%',
                }}
                onClick={decrease}
                disabled={cartItems?.length === 1}
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
          <CloseButton ml={'lg'} size={'lg'} />
        </Group>
      </Paper>
      <Divider my={'sm'} />
    </>
  )
}

export default CartItemsDrawer
