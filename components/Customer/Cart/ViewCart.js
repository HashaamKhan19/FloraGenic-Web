import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Paper,
  Stack,
  Stepper,
} from '@mantine/core'
import { React, useState } from 'react'
import MyCartItems from './MyCartItems'
import CartDetails from './CartDetails'
import ShippingDetails from './ShippingDetails'
import PaymentDetails from './PaymentDetails'
import OrderConfirmation from './OrderConfirmation'
import Link from 'next/link'

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
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        styles={{
          root: {
            width: '100%',
          },
          separator: {
            color: '#bfe6a1',
            borderColor: '#bfe6a1',
            border: '4px solid #bfe6a1',
            borderRadius: '200px',
            width: '100%',
          },
          separatorActive: {
            width: '100%',
            color: '#bfe6a1',
            border: `4px solid #62A82C`,
            transition: 'all 1s ease',
          },
          steps: {
            width: '100%',
            paddingLeft: '20rem',
            paddingRight: '20rem',
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
            backgroundColor: active >= 0 ? '#62A82C' : '#bfe6a1',
            transition: 'all 0.7s ease',
          }}
          label="1. Cart"
        >
          <Grid>
            <Grid.Col sm={8}>
              <MyCartItems />
            </Grid.Col>
            <Grid.Col sm={4}>
              <CartDetails />
              <Button
                fullWidth
                style={{
                  backgroundColor: '#62A82C',
                  color: '#fff',
                }}
                onClick={() => setActive(1)}
              >
                <Center>Proceed to Details</Center>
              </Button>
            </Grid.Col>
          </Grid>
        </Stepper.Step>
        <Stepper.Step
          style={{
            backgroundColor: active >= 1 ? '#62A82C' : '#bfe6a1',
            transition: 'all 0.7s ease',
          }}
          label="2. Details"
        >
          <Grid>
            <Grid.Col sm={8}>
              <ShippingDetails />
            </Grid.Col>
            <Grid.Col sm={4} pb={'xl'}>
              <CartDetails />
              <Stack spacing={'xs'} mb={'xl'}>
                <Button
                  fullWidth
                  style={{
                    backgroundColor: '#62A82C',
                    color: '#fff',
                  }}
                  onClick={() => setActive(2)}
                >
                  <Center>Proceed to Payment</Center>
                </Button>
                <Button
                  fullWidth
                  style={{
                    border: '1px solid #62A82C',
                    color: '#62A82C',
                    backgroundColor: '#fff',
                  }}
                  onClick={() => setActive(0)}
                >
                  <Center>Back to Cart</Center>
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
        </Stepper.Step>
        <Stepper.Step
          style={{
            backgroundColor: active >= 2 ? '#62A82C' : '#bfe6a1',
            transition: 'all 0.7s ease',
          }}
          label="3. Payment"
        >
          <Grid>
            <Grid.Col sm={8}>
              <PaymentDetails />
            </Grid.Col>
            <Grid.Col sm={4} pb={'xl'}>
              <CartDetails />
              <Stack mb={'xl'} spacing={'xs'}>
                <Link href={'/customer/checkout'}>
                  <Button
                    fullWidth
                    style={{
                      backgroundColor: '#62A82C',
                      color: '#fff',
                    }}
                  >
                    <Center>Review Order</Center>
                  </Button>
                </Link>
                <Button
                  fullWidth
                  style={{
                    border: '1px solid #62A82C',
                    color: '#62A82C',
                    backgroundColor: '#fff',
                  }}
                  onClick={() => setActive(1)}
                >
                  <Center>Back to Details</Center>
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
        </Stepper.Step>
        {/* <Stepper.Step
          style={{
            backgroundColor: active >= 3 ? '#62A82C' : '#bfe6a1',
            transition: 'all 0.7s ease',
          }}
          label="4. Checkout"
          disabled={true}
        ></Stepper.Step> */}
      </Stepper>
    </Container>
  )
}

export default ViewCart
