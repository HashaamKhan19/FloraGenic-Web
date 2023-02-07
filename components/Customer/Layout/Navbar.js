import {
  createStyles,
  Header,
  Group,
  Burger,
  Container,
  TextInput,
  ActionIcon,
  useMantineTheme,
  Avatar,
  Paper,
  Badge,
  Text,
  Indicator,
  Menu,
  Center,
  Button,
  Drawer,
  ScrollArea,
  Divider,
  Stack,
} from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import FloraGenicLogo from '../../../public/Logo/floraGenic.png'
import Image from 'next/image'
import links from '../Generic/NavbarLinks'
import { BiCategory, BiHome, BiShoppingBag, BiUser } from 'react-icons/bi'
import { MdCategory } from 'react-icons/md'
import { GoChevronDown } from 'react-icons/go'
import {
  BsArrowLeft,
  BsArrowRight,
  BsChevronDown,
  BsFacebook,
  BsInstagram,
  BsPerson,
  BsSearch,
  BsTwitter,
} from 'react-icons/bs'
import { GiGardeningShears } from 'react-icons/gi'
import { AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai'
import { SiHomeassistant } from 'react-icons/si'
import { useState } from 'react'

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

const HeaderMenu = () => {
  const [opened, { toggle }] = useDisclosure(false)
  const [auth, setAuth] = useState(false)
  const [
    drawerOpened,
    { toggle: toggleDrawer, close: closeDrawer },
  ] = useDisclosure(false)
  const { classes } = useStyles()
  const theme = useMantineTheme()
  const [shoppingItemsCount, setShoppingItemsCount] = useState(0)

  // breakPoints
  const headerHeight = useMediaQuery('(min-width: 768px)')
  const mobileSearch = useMediaQuery('(max-width: 500px)')

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
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
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <BsChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
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
        mb={120}
        p={headerHeight ? 'md' : 'xs'}
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
              <Image
                src={FloraGenicLogo}
                alt="FloraGenic Logo"
                className={classes.imageContainer}
              />
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
                }
                placeholder="Search query.."
                rightSectionWidth={42}
                className={classes.searchBar}
              />
            )}
            {/* User and Cart */}
            <Group>
              <Avatar radius="xl" />
              <Indicator
                label={shoppingItemsCount}
                inline
                size={18}
                color={'green'}
              >
                <Avatar radius={'xl'}>
                  <BiShoppingBag size={22} />
                </Avatar>
              </Indicator>
            </Group>
          </Group>
        </Container>
        <Container size={'xl'} mt={'md'}>
          <Group
            position="right"
            style={{
              justifyContent: 'space-between',
            }}
          >
            <Group>
              <Menu
                transition="skew-down"
                transitionDuration={300}
                exitTransitionDuration={200}
                withArrow
                className={classes.categoryButton}
              >
                <Menu.Target>
                  <Button
                    leftIcon={<MdCategory />}
                    rightIcon={<GoChevronDown size={12} stroke={1.5} />}
                    style={{
                      backgroundColor: 'rgba(98, 168, 44, 0.1)',
                      color: 'rgba(98, 168, 44, 1)',
                    }}
                    styles={{
                      leftIcon: {
                        fontSize: '18px',
                      },
                      rightIcon: {
                        fontSize: '22px',
                      },
                    }}
                  >
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 0.6)',
                      }}
                    >
                      Categories
                    </Text>
                  </Button>
                </Menu.Target>
                <Menu.Dropdown
                  style={{
                    width: '150px',
                  }}
                >
                  <Menu.Item
                    style={{
                      width: '150px',
                    }}
                  >
                    Plants
                  </Menu.Item>
                  <Menu.Item>Tools</Menu.Item>
                  <Menu.Item>Medicines</Menu.Item>
                </Menu.Dropdown>
              </Menu>
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
              color: '#62A82C',
            },
          }}
        >
          <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
            <Divider
              my="sm"
              color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
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
    </>
  )
}

export default HeaderMenu
