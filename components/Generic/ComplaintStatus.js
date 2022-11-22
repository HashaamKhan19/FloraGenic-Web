import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import * as React from 'react'
import { useEffect, useState } from 'react'

export default function ComplaintStatus() {
  const [status, setStatus] = useState(true)
  const [buttonTextColor, setButtonTextColor] = useState(
    { status } ? 'error' : 'primary',
  )
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  useEffect(() => {
    setStatus(!status)
    setButtonTextColor({ status } ? 'primary' : 'error')
  }, [])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        onClick={handleClick}
        variant="outlined"
        color={buttonTextColor}
        endIcon={
          <KeyboardArrowDownIcon sx={{ marginLeft: -1, marginRight: 1 }} />
        }
        size="small"
        sx={{
          padding: '1px 0',
          borderWidth: '1px',
          justifyContent: 'center',
          fontFamily: 'poppins',
          fontSize: '10px',
          maxWidth: '80px',
          paddingLeft: 1,
        }}
      >
        {status ? 'Active' : 'Resolved'}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {status ? (
          <MenuItem
            onClick={() => {
              handleClose()
              setStatus(!status)
              setButtonTextColor('primary')
            }}
            sx={{
              minWidth: '60px',
              justifyContent: 'center',
              maxHeight: '10px',
              fontSize: '14px',
            }}
          >
            Resolve
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() => {
              handleClose()
              setStatus(!status)
              setButtonTextColor('error')
            }}
            sx={{
              minWidth: '65px',
              justifyContent: 'center',
              maxHeight: '10px',
              fontSize: '14px',
            }}
          >
            UnResolve
          </MenuItem>
        )}
      </Menu>
    </>
  )
}
