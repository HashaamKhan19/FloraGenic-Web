import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Center,
  Grid,
  Group,
  Modal,
  Paper,
  SegmentedControl,
  Stack,
  Tabs,
  Text,
  UnstyledButton,
  createStyles,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { BsBagCheck, BsBookmarkHeart, BsThreeDots } from 'react-icons/bs'
import { MdOutlinePayment } from 'react-icons/md'
import Orders from './DashboardTabs/Orders'
import Wishlist from './DashboardTabs/Wishlist'
import ProfileInfo from './DashboardTabs/ProfileInfo'
import Address from './DashboardTabs/Address'
import Payment from './DashboardTabs/Payment'
import { useRouter } from 'next/router'
import OrderDetails from './DashboardTabs/OrderDetails'
import MobileDashboard from './MobileDashboard'

const useStyles = createStyles(() => ({
  title: {
    color: 'gray',
    fontWeight: 300,
    fontSize: '14px',
    paddingBottom: '15px',
  },
  links: {
    color: 'darkslategray',
    // fontSize: '15px',
    borderRight: '1px solid transparent',
    borderLeft: '1px solid transparent',
    transition: 'all 0.3s ease-in-out',
    paddingTop: '1px',
    paddingBottom: '1px',
    '&.active': {
      color: '#62A82C',
      borderRight: '3px solid #62A82C',
      borderLeft: '3px solid #62A82C',
      // borderRadius: '5px 5px 5px 5px',
      paddingRight: '10px',
      paddingLeft: '10px',
    },
    '&:hover': {
      color: '#62A82C',
    },
  },
}))

const DashboardLinks = () => {
  const match768 = useMediaQuery('(max-width: 768px)')
  const [active, setActive] = useState('orders')

  const [opened, setOpened] = useState(false)

  const { classes } = useStyles()

  const handleButtonClick = (buttonName) => {
    setActive(buttonName)
  }

  const orderDetails = false

  return (
    <Grid py={match768 ? 'md' : 'xl'}>
      {match768 && (
        <Paper
          style={{ width: '100%' }}
          px={'xs'}
          mb={'xl'}
          mx={'lg'}
          withBorder
        >
          <Group>
            <Text pl={'xs'}>User Dashboard</Text>
            <ActionIcon
              variant="transparent"
              color="gray"
              size="lg"
              style={{ marginLeft: 'auto' }}
            >
              <Burger
                color="#62A82C"
                size={'sm'}
                onClick={() => setOpened(true)}
              />
            </ActionIcon>
          </Group>
        </Paper>
      )}
      <Grid.Col md={3} hidden={match768 ? true : false}>
        <Paper p={'xl'} shadow="xs">
          <Text className={classes.title}>DASHBOARD</Text>

          <Stack>
            <UnstyledButton
              className={`${classes.links} ${
                active === 'orders' ? 'active' : ''
              }`}
              onClick={() => handleButtonClick('orders')}
            >
              <Group position="apart" noWrap>
                <Group spacing={'xs'} noWrap>
                  <BsBagCheck />
                  <Text>Orders</Text>
                </Group>
                <Text>5</Text>
              </Group>
            </UnstyledButton>

            <UnstyledButton
              className={`${classes.links} ${
                active === 'wishlist' ? 'active' : ''
              }`}
              onClick={() => handleButtonClick('wishlist')}
            >
              <Group position="apart" noWrap>
                <Group spacing={'xs'} noWrap>
                  <BsBookmarkHeart />
                  <Text>WishList</Text>
                </Group>
                <Text>19</Text>
              </Group>
            </UnstyledButton>
          </Stack>

          <Text className={classes.title} pt={'xl'}>
            ACCOUNT SETTINGS
          </Text>

          <Stack>
            <UnstyledButton
              className={`${classes.links} ${
                active === 'profile' ? 'active' : ''
              }`}
              onClick={() => handleButtonClick('profile')}
            >
              <Group position="apart" noWrap>
                <Group spacing={'xs'} noWrap>
                  <AiOutlineUser />
                  <Text>Profile Info</Text>
                </Group>
              </Group>
            </UnstyledButton>

            <UnstyledButton
              className={`${classes.links} ${
                active === 'addresses' ? 'active' : ''
              }`}
              onClick={() => handleButtonClick('addresses')}
            >
              <Group position="apart" noWrap>
                <Group spacing={'xs'} noWrap>
                  <BiMap />
                  <Text>Addresses</Text>
                </Group>
                <Text>1</Text>
              </Group>
            </UnstyledButton>

            <UnstyledButton
              className={`${classes.links} ${
                active === 'payment' ? 'active' : ''
              }`}
              onClick={() => handleButtonClick('payment')}
            >
              <Group position="apart" noWrap>
                <Group spacing={'xs'} noWrap>
                  <MdOutlinePayment />
                  <Text>Payment Methods</Text>
                </Group>
                <Text>1</Text>
              </Group>
            </UnstyledButton>
          </Stack>
        </Paper>
      </Grid.Col>
      <Grid.Col md={!match768 ? 9 : 12} pl={'xl'}>
        {active === 'orders' ? (
          orderDetails ? (
            <OrderDetails />
          ) : (
            <Orders />
          )
        ) : active === 'wishlist' ? (
          <Wishlist />
        ) : active === 'profile' ? (
          <ProfileInfo />
        ) : active === 'addresses' ? (
          <Address />
        ) : active === 'payment' ? (
          <Payment />
        ) : (
          <Address />
        )}
      </Grid.Col>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        transition={'fade'}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
      >
        <MobileDashboard
          active={active}
          setActive={setActive}
          opened={opened}
          setOpened={setOpened}
        />
      </Modal>
    </Grid>
  )
}
export default DashboardLinks
