import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import { useRouter } from 'next/router'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  textAlign: 'center',
}

export default function TaskConfirmationModal({
  open = false,
  redirectURL = null,
  successMessage = null,
  loading = true,
  err = null,
}) {
  const [openModal, setOpenModal] = useState(open)
  const router = useRouter()

  const handleSuccessClose = () => {
    setOpenModal(false)
    if (redirectURL) {
      router
        .push(redirectURL)
        .then(() => window.scrollTo(0, 0))
        .catch((err) => console.log(err))
    }
  }

  const handleFailureClose = () => {
    setOpenModal(false)
  }

  return (
    <Modal
      disableEscapeKeyDown
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleSuccessClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            gutterBottom
          >
            {loading && 'Please wait...'}
            {!loading && err && 'Something went wrong!'}
            {!loading && !err && 'Success!'}
          </Typography>
          <Typography id="transition-modal-description">
            {loading && 'Please bear with us. Your request is being processed.'}
            {!loading &&
              err &&
              (err?.message || err?.error || err || 'Something went wrong!')}
            {/* (err?.error.startsWith("E11000")
                ? "This category already exists. Please try again with a different category."
                : err?.error || "Something went wrong. Please try again.")} */}
            {!loading &&
              !err &&
              (successMessage ||
                'Your request has been processed successfully.')}
          </Typography>

          {loading && (
            <CircularProgress
              size={50}
              sx={{
                marginTop: 2,
              }}
            />
          )}
          {!loading && !err && (
            <Button
              variant="contained"
              color="success"
              sx={{
                marginTop: 2,
              }}
              onClick={handleSuccessClose}
            >
              OK
            </Button>
          )}

          {!loading && err && (
            <Button
              variant="contained"
              color="error"
              sx={{
                marginTop: 2,
              }}
              onClick={handleFailureClose}
            >
              I Understand
            </Button>
          )}
        </Box>
      </Fade>
    </Modal>
  )
}
