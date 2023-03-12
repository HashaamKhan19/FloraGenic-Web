import {
  ActionIcon,
  Avatar,
  Badge,
  Burger,
  Button,
  Center,
  Container,
  createStyles,
  Divider,
  Drawer,
  Group,
  Header,
  Menu,
  Paper,
  ScrollArea,
  Text,
  TextInput,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import Image from 'next/image'
import links from './NavbarLinks'
import { BiChevronDown, BiHome } from 'react-icons/bi'
import {
  BsArrowLeft,
  BsArrowRight,
  BsChevronDown,
  BsFacebook,
  BsInstagram,
  BsSearch,
  BsTwitter,
} from 'react-icons/bs'
import { GiGardeningShears } from 'react-icons/gi'
import Cart from '../Cart/Cart'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'
import { useState } from 'react'
import { SiHomeassistant } from 'react-icons/si'
import { TbReportMoney } from 'react-icons/tb'
import FloraGenicLogo from '../../../public/Logo/floraGenic.png'
import { FiChevronDown } from 'react-icons/fi'

const useStyles = createStyles((theme) => ({
  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('xl')]: {
      display: 'none',
    },
  },

  categoryButton: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  imageContainer: {
    width: '100px',

    [theme.fn.smallerThan('sm')]: {
      width: '80px',
    },
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBar: {
    width: '500px',
    [theme.fn.smallerThan('md')]: {
      width: '300px',
    },
    [theme.fn.smallerThan('sm')]: {
      width: '200px',
    },
  },
  mobileLink: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    textDecoration: 'none',
    color: 'black',
    fontWeight: 500,
    fontSize: '1.2rem',
    fontFamily: 'Poppins',

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '85%',
      fontWeight: 400,
      fontSize: '1rem',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.green[6]
          : theme.colors.green[0],
    }),
  },
  mobileUserProfile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      alignItems: 'center',
      width: '80%',
    },
  },
}))

