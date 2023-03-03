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
import { useState } from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import CartItem from './CartItem'
import Link from 'next/link'

export default function Cart() {
  const [
    drawerOpened,
    { toggle: toggleDrawer, close: closeDrawer },
  ] = useDisclosure(false)
  const [shoppingItemsCount, setShoppingItemsCount] = useState(0)
  return (
    <>
      <Indicator label={shoppingItemsCount} inline size={18} color={'green'}>
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
        size={'350px'}
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
              {shoppingItemsCount} Items
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
        <CartItem />

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
      </Drawer>
    </>
  )
}
