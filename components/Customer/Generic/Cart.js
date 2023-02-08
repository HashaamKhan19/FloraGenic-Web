import { Avatar, Divider, Drawer, Group, Indicator, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import { BiShoppingBag } from 'react-icons/bi'

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
        size="380px"
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
      </Drawer>
    </>
  )
}
