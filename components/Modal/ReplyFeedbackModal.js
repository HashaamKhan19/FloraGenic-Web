import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import ControlledTextInput from '../Generic/ControlledComponents/ControlledTextInput'
import { useForm } from 'react-hook-form'
import { Button, InputLabel } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
  textAlign: 'center',
}

export default function ReplyFeedbackModal({
  replyOpen,
  handleReplyClose,
  replyText,
}) {
  const {
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={replyOpen}
        onClose={handleReplyClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={replyOpen}>
          <Box sx={style}>
            <Box>
              <InputLabel
                htmlFor="response"
                variant="standard"
                required
                sx={{
                  mb: 1.5,
                  color: 'text.primary',
                  '& span': { color: 'error.light' },
                  textAlign: 'left',
                }}
              >
                Send Response back to User&apos;s {replyText}
              </InputLabel>
              <ControlledTextInput
                control={control}
                required
                id="response"
                name="response"
                fullWidth
                multiline
                rows={4}
                autoComplete="Response Details"
                //   error={errors.address ? true : false}
                //   helperText={errors.address && 'Nursery Address is required'}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 3,
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  handleReplyClose()
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ color: 'white' }}
                onClick={() => {
                  handleReplyClose()
                }}
              >
                Send Response
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
