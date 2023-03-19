import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Image,
  Paper,
  Stack,
  Stepper,
  Text,
} from '@mantine/core'
import { React, useState, useContext } from 'react'
import MyCartItems from './MyCartItems'
import CartDetails from './CartDetails'
import ShippingDetails from './ShippingDetails'
import PaymentDetails from './PaymentDetails'
import { ShopContext } from '../../../context/shopContextProvider'
import Link from 'next/link'
import { gql, useQuery } from '@apollo/client'

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

const GET_PRODUCTS = gql`
  query Query {
    products {
      category {
        name
      }
      description
      hidden
      id
      images
      name
      nursery {
        id
        images
        name
        details
      }
      overallRating
      retailPrice
      sold
      stock
    }
  }
`

const ViewCart = () => {
  const [active, setActive] = useState(0)

  const { data, loading, error } = useQuery(GET_PRODUCTS)

  const { cartItems } = useContext(ShopContext)

  console.log('====================================')
  console.log('cartItems', cartItems.length)
  console.log('====================================')

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
            // '&:hover': {
            //   backgroundColor: '#62A82C',
            //   borderRadius: '200px',
            // },
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
            <Grid.Col sm={cartItems?.length === 0 ? 12 : 8} mt={'xl'}>
              {cartItems?.length === 0 && (
                <Stack align="center" mt={'xl'} pb={'xl'}>
                  <Text
                    style={{
                      fontSize: '20px',
                      fontWeight: 525,
                      color: 'darkslategray',
                    }}
                  >
                    Your cart is empty
                  </Text>
                  <Image
                    src="/icons/iconEmpty.png"
                    alt="Empty Cart"
                    width={64}
                    height={64}
                  />
                  <Link href="/customer/products">
                    <Button
                      style={{
                        backgroundColor: '#62A82C',
                        color: '#fff',
                      }}
                      mt={'xs'}
                    >
                      <Center>Shop Now</Center>
                    </Button>
                  </Link>
                </Stack>
              )}
              {data?.products
                ?.filter((product) => {
                  return cartItems.some((item) => item.id === product.id)
                })
                .map((product, index) => {
                  return (
                    <MyCartItems
                      product={product}
                      index={index}
                      key={product.id}
                    />
                  )
                })}
            </Grid.Col>
            <Grid.Col sm={4} pb={'xl'} hidden={cartItems?.length === 0}>
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
          disabled={cartItems?.length === 0}
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
          disabled={cartItems?.length === 0}
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