const HeaderMenu = ({ children }) => {
  const [auth, setAuth] = useState(false)
  const [
    drawerOpened,
    { toggle: toggleDrawer, close: closeDrawer },
  ] = useDisclosure(false)
  const { classes } = useStyles()
  const theme = useMantineTheme()

  // breakPoints
  const headerHeight = useMediaQuery('(min-width: 768px)')
  const mobileSearch = useMediaQuery('(max-width: 500px)')

  const items = links.map((link) => {
    const menuItems = link.links?.map((item, index) => (
      <Link href={item.link} key={index}>
        <Menu.Item key={item.link}>{item.label}</Menu.Item>
      </Link>
    ))

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transition={'scale-y'}
          transitionDuration={300}
          exitTransitionDuration={100}
          withArrow
        >
          <Menu.Target>
            <Link href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <BsChevronDown size={12} stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Link>
    )
  })

  return (
    <>
      <Paper
        style={{
          backgroundColor: '#62A82C',
        }}
        radius={0}
        p={5}
      >
        <Group
          style={{
            justifyContent: 'space-between',
          }}
          px={'xl'}
          py={2}
        >
          {headerHeight && (
            <Group>
              <Badge color="red" size="sm" variant="filled">
                Sale
              </Badge>
              <Text color={'white'}>Free Shipping</Text>
            </Group>
          )}

          <Group>
            <BsTwitter color="white" />
            <BsFacebook color="white" />
            <BsInstagram color="white" />
          </Group>

          <Text color={'white'}>Contact Us</Text>
        </Group>
      </Paper>
      <Header
        height={headerHeight ? 140 : 70}
        // mb={50}
        p={headerHeight ? 'md' : 'xs'}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
        }}
      >
        <Container size={'xl'}>
          <Group className={classes.container}>
            <Group>
              <Burger
                opened={drawerOpened}
                onClick={toggleDrawer}
                className={classes.burger}
                size="sm"
                color="green"
              />
              <Link href={'/customer'}>
                <Image
                  src={FloraGenicLogo}
                  alt="FloraGenic Logo"
                  className={classes.imageContainer}
                />
              </Link>
            </Group>
            {/* Search Bar */}
            {!mobileSearch && (
              <TextInput
                icon={
                  <BsSearch
                    size={14}
                    display={mobileSearch ? 'none' : 'block'}
                  />
                }
                radius="xl"
                size="md"
                rightSection={
                  <ActionIcon
                    size={32}
                    radius="xl"
                    color={theme.primaryColor}
                    variant="filled"
                    style={{
                      backgroundColor: '#62A82C',
                    }}
                  >
                    {theme.dir === 'ltr' ? (
                      <BsArrowRight size={18} stroke={1.5} />
                    ) : (
                      <BsArrowLeft size={18} stroke={1.5} />
                    )}
                  </ActionIcon>
                  // <Menu
                  //   withArrow
                  //   transition={'scale-y'}
                  //   transitionDuration={500}
                  //   exitTransitionDuration={500}
                  //   arrowOffset={20}
                  //   width={130}
                  // >
                  //   <Menu.Target>
                  //     <UnstyledButton>
                  //       <Group spacing={'xs'}>
                  //         <Text
                  //           style={{
                  //             color: 'darkslategray',
                  //             fontSize: '14px',
                  //           }}
                  //         >
                  //           All Categories
                  //         </Text>
                  //         <FiChevronDown size={16} />
                  //       </Group>
                  //     </UnstyledButton>
                  //   </Menu.Target>
                  //   <Menu.Dropdown>
                  //     <Menu.Item>Category 1</Menu.Item>
                  //     <Menu.Item>Category 2</Menu.Item>
                  //     <Menu.Item>Category 3</Menu.Item>
                  //   </Menu.Dropdown>
                  // </Menu>
                }
                placeholder="Search query..."
                rightSectionWidth={42}
                className={classes.searchBar}
                styles={(theme) => ({
                  input: {
                    '&:focus-within': {
                      borderColor: theme.colors.green[7],
                    },
                  },
                  // rightSection: {
                  //   width: 150,
                  //   border: '1px solid #E2E8F0',
                  //   backgroundColor: '#F7FAFC',
                  //   borderTopRightRadius: 20,
                  //   borderBottomRightRadius: 20,
                  // },
                })}
              />
            )}
            {/* User and Cart */}
            <Group>
              <Link href={'/customer/dashboard'}>
                <Avatar radius="xl" />
              </Link>
              <Cart />
            </Group>
          </Group>
        </Container>
        {/* <Divider px="xl" /> */}
        <Container size={'xl'} mt={'md'}>
          <Group
            position="right"
            style={{
              justifyContent: 'space-between',
            }}
          >
            <Group className={classes.categoryButton}>
              <Button
                leftIcon={<TbReportMoney size={20} />}
                style={{
                  backgroundColor: 'rgba(98, 168, 44, 0.1)',
                  color: 'rgba(98, 168, 44, 1)',
                }}
              >
                <Text
                  style={{
                    color: 'rgba(0, 0, 0, 0.6)',
                  }}
                >
                  List and Sell. Register now!
                </Text>
              </Button>
            </Group>
            <Group className={classes.links}>{items}</Group>
          </Group>
        </Container>
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="310px"
          padding="md"
          className={classes.hiddenDesktop}
          zIndex={1000000}
          styles={{
            closeButton: {
              color: '#fff',
            },
            drawer: {
              backgroundImage: `url("https://images.unsplash.com/photo-1629197520635-16570fbd0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80")`,
            },
          }}
        >
          <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
            <Divider
              my="sm"
              color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.3'}
            />
            <Group
              spacing="lg"
              style={{
                justifyContent: 'center',
              }}
            >
              <Button
                variant="filled"
                style={{
                  backgroundColor: '#62A82C',
                  color: 'white',
                }}
                className={classes.mobileLink}
                size="md"
                leftIcon={<BiHome />}
                onClick={() => {
                  closeDrawer()
                }}
              >
                Home
              </Button>

              <Button
                variant="filled"
                style={{
                  backgroundColor: '#62A82C',
                  color: 'white',
                }}
                className={classes.mobileLink}
                size="md"
                leftIcon={<AiOutlineShoppingCart />}
                onClick={() => {
                  closeDrawer()
                }}
              >
                Products
              </Button>

              <Button
                variant="filled"
                style={{
                  backgroundColor: '#62A82C',
                  color: 'white',
                }}
                className={classes.mobileLink}
                size="md"
                leftIcon={<SiHomeassistant />}
                onClick={() => {
                  closeDrawer()
                }}
              >
                Nurseries
              </Button>

              <Button
                variant="filled"
                style={{
                  backgroundColor: '#62A82C',
                  color: 'white',
                }}
                className={classes.mobileLink}
                size="md"
                leftIcon={<GiGardeningShears />}
                onClick={() => {
                  closeDrawer()
                }}
              >
                Gardeners
              </Button>
            </Group>

            <Divider
              my="sm"
              color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
            />

            {!auth ? (
              <Group position="center" grow px={'1.6rem'}>
                <Button
                  variant="outline"
                  style={{ color: '#62A82C', borderColor: '#62A82C' }}
                  onClick={() => {
                    closeDrawer()
                  }}
                >
                  Log in
                </Button>
                <Button
                  variant="filled"
                  style={{
                    backgroundColor: '#62A82C',
                    color: 'white',
                  }}
                  onClick={() => {
                    closeDrawer()
                  }}
                >
                  Sign up
                </Button>
              </Group>
            ) : (
              <Group position="center" grow pb="xl" px="md">
                <Button
                  variant="default"
                  onClick={() => {
                    closeDrawer()
                  }}
                >
                  Sign Out
                </Button>
              </Group>
            )}
          </ScrollArea>
        </Drawer>
      </Header>
      {children}
    </>
  )
}

export default HeaderMenu
