import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import ReviewsIcon from "@mui/icons-material/Reviews";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ProfileMenu from "../Generic/ProfileMenu";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import { AddBoxOutlined, AddBusiness, Chat, Router } from "@mui/icons-material";
import { useRouter } from "next/router";
import Image from "next/image";
import FloraGenicLogo from "../../public/Logo/floraGenic.png";
import GiteIcon from "@mui/icons-material/Gite";
import WidgetsIcon from "@mui/icons-material/Widgets";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";

import { AssignmentInd, Tune, Paid, Timeline } from "@mui/icons-material";
import { AuthContext } from "../../context/authContext";

const drawerWidth = 280;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar({ children }) {
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [adminlistOpen, setAdminListOpen] = useState(false);
  const [customerlistOpen, setCustomerListOpen] = useState(false);
  const [gardenerlistOpen, setGardenerListOpen] = useState(false);
  const [nurserylistOpen, setNurseryListOpen] = useState(false);
  const [categorylistOpen, setCategoryListOpen] = useState(false);
  const [productlistOpen, setProductListOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const { user, setUser } = React.useContext(AuthContext);

  const handleAdminClick = () => {
    setAdminListOpen(!adminlistOpen);
  };
  const handleCategoryClick = () => {
    setCategoryListOpen(!categorylistOpen);
  };
  const handleProductClick = () => {
    setProductListOpen(!productlistOpen);
  };
  const handleNurseryClick = () => {
    setNurseryListOpen(!nurserylistOpen);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSettingsClick = () => {
    setSettingsOpen(!settingsOpen);
  };

  React.useEffect(() => {
    const token = user?.token || localStorage.getItem("token");
    const userType = user?.userType || localStorage.getItem("userType");

    if (!token || !userType) {
      router.push("/login");
      localStorage.clear();
      setUser(null);
    } else {
      if (userType) {
        switch (userType) {
          case "Customer":
            router.push("/customer");
            break;
          case "NurseryOwner":
            router.push("/nursery");
            break;
          case "Admin":
            router.push("/admin");
            break;
          default:
            localStorage.clear();
            setUser(null);
            router.push("/login");
            break;
        }
      }
    }
  }, [router.pathname, user, setUser]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ color: "#0d5209" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              width={"100%"}
              component="div"
              sx={{ color: "primary.dark" }}
            >
              Nursery Owner Dashboard
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <ProfileMenu />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundImage: `url("https://images.unsplash.com/photo-1629197520635-16570fbd0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80")`,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          style={{
            backgroundColor: "#fff",
          }}
        >
          <Box
            width="100%"
            height="100%"
            onClick={() => {
              router.push("/nursery");
            }}
            style={{}}
          >
            <center>
              <Image src={FloraGenicLogo} alt="FloraGenicLogo" width={100} />
            </center>
          </Box>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              ":hover": { backgroundColor: "#e5e5e5" },
            }}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon
                sx={{
                  color: "#62A82C",
                  borderRadius: 10,
                }}
              />
            ) : (
              <ChevronRightIcon
                sx={{ color: "white", backgroundColor: "#62A82C" }}
              />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {/* Sidebar List starts from here  */}
        <List sx={{ color: "white" }}>
          {/* Dashboard */}
          <Link href="/nursery">
            <ListItemButton
              sx={{ marginTop: 2, ":hover": { backgroundColor: "#058f00" } }}
            >
              <ListItemIcon>
                <DashboardIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primary="1 - Dashboard"
                primaryTypographyProps={{
                  marginLeft: -1.5,
                }}
              />
            </ListItemButton>
          </Link>

          {/* Admin */}

          <ListItemButton
            onClick={handleAdminClick}
            sx={{ marginTop: 1, ":hover": { backgroundColor: "#058f00" } }}
          >
            <ListItemIcon>
              <GiteIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primary="2 - My Nurseries"
              primaryTypographyProps={{
                marginLeft: -1.5,
              }}
            />
            {adminlistOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Link href="/nursery/addNursery">
            <Collapse in={adminlistOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ":hover": { backgroundColor: "#058f00" } }}
                >
                  <ListItemIcon>
                    <AddBusiness style={{ color: "white", fontSize: "22px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="2.1 - Add Nursery"
                    primaryTypographyProps={{
                      fontSize: "14px",
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          <Link href="/nursery/viewNurseries">
            <Collapse in={adminlistOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ":hover": { backgroundColor: "#058f00" } }}
                >
                  <ListItemIcon>
                    <GiteIcon style={{ color: "white", fontSize: "22px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="2.2 - View all Nurseries"
                    primaryTypographyProps={{
                      fontSize: "14px",
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          {/* Products */}

          <ListItemButton
            onClick={handleCategoryClick}
            sx={{ marginTop: 1, ":hover": { backgroundColor: "#058f00" } }}
          >
            <ListItemIcon>
              <WidgetsIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primary="3 - Products"
              primaryTypographyProps={{
                marginLeft: -1.5,
              }}
            />
            {categorylistOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Link href="/nursery/addProduct">
            <Collapse in={categorylistOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ":hover": { backgroundColor: "#058f00" } }}
                >
                  <ListItemIcon>
                    <AddBoxOutlined
                      style={{ color: "white", fontSize: "22px" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="3.1 - Add Product"
                    primaryTypographyProps={{
                      fontSize: "14px",
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          <Link href="/nursery/viewProducts">
            <Collapse in={categorylistOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ":hover": { backgroundColor: "#058f00" } }}
                >
                  <ListItemIcon>
                    <WidgetsIcon style={{ color: "white", fontSize: "22px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="3.2 - View all Products"
                    primaryTypographyProps={{
                      fontSize: "14px",
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          {/* Nursery */}

          <Link href="/nursery/viewOrders">
            <ListItemButton
              sx={{ marginTop: 1, ":hover": { backgroundColor: "#058f00" } }}
            >
              <ListItemIcon>
                <AssignmentInd style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primary="4 - Orders"
                primaryTypographyProps={{
                  marginLeft: -1.5,
                }}
              />
            </ListItemButton>
          </Link>

          {/* Reviews */}
          <Link href="/nursery/viewReviews">
            <ListItemButton
              sx={{ marginTop: 1, ":hover": { backgroundColor: "#058f00" } }}
            >
              <ListItemIcon>
                <ReviewsIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primary="5 - Reviews"
                primaryTypographyProps={{
                  marginLeft: -1.5,
                }}
              />
            </ListItemButton>
          </Link>

          {/* Chat */}

          {/* <Link href="/nursery">
            <ListItemButton
              sx={{ marginTop: 1, ':hover': { backgroundColor: '#058f00' } }}
            >
              <ListItemIcon>
                <Chat style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primary="6 - Chat"
                primaryTypographyProps={{
                  marginLeft: -1.5,
                }}
              />
            </ListItemButton>
          </Link> */}

          {/* Earnings */}

          {/* <Link href="/admin/viewReviews">
            <ListItemButton
              sx={{ marginTop: 1, ':hover': { backgroundColor: '#058f00' } }}
            >
              <ListItemIcon>
                <Paid style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primary="7 - Earnings"
                primaryTypographyProps={{
                  marginLeft: -1.5,
                }}
              />
            </ListItemButton>
          </Link> */}

          {/* Analytics */}
          <Link href="/nursery">
            <ListItemButton
              sx={{ marginTop: 1, ":hover": { backgroundColor: "#058f00" } }}
            >
              <ListItemIcon>
                <Timeline style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primary="6 - Analytics"
                primaryTypographyProps={{
                  marginLeft: -1.5,
                }}
              />
            </ListItemButton>
          </Link>

          <ListItemButton
            onClick={handleSettingsClick}
            sx={{ marginTop: 1, ":hover": { backgroundColor: "#058f00" } }}
          >
            <ListItemIcon>
              <DisplaySettingsIcon
                style={{ color: "white", fontSize: "22px" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="7 - Settings"
              primaryTypographyProps={{
                marginLeft: -1.5,
              }}
            />
            {settingsOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Link href="/nursery/settings/edit-profile">
            <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ":hover": { backgroundColor: "#058f00" } }}
                >
                  <ListItemIcon>
                    <AddToQueueIcon
                      style={{
                        fontSize: "22px",
                        color: "white",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="7.1 - Edit Profile"
                    primaryTypographyProps={{
                      fontSize: "14px",
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          <Link href="/nursery/settings/change-password">
            <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ":hover": { backgroundColor: "#058f00" } }}
                >
                  <ListItemIcon>
                    <DisplaySettingsIcon
                      style={{ color: "white", fontSize: "22px" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="7.2 - Change Password"
                    primaryTypographyProps={{
                      fontSize: "14px",
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          {/* ending of list */}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
