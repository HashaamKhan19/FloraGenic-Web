import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 5,
  borderRadius: 1,
  textAlign: 'center',
}

export default function ActionConfirmationModal({
  open,
  handleConfirm,
  handleClose,
  text,
  warningText,
}) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
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
              {text}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {warningText}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                mt: 4,
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ color: 'white' }}
                onClick={() => {
                  handleClose()
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="error"
                // sx={{ flex: 1 }}
                onClick={() => {
                  handleConfirm()
                  handleClose()
                }}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
