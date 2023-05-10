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
  Stack,
  Text,
  TextInput,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import links from "./NavbarLinks";
import { BiCategoryAlt, BiChevronDown, BiHome } from "react-icons/bi";
import {
  BsArrowLeft,
  BsArrowRight,
  BsChevronDown,
  BsFacebook,
  BsInstagram,
  BsSearch,
  BsTwitter,
} from "react-icons/bs";
import { GiGardeningShears } from "react-icons/gi";
import Cart from "../Cart/Cart";
import { AiOutlineLogin, AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { SiHomeassistant } from "react-icons/si";
import { TbReportMoney } from "react-icons/tb";
import FloraGenicLogo from "../../../public/Logo/floraGenic.png";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import Login from "../ProfileManagement/Login";
import { AuthContext } from "../../../context/authContext";

const useStyles = createStyles((theme) => ({
  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("xl")]: {
      display: "none",
    },
  },

  categoryButton: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  imageContainer: {
    width: "100px",

    [theme.fn.smallerThan("sm")]: {
      width: "80px",
    },
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBar: {
    width: "500px",
    [theme.fn.smallerThan("md")]: {
      width: "300px",
    },
    [theme.fn.smallerThan("sm")]: {
      width: "200px",
    },
  },
  mobileLink: {
    display: "flex",
    alignItems: "center",
    width: "80%",
    textDecoration: "none",
    color: "black",
    fontWeight: 500,
    fontSize: "1.2rem",
    fontFamily: "Poppins",

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "85%",
      fontWeight: 400,
      fontSize: "1rem",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.green[6]
          : theme.colors.green[0],
    }),
  },
  mobileUserProfile: {
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      alignItems: "center",
      width: "80%",
    },
  },
}));

const GET_USER = gql`
  query Query($userId: ID!) {
    user(id: $userId) {
      id
      userType
      details {
        ... on Customer {
          image
        }
      }
    }
  }
`;

