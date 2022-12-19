import React from 'react'
import { Box, Tooltip } from '@mui/material'
import { Visibility, Delete } from '@mui/icons-material'
import ReplyIcon from '@mui/icons-material/Reply'
import ActionConfirmationModal from '../Modal/ActionConfirmationModal'
import ViewFeedbackModal from '../Modal/ViewFeedbackModal'
import ReplyFeedbackModal from '../Modal/ReplyFeedbackModal'

const ReviewActions = ({
  text,
  warningText,
  viewText,
  viewSubject,
  replyText,
}) => {
  // Action Confirmation Modal States
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // View Modal States
  const [openView, setOpenView] = React.useState(false)
  const handleOpenView = () => setOpenView(true)
  const handleCloseView = () => setOpenView(false)

  // Reply Modal States
  const [openReply, setOpenReply] = React.useState(false)
  const handleOpenReply = () => setOpenReply(true)
  const handleCloseReply = () => setOpenReply(false)

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
            onClick={handleOpenView}
          />
        </Tooltip>
        <Tooltip title="Reply">
          <ReplyIcon
            sx={{ ...styles, color: 'info.main' }}
            onClick={handleOpenReply}
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

      <ViewFeedbackModal
        viewText={viewText}
        viewSubject={viewSubject}
        viewOpen={openView}
        handleViewClose={handleCloseView}
      />

      <ReplyFeedbackModal
        replyText={replyText}
        replyOpen={openReply}
        handleReplyClose={handleCloseReply}
      />
    </>
  )
}

export default ReviewActions
