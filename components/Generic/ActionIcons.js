import React from 'react'
import { Box, IconButton, Tooltip } from '@mui/material'
import { Visibility, Edit, Delete } from '@mui/icons-material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ActionConfirmationModal from './ActionConfirmationModal'

const ActionIcons = ({ type, text, warningText }) => {
  // Modal
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const router = useRouter()
  const styles = {
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(0.8)',
    },
  }

  const handleEdit = () => {
    console.log('panchod')
    switch (type) {
      case 'user':
        router.push(`editUser/${123}`)
        break
      case 'product':
        router.push(`editProduct/${123}`)
        break
      case 'category':
        router.push(`editCategory/${123}`)
        break
      case 'nursery':
        router.push(`editNursery/${123}`)
        break
    }
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
          {/* <Link href={`editUser/${123}`}> */}
          <Edit sx={{ ...styles, color: 'info.main' }} onClick={handleEdit} />
          {/* </Link> */}
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
    </>
  )
}

export default ActionIcons
