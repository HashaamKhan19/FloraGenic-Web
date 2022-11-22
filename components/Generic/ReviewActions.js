import React from 'react'
import { Box, Tooltip } from '@mui/material'
import { Visibility, Delete } from '@mui/icons-material'
import ReplyIcon from '@mui/icons-material/Reply'

const ReviewActions = () => {
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
        <Tooltip title="Reply">
          <ReplyIcon sx={{ ...styles, color: 'info.main' }} />
        </Tooltip>
        <Tooltip title="Delete">
          <Delete sx={{ ...styles, color: 'error.main' }} />
        </Tooltip>
      </Box>
    </>
  )
}

export default ReviewActions