const HeaderMenu = ({ children }) => {
  const router = useRouter();

  const { user, logout } = useContext(AuthContext);

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId: user?.id },
  });

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const [activeLink, setActiveLink] = useState(null);

  // breakPoints
  const headerHeight = useMediaQuery("(min-width: 768px)");
  const mobileSearch = useMediaQuery("(max-width: 500px)");

  const items = links.map((link) => {
    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        <span
          className={`${classes.linkLabel} ${
            activeLink === link.link ? "text-floraGreen" : ""
          }`}
        >
          {link.label}
        </span>
      </Link>
    );
  });

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  const [opened, setOpened] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");

  const handleSearch = () => {
    // router.push({
    //   pathname: "/customer/products",
    //   query: { search: searchProduct },
    // });
    setSearchProduct("");
  };

  return (
    <>
      <Paper
        style={{
          backgroundColor: "#62A82C",
        }}
        radius={0}
        p={5}
      >
        <Group
          style={{
            justifyContent: "space-between",
          }}
          px={"xl"}
          py={2}
        >
          {headerHeight && (
            <Group>
              <Badge color="red" size="sm" variant="filled">
                Sale
              </Badge>
              <Text color={"white"}>Free Shipping</Text>
            </Group>
          )}

          <Group>
            <BsTwitter color="white" />
            <BsFacebook color="white" />
            <BsInstagram color="white" />
          </Group>

          <Link href={"/contact"}>
            <Text color={"white"}>Contact Us</Text>
          </Link>
        </Group>
      </Paper>
      <Header
        height={headerHeight ? 140 : 70}
        // mb={50}
        p={headerHeight ? "md" : "xs"}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <Container size={"xl"}>
          <Group className={classes.container}>
            <Group>
              <Burger
                opened={drawerOpened}
                onClick={toggleDrawer}
                className={classes.burger}
                size="sm"
                color="green"
              />
              <Link href={"/customer"}>
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
                    display={mobileSearch ? "none" : "block"}
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
                      backgroundColor: "#62A82C",
                    }}
                  >
                    {theme.dir === "ltr" ? (
                      <BsArrowRight size={18} stroke={1.5} />
                    ) : (
                      <BsArrowLeft size={18} stroke={1.5} />
                    )}
                  </ActionIcon>
                }
                placeholder="Search for a product..."
                rightSectionWidth={42}
                className={classes.searchBar}
                onChange={(e) => setSearchProduct(e.target.value)}
                styles={(theme) => ({
                  input: {
                    "&:focus-within": {
                      borderColor: theme.colors.green[7],
                    },
                  },
                })}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
            )}
            {/* User and Cart */}
            <Group>
              {Object?.keys(user || {})?.length ? (
                <Menu position="bottom-end" withArrow>
                  <Menu.Target>
                    <Avatar
                      radius="xl"
                      style={{
                        cursor: "pointer",
                      }}
                      src={data?.user?.details?.image || null}
                    />
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item>
                      <Link href={`/customer/dashboard/${user?.id}`}>
                        <Group>
                          <BiCategoryAlt color="#62A82C" />
                          <Text c={"#62A82C"} fw={"525px"}>
                            Dashboard
                          </Text>
                        </Group>
                      </Link>
                    </Menu.Item>
                    <Divider />
                    <Menu.Item>
                      <Link href={"/login"}>
                        <Group onClick={logout}>
                          <AiOutlineLogin color="#D92228" />
                          <Text c={"#D92228"}>Logout</Text>
                        </Group>
                      </Link>
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              ) : (
                <Link href={"/login"}>
                  <Avatar radius="xl" />
                </Link>
              )}
              <Cart />
            </Group>
          </Group>
        </Container>
        {/* <Divider px="xl" /> */}
        <Container size={"xl"} mt={"md"}>
          <Group
            position="right"
            style={{
              justifyContent: "space-between",
            }}
          >
            <Group className={classes.categoryButton}>
              <Link href={"/register"}>
                <Button
                  leftIcon={<TbReportMoney size={20} />}
                  style={{
                    backgroundColor: "rgba(98, 168, 44, 0.1)",
                    color: "rgba(98, 168, 44, 1)",
                  }}
                >
                  <Text
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    List and Sell. Register now!
                  </Text>
                </Button>
              </Link>
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
          title={
            <Image src={FloraGenicLogo} alt="FloraGenic Logo" width={110} />
          }
          styles={{
            closeButton: {
              color: "#62A82C",
            },
            title: {
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: "15px",
            },
            // drawer: {
            //   backgroundImage: `url("https://images.unsplash.com/photo-1629197520635-16570fbd0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80")`,
            // },
          }}
        >
          <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
            {/* <Divider
              my="sm"
              color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.3'}
            /> */}
            <Group
              spacing="lg"
              style={{
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Button
                variant={activeLink === "/customer" ? "filled" : "light"}
                color={activeLink === "/customer" ? "green" : "cyan"}
                className={classes.mobileLink}
                radius={"lg"}
                leftIcon={
                  <BiHome
                    color={
                      activeLink === "/customer" ? "white" : "darkslategray"
                    }
                    size={"1.3rem"}
                  />
                }
                onClick={() => {
                  closeDrawer();
                }}
                styles={{
                  label: {
                    fontSize: "1.2rem",
                    color:
                      activeLink === "/customer" ? "white" : "darkslategray",
                  },
                }}
              >
                Home
              </Button>

              <Button
                variant={
                  activeLink === "/customer/products" ? "filled" : "light"
                }
                color={activeLink === "/customer/products" ? "green" : "cyan"}
                className={classes.mobileLink}
                radius={"lg"}
                leftIcon={
                  <AiOutlineShoppingCart
                    color={
                      activeLink === "/customer/products"
                        ? "white"
                        : "darkslategray"
                    }
                    size={"1.3rem"}
                  />
                }
                onClick={() => {
                  closeDrawer();
                }}
                styles={{
                  label: {
                    fontSize: "1.2rem",
                    color:
                      activeLink === "/customer/products"
                        ? "white"
                        : "darkslategray",
                  },
                }}
              >
                Products
              </Button>

              <Button
                variant={
                  activeLink === "/customer/nurseries" ? "filled" : "light"
                }
                color={activeLink === "/customer/nurseries" ? "green" : "cyan"}
                className={classes.mobileLink}
                radius={"lg"}
                leftIcon={
                  <SiHomeassistant
                    color={
                      activeLink === "/customer/nurseries"
                        ? "white"
                        : "darkslategray"
                    }
                    size={"1.3rem"}
                  />
                }
                onClick={() => {
                  closeDrawer();
                }}
                styles={{
                  label: {
                    fontSize: "1.2rem",
                    color:
                      activeLink === "/customer/nurseries"
                        ? "white"
                        : "darkslategray",
                  },
                }}
              >
                Nurseries
              </Button>

              <Button
                variant={
                  activeLink === "/customer/gardeners" ? "filled" : "light"
                }
                color={activeLink === "/customer/gardeners" ? "green" : "cyan"}
                className={classes.mobileLink}
                radius={"lg"}
                leftIcon={
                  <GiGardeningShears
                    color={
                      activeLink === "/customer/gardeners"
                        ? "white"
                        : "darkslategray"
                    }
                    size={"1.3rem"}
                  />
                }
                onClick={() => {
                  closeDrawer();
                }}
                styles={{
                  label: {
                    fontSize: "1.2rem",
                    color:
                      activeLink === "/customer/gardeners"
                        ? "white"
                        : "darkslategray",
                  },
                }}
              >
                Gardeners
              </Button>

              <Button
                variant={
                  activeLink === "/customer/categories" ? "filled" : "light"
                }
                color={activeLink === "/customer/categories" ? "green" : "cyan"}
                className={classes.mobileLink}
                radius={"lg"}
                leftIcon={
                  <BiCategoryAlt
                    color={
                      activeLink === "/customer/categories"
                        ? "white"
                        : "darkslategray"
                    }
                    size={"1.3rem"}
                  />
                }
                onClick={() => {
                  closeDrawer();
                }}
                styles={{
                  label: {
                    fontSize: "1.2rem",
                    color:
                      activeLink === "/customer/categories"
                        ? "white"
                        : "darkslategray",
                  },
                }}
              >
                Categories
              </Button>
            </Group>

            <Divider
              my="sm"
              color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
            />

            {!user ? (
              <Stack align="center" px={"xl"} mt={"xl"}>
                <Button
                  variant="outline"
                  radius="md"
                  color="green"
                  fullWidth
                  onClick={() => {
                    closeDrawer();
                  }}
                >
                  Log in
                </Button>
                <Button
                  variant="filled"
                  fullWidth
                  color="green"
                  radius="md"
                  onClick={() => {
                    closeDrawer();
                  }}
                >
                  Sign up
                </Button>
              </Stack>
            ) : (
              <Group position="center" grow pb="xl" px="md">
                <Button
                  variant="default"
                  onClick={() => {
                    closeDrawer();
                  }}
                >
                  Sign Out
                </Button>
              </Group>
            )}
          </ScrollArea>
        </Drawer>
      </Header>
      <Login opened={opened} setOpened={setOpened} />
      {children}
    </>
  );
};

export default HeaderMenu;
