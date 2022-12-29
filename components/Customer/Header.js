import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import Drawer from '@mui/material/Drawer'
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import PopupState, { bindMenu, bindHover } from 'material-ui-popup-state'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import Cart from './Cart'

const pages = ['Products', 'Nurseries', 'Gardeners']
const settings = ['Profile', 'Logout']

function Header({ children }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <AppBar position="sticky" color="background" sx={{ boxShadow: '1' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {
                  toggleDrawer()
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                open={drawerOpen}
                onClose={() => {
                  toggleDrawer(false)
                }}
              >
                <Box
                  sx={{
                    m: 2,
                    textAlign: 'center',
                    width: { xs: '200px', sm: '400px' },
                  }}
                >
                  {pages.map((page, index) => (
                    <Typography key={index} textAlign="center">
                      {page}
                    </Typography>
                  ))}
                </Box>
              </Drawer>
            </Box>
            {/* Logo -------------------------------------------------------- */}
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) =>
                page.match(/Products/) ? (
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <Button
                          variant="text"
                          sx={{ my: 2, mx: 3, color: 'black', display: 'flex' }}
                          {...bindHover(popupState)}
                        >
                          {page}
                          <KeyboardArrowDownOutlinedIcon
                            fontSize="small"
                            sx={{ ml: 1 }}
                          />
                        </Button>
                        <HoverMenu {...bindMenu(popupState)}>
                          <MenuItem onClick={popupState.close}>
                            Product Category
                          </MenuItem>
                          <MenuItem onClick={popupState.close}>
                            Product Category
                          </MenuItem>
                          <MenuItem onClick={popupState.close}>
                            Product Category
                          </MenuItem>
                        </HoverMenu>
                      </React.Fragment>
                    )}
                  </PopupState>
                ) : (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, mx: 3, color: 'black', display: 'block' }}
                    variant="text"
                  >
                    {page}
                  </Button>
                ),
              )}
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                display: 'flex',
                gap: 2,
              }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                  <PersonOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Cart />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </>
  )
}
export default Header
