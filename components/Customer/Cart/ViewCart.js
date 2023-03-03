import { Box, Center, Container, Stepper } from '@mantine/core'
import { React, useState } from 'react'

const StepIcon = ({ active, completed, icon }) => {
  const bgColor = completed ? 'green' : 'transparent'
  const color = completed ? 'white' : 'black'

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        backgroundColor: bgColor,
        color: color,
        fontWeight: 'bold',
      }}
    >
      {icon}
    </Box>
  )
}

const ViewCart = () => {
  const [active, setActive] = useState(0)

  return (
    <Container size={'xl'} pt={40}>
      <Center>
        <Box
          sx={{
            width: '50%',
          }}
        >
          <Stepper
            active={active}
            onStepClick={setActive}
            breakpoint="sm"
            styles={{
              separator: {
                color: '#9fda72',
                borderColor: '#9fda72',
                border: '4px solid #9fda72',
                borderRadius: '200px',
                width: '100%',
              },
              separatorActive: {
                width: '100%',
                color: '#9fda72',
                border: `4px solid #62A82C`,
                transition: 'all 1s ease',
              },
              step: {
                backgroundColor: '#62A82C',
                borderRadius: '200px',
                width: '100%',
              },
              stepIcon: {
                display: 'none',
              },
              stepBody: {
                color: '#fff',
                height: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: 0,
                margin: 0,
                '&:hover': {
                  backgroundColor: '#62A82C',
                  borderRadius: '200px',
                },
              },
              stepLabel: {
                color: '#fff',
                fontSize: '16px',
              },
            }}
          >
            <Stepper.Step
              style={{
                backgroundColor: active >= 0 ? '#62A82C' : '##9fda72',
                transition: 'all 0.7s ease',
              }}
              label="1. Cart"
            >
              {active}
            </Stepper.Step>
            <Stepper.Step
              style={{
                backgroundColor: active >= 1 ? '#62A82C' : '#9fda72',
                transition: 'all 0.7s ease',
              }}
              label="2. Details"
            >
              {active}
            </Stepper.Step>
            <Stepper.Step
              style={{
                backgroundColor: active >= 2 ? '#62A82C' : '#9fda72',
                transition: 'all 0.7s ease',
              }}
              label="3. Payment"
            >
              {active}
            </Stepper.Step>
            <Stepper.Step
              style={{
                backgroundColor: active >= 3 ? '#62A82C' : '#9fda72',
                transition: 'all 0.7s ease',
              }}
              label="4. Reviews"
            >
              {active}
            </Stepper.Step>
          </Stepper>
        </Box>
      </Center>
    </Container>
  )
}

export default ViewCart
