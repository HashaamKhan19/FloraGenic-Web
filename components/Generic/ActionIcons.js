import React from 'react'
import { Box, Tooltip } from '@mui/material'
import { Visibility, Edit, Delete } from '@mui/icons-material'

const ActionIcons = () => {
  const styles = {
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(0.8)',
    },
  }
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Tooltip title="View">
          <Visibility sx={{ ...styles, color: 'info.dark' }} />
        </Tooltip>
        <Tooltip title="Edit">
          <Edit sx={{ ...styles, color: 'info.main' }} />
        </Tooltip>
        <Tooltip title="Delete">
          <Delete sx={{ ...styles, color: 'error.main' }} />
        </Tooltip>
      </Box>
    </>
  )
}

export default ActionIcons
