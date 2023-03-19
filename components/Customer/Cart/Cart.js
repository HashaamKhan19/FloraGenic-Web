import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Group,
  Indicator,
  Stack,
  Text,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useContext, useState } from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import CartItem from './CartItem'
import Link from 'next/link'
import { ShopContext } from '../../../context/shopContextProvider'

export default function Cart() {
  const [
    drawerOpened,
    { toggle: toggleDrawer, close: closeDrawer },
  ] = useDisclosure(false)

  //cart
  const { cartItems } = useContext(ShopContext)

  return (
    <>
      <Indicator label={cartItems.length} inline size={18} color={'green'}>
        <Avatar
          radius={'xl'}
          style={{
            cursor: 'pointer',
          }}
          onClick={toggleDrawer}
        >
          <BiShoppingBag size={22} />
        </Avatar>
      </Indicator>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size={'360px'}
        position="right"
        // padding={'lg'}
        zIndex={1000000}
        styles={{
          closeButton: { '& svg': { width: 25, height: 25, color: '#62A82C' } },
          header: {
            padding: '1.2rem',
            marginBottom: 0,
          },
        }}
        style={{
          overflowY: 'hidden',
        }}
        title={
          <Group
            spacing={'sm'}
            style={{
              alignItems: 'end',
            }}
          >
            <BiShoppingBag size={'1.8rem'} color="#62A82C" />
            <Text
              style={{
                fontSize: '.90rem',
                fontWeight: 550,
              }}
            >
              {cartItems.length} Items
            </Text>
          </Group>
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        transition={'slide-left'}
        transitionDuration={500}
        exitTransitionDuration={300}
      >
        <Divider my="sm" />
        <CartItem closeDrawer={closeDrawer} />
      </Drawer>
    </>
  )
}
