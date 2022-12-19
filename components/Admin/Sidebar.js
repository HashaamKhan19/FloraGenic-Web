import { FiBox } from 'react-icons/fi'
import mainLogo from '../../public/images/Logo.png'
import { AiFillPlusSquare } from 'react-icons/ai'
import BarChartIcon from '@mui/icons-material/BarChart'
import CategoryIcon from '@mui/icons-material/Category'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import MenuIcon from '@mui/icons-material/Menu'
import AddToQueueIcon from '@mui/icons-material/AddToQueue'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import PersonIcon from '@mui/icons-material/Person'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage'
import HouseSidingIcon from '@mui/icons-material/HouseSiding'
import ReviewsIcon from '@mui/icons-material/Reviews'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { styled, useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ChatIcon from '@mui/icons-material/Chat'
import ProfileMenu from '../Generic/ProfileMenu'
import Link from 'next/link'
import * as React from 'react'
import { useState } from 'react'
import { Router } from '@mui/icons-material'
import { useRouter } from 'next/router'
import Image from 'next/image'

const drawerWidth = 280

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
)

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export default function Sidebar({ children }) {
  const router = useRouter()
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)
  const [adminlistOpen, setAdminListOpen] = useState(false)
  const [nurserylistOpen, setNurseryListOpen] = useState(false)
  const [categorylistOpen, setCategoryListOpen] = useState(false)
  const [productlistOpen, setProductListOpen] = useState(false)
  const [giglistOpen, setGigListOpen] = useState(false)

  const handleAdminClick = () => {
    setAdminListOpen(!adminlistOpen)
  }
  const handleCategoryClick = () => {
    setCategoryListOpen(!categorylistOpen)
  }
  const handleGigClick = () => {
    setGigListOpen(!giglistOpen)
  }
  const handleProductClick = () => {
    setProductListOpen(!productlistOpen)
  }
  const handleNurseryClick = () => {
    setNurseryListOpen(!nurserylistOpen)
  }
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'white' }}>
        <Toolbar sx={{ color: '#0d5209' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant="h6"
              noWrap
              width={'100%'}
              component="div"
              sx={{ color: 'primary.dark' }}
            >
              Admin Dashboard
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
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
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundImage: `url("https://images.unsplash.com/photo-1629197520635-16570fbd0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80")`,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box
            width="100%"
            height="100%"
            onClick={() => {
              router.push('/admin')
            }}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: 1,
              mr: 3,
              justifyContent: 'center',
              ':hover': {
                cursor: 'pointer',
              },
            }}
          >
            <Image
              src={mainLogo}
              duration={0}
              fit="contain"
              width="100%"
              alt="FloraGenicLogo"
              style={{
                width: 42,
                height: 42,
                marginTop: 8,
                marginLeft: 4,
              }}
            />
            <Typography
              sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                ml: 1,
                mt: 1,
                fontSize: 26,
              }}
            >
              FloraGenic
            </Typography>
          </Box>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              ':hover': { backgroundColor: '#1D9D45' },
            }}
          >
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon
                sx={{
                  color: 'white',
                  borderRadius: 10,
                }}
              />
            ) : (
              <ChevronRightIcon
                sx={{ color: 'white', backgroundColor: '#1a8014' }}
              />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {/* Sidebar List starts from here  */}
        <List sx={{ color: 'white' }}>
          {/* Dashboard */}
          <Link href="/admin">
            <ListItemButton
              sx={{ marginTop: 2, ':hover': { backgroundColor: '#058f00' } }}
            >
              <ListItemIcon>
                <DashboardIcon style={{ color: 'white' }} />
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
            sx={{ marginTop: 1, ':hover': { backgroundColor: '#058f00' } }}
          >
            <ListItemIcon>
              <PersonIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText
              primary="2 - Users"
              primaryTypographyProps={{
                marginLeft: -1.5,
              }}
            />
            {adminlistOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Link href="/admin/addUser">
            <Collapse in={adminlistOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ':hover': { backgroundColor: '#058f00' } }}
                >
                  <ListItemIcon>
                    <GroupAddIcon
                      style={{ color: 'white', fontSize: '22px' }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="2.1 - Add User"
                    primaryTypographyProps={{
                      fontSize: '14px',
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          <Link href="/admin/viewUsers">
            <Collapse in={adminlistOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ':hover': { backgroundColor: '#058f00' } }}
                >
                  <ListItemIcon>
                    <PeopleAltIcon
                      style={{ color: 'white', fontSize: '22px' }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="2.2 - View all Users"
                    primaryTypographyProps={{
                      fontSize: '14px',
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          {/* Nursery */}

          <ListItemButton
            onClick={handleNurseryClick}
            sx={{ marginTop: 1, ':hover': { backgroundColor: '#058f00' } }}
          >
            <ListItemIcon>
              <HouseSidingIcon style={{ fontSize: '24px', color: 'white' }} />
            </ListItemIcon>
            <ListItemText
              primary="3 - Nurseries"
              primaryTypographyProps={{
                marginLeft: -1.5,
              }}
            />
            {nurserylistOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Link href="/admin/addNursery">
            <Collapse in={nurserylistOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ':hover': { backgroundColor: '#058f00' } }}
                >
                  <ListItemIcon>
                    <HouseSidingIcon
                      style={{
                        fontSize: '22px',
                        color: 'white',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="3.1 - Add Nursery"
                    primaryTypographyProps={{
                      fontSize: '14px',
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          <Link href="/admin/viewNurseries">
            <Collapse in={nurserylistOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ':hover': { backgroundColor: '#058f00' } }}
                >
                  <ListItemIcon>
                    <HolidayVillageIcon
                      style={{
                        fontSize: '22px',
                        color: 'white',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="3.2 - View all Nurseries"
                    primaryTypographyProps={{
                      fontSize: '14px',
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          {/* Products */}

          <ListItemButton
            onClick={handleProductClick}
            sx={{ marginTop: 1, ':hover': { backgroundColor: '#058f00' } }}
          >
            <ListItemIcon>
              {/* <StoreIcon style={{ color: "white" }} /> */}
              <FiBox style={{ fontSize: '24px', color: 'white' }} />
            </ListItemIcon>
            <ListItemText
              primary="4 - Products"
              primaryTypographyProps={{
                marginLeft: -1.5,
              }}
            />
            {productlistOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Link href="/admin/addProduct">
            <Collapse in={productlistOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ':hover': { backgroundColor: '#058f00' } }}
                >
                  <ListItemIcon>
                    <AiFillPlusSquare
                      style={{
                        fontSize: '22px',
                        color: 'white',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="4.1 - Add Product"
                    primaryTypographyProps={{
                      fontSize: '14px',
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          <Link href="/admin/viewProducts">
            <Collapse in={productlistOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ':hover': { backgroundColor: '#058f00' } }}
                >
                  <ListItemIcon>
                    <FiBox
                      style={{
                        fontSize: '22px',
                        color: 'white',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="4.2 - View all Products"
                    primaryTypographyProps={{
                      fontSize: '14px',
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          {/* Category */}

          <ListItemButton
            onClick={handleCategoryClick}
            sx={{ marginTop: 1, ':hover': { backgroundColor: '#058f00' } }}
          >
            <ListItemIcon>
              <CategoryIcon style={{ color: 'white', fontSize: '22px' }} />
            </ListItemIcon>
            <ListItemText
              primary="5 - Category"
              primaryTypographyProps={{
                marginLeft: -1.5,
              }}
            />
            {categorylistOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Link href="/admin/addCategory">
            <Collapse in={categorylistOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ':hover': { backgroundColor: '#058f00' } }}
                >
                  <ListItemIcon>
                    <AiFillPlusSquare
                      style={{
                        fontSize: '22px',
                        color: 'white',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="5.1 - Add Category"
                    primaryTypographyProps={{
                      fontSize: '14px',
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          <Link href="/admin/viewCategories">
            <Collapse in={categorylistOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ':hover': { backgroundColor: '#058f00' } }}
                >
                  <ListItemIcon>
                    <CategoryIcon
                      style={{ color: 'white', fontSize: '22px' }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="5.2 - View all Categories"
                    primaryTypographyProps={{
                      fontSize: '14px',
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          {/* Gigs */}

          <ListItemButton
            onClick={handleGigClick}
            sx={{ marginTop: 1, ':hover': { backgroundColor: '#058f00' } }}
          >
            <ListItemIcon>
              <DisplaySettingsIcon
                style={{ color: 'white', fontSize: '22px' }}
              />
            </ListItemIcon>
            <ListItemText
              primary="6 - Gigs"
              primaryTypographyProps={{
                marginLeft: -1.5,
              }}
            />
            {giglistOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Link href="/admin/addGig">
            <Collapse in={giglistOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ':hover': { backgroundColor: '#058f00' } }}
                >
                  <ListItemIcon>
                    <AddToQueueIcon
                      style={{
                        fontSize: '22px',
                        color: 'white',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="6.1 - Add Gig"
                    primaryTypographyProps={{
                      fontSize: '14px',
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          <Link href="/admin/viewGigs">
            <Collapse in={giglistOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{ pl: 4, ':hover': { backgroundColor: '#058f00' } }}
                >
                  <ListItemIcon>
                    <DisplaySettingsIcon
                      style={{ color: 'white', fontSize: '22px' }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="6.2 - View all Gigs"
                    primaryTypographyProps={{
                      fontSize: '14px',
                      marginLeft: -1.5,
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>

          {/* Chats */}
          <Link href="/admin/viewChats">
            <ListItemButton
              sx={{ marginTop: 1, ':hover': { backgroundColor: '#058f00' } }}
            >
              <ListItemIcon>
                <ChatIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primary="7 - Chat"
                primaryTypographyProps={{
                  marginLeft: -1.5,
                }}
              />
            </ListItemButton>
          </Link>

          {/* Payments */}
          <Link href="/admin/viewPayments">
            <ListItemButton
              sx={{ marginTop: 1, ':hover': { backgroundColor: '#058f00' } }}
            >
              <ListItemIcon>
                <LocalAtmIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primary="8 - Payments"
                primaryTypographyProps={{
                  marginLeft: -1.5,
                }}
              />
            </ListItemButton>
          </Link>

          {/* Reviews */}
          <Link href="/admin/viewReviews">
            <ListItemButton
              sx={{ marginTop: 1, ':hover': { backgroundColor: '#058f00' } }}
            >
              <ListItemIcon>
                <ReviewsIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primary="9 - Reviews"
                primaryTypographyProps={{
                  marginLeft: -1.5,
                }}
              />
            </ListItemButton>
          </Link>

          {/* Complaints */}
          <Link href="/admin/viewComplaints">
            <ListItemButton
              sx={{ marginTop: 1, ':hover': { backgroundColor: '#058f00' } }}
            >
              <ListItemIcon>
                <ReportGmailerrorredIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primary="10 - Complaints"
                primaryTypographyProps={{
                  marginLeft: -1.5,
                }}
              />
            </ListItemButton>
          </Link>

          {/* Statistics */}
          <Link href="/admin/viewStatistics">
            <ListItemButton
              sx={{ marginTop: 1, ':hover': { backgroundColor: '#058f00' } }}
            >
              <ListItemIcon>
                <BarChartIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                primary="11 - Statistics"
                primaryTypographyProps={{
                  marginLeft: -1.5,
                }}
              />
            </ListItemButton>
          </Link>

          {/* ending of list */}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  )
}
