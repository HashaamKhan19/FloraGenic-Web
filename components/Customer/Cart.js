import React, { useState } from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import { IconButton, Tooltip } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import { Box } from '@mui/system'

const Cart = () => {
  const [cartDrawer, setCartDrawer] = useState(false)

  const toggleDrawer = () => {
    setCartDrawer(!cartDrawer)
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -1,
      top: 8,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      color: '#fff',
    },
  }))

  return (
    <>
      <Tooltip title="Cart">
        <IconButton
          sx={{ p: 1 }}
          onClick={() => {
            toggleDrawer()
          }}
        >
          <StyledBadge badgeContent={2} color="primary">
            <ShoppingBagOutlinedIcon sx={{ fontSize: '24px' }} />
          </StyledBadge>
        </IconButton>
      </Tooltip>
      <Drawer
        anchor="right"
        open={cartDrawer}
        onClose={() => {
          toggleDrawer(false)
        }}
      >
        <Box
          sx={{
            m: 2,
            textAlign: 'center',
            width: { xs: '200px', sm: '350px' },
          }}
        >
          Cart Items Here
        </Box>
      </Drawer>
    </>
  )
}

export default Cart
