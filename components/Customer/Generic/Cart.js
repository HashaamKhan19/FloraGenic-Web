import { Avatar, Divider, Drawer, Group, Indicator, Text } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { useState } from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import CartItem from './CartItem'

export default function Cart() {
  const match768 = useMediaQuery('(min-width: 768px)')
  const match576 = useMediaQuery('(min-width: 576px)')

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
        size={match768 ? '380px' : match576 ? '300px' : null}
        position="right"
        padding="lg"
        zIndex={1000000}
        styles={{
          closeButton: {
            color: '#62A82C',
          },
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
                fontSize: '.95rem',
                fontWeight: 600,
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
      </Drawer>
    </>
  )
}
