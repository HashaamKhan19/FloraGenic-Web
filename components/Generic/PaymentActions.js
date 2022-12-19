import React from 'react'
import { Box, Tooltip } from '@mui/material'
import { Visibility, Delete } from '@mui/icons-material'
import ActionConfirmationModal from '../Modal/ActionConfirmationModal'
import ViewUserModal from '../Modal/ViewUserModal'

const PaymentActions = ({ text, warningText, viewText, type }) => {
  // Action Confirmation Modal States
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // View Payment Modal States
  const [viewOpen, setViewOpen] = React.useState(false)
  const handleViewOpen = () => setViewOpen(true)
  const handleViewClose = () => setViewOpen(false)

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
          <Visibility
            sx={{ ...styles, color: 'info.dark' }}
            onClick={handleViewOpen}
          />
        </Tooltip>
        <Tooltip title="Delete">
          <Delete
            sx={{ ...styles, color: 'error.main' }}
            onClick={handleOpen}
          />
        </Tooltip>
      </Box>

      <ActionConfirmationModal
        open={open}
        handleClose={handleClose}
        text={text}
        warningText={warningText}
      />

      <ViewUserModal
        viewText={viewText}
        viewOpen={viewOpen}
        handleViewClose={handleViewClose}
        type={type}
      />
    </>
  )
}

export default PaymentActions
