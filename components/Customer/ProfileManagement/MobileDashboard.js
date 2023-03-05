import {
  Group,
  Modal,
  Paper,
  Stack,
  Text,
  UnstyledButton,
  createStyles,
} from '@mantine/core'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { BsBagCheck, BsBookmarkHeart } from 'react-icons/bs'
import { MdOutlinePayment } from 'react-icons/md'

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

const MobileDashboard = ({ active, setActive, opened, setOpened }) => {
  //   const [active, setActive] = useState(active)

  const { classes } = useStyles()

  const handleButtonClick = (buttonName) => {
    setActive(buttonName)
  }

  const handleClose = () => {
    setTimeout(() => {
      setOpened(false)
    }, 700)
  }

  return (
    <>
      <Text className={classes.title}>DASHBOARD</Text>

      <Stack>
        <UnstyledButton
          className={`${classes.links} ${active === 'orders' ? 'active' : ''}`}
          onClick={() => {
            handleButtonClick('orders')
            handleClose()
          }}
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
          onClick={() => {
            handleButtonClick('wishlist')
            handleClose()
          }}
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
          className={`${classes.links} ${active === 'profile' ? 'active' : ''}`}
          onClick={() => {
            handleButtonClick('profile')
            handleClose()
          }}
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
          onClick={() => {
            handleButtonClick('addresses')
            handleClose()
          }}
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
          className={`${classes.links} ${active === 'payment' ? 'active' : ''}`}
          onClick={() => {
            handleButtonClick('payment')
            handleClose()
          }}
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
    </>
  )
}

export default MobileDashboard
