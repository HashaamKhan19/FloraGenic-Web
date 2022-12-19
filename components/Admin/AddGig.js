import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Check from '@mui/icons-material/Check'
import EventNoteIcon from '@mui/icons-material/EventNote'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import { Box } from '@mui/system'
import { Button, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import AddGigDetails from './AddGigDetails'
import AddGigGallery from './AddGigGallery'
import AddGigPricing from './AddGigPricing'

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}))

function QontoStepIcon(props) {
  const { active, completed, className } = props

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  )
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(90deg, rgba(139,228,70,1) 20%, rgba(98,168,44,1) 50%, rgba(98,168,44,1) 50%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(90deg, rgba(139,228,70,1) 20%, rgba(98,168,44,1) 50%, rgba(98,168,44,1) 50%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}))

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient(270deg, rgba(98,168,44,1) 50%, rgba(98,168,44,1) 50%);',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient(270deg, rgba(98,168,44,1) 50%, rgba(98,168,44,1) 50%);',
  }),
}))

function ColorlibStepIcon(props) {
  const { active, completed, className } = props

  const icons = {
    1: <EventNoteIcon />,
    2: <LocalAtmIcon />,
    3: <AddPhotoAlternateIcon />,
  }

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
}

const steps = ['Gig Details', 'Package Details', 'Gallery']

export default function AddGig() {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Paper
        sx={{
          padding: 5,
          boxShadow: 5,
          width: '90%',
        }}
      >
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<ColorlibConnector />}
        >
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 5, mb: 2, textAlign: 'center' }}>
              All steps completed - you&apos;re finished with your gig
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button
                onClick={handleReset}
                variant="contained"
                color="secondary"
                sx={{ color: 'white' }}
              >
                Done
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box
              sx={{
                mt: 5,
              }}
            >
              {activeStep === 0 ? (
                <AddGigDetails />
              ) : activeStep === 1 ? (
                <AddGigPricing />
              ) : (
                <AddGigGallery />
              )}
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                pt: 5,
                justifyContent: 'space-between',
              }}
            >
              <Button
                color="primary"
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, color: 'white' }}
              >
                Back
              </Button>

              <Button
                onClick={handleNext}
                color="primary"
                variant="contained"
                sx={{ color: 'white' }}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Paper>
    </Box>
  )
}
