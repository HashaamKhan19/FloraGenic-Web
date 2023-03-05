import {
  Badge,
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Image,
  Indicator,
  Paper,
  Stack,
  Stepper,
  StepperProps,
  Text,
  createStyles,
} from '@mantine/core'
import React, { useState } from 'react'
import { AiOutlineCheckCircle, AiTwotoneCheckCircle } from 'react-icons/ai'
import { BiPackage } from 'react-icons/bi'
import { BsBagCheckFill, BsCheckCircleFill, BsTruck } from 'react-icons/bs'
import { FaGifts } from 'react-icons/fa'

const useStyles = createStyles(() => ({
  customText: {
    fontWeight: 500,
    fontSize: '14px',
    color: 'darkslategray',
  },
  customText2: {
    fontWeight: 500,
    fontSize: '16px',
    color: 'darkslategray',
  },
  customText3: {
    fontWeight: 500,
    fontSize: '14px',
    color: 'gray',
  },
  customText4: {
    fontSize: '1.1rem',
    fontWeight: 500,
    color: 'darkslategray',
  },
}))

const OrderDetails = () => {
  const [active, setActive] = useState(1)
  const { classes } = useStyles()

  const items = [
    {
      id: 1,
      name: 'Item 1',
      price: 10,
      quantity: 1,
      category: 'Decoration',
      image:
        'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Item 2',
      price: 20,
      quantity: 1,
      category: 'Decoration',
      image:
        'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      name: 'Item 3',
      price: 20,
      quantity: 1,
      category: 'Decoration',
      image:
        'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ]

  function StyledStepper(props) {
    return (
      <Stepper
        p={'xl'}
        styles={{
          stepBody: {
            display: 'none',
          },

          step: {
            padding: 0,
          },

          stepIcon: {
            borderWidth: 0,
          },

          separator: {
            marginLeft: -2,
            marginRight: -2,
            height: 3,
          },

          separatorActive: {
            backgroundColor: '#62A82C',
          },
        }}
        active={2}
        {...props}
        size="xl"
      />
    )
  }

  return (
    <>
      <Group position="apart">
        <Group spacing={'xs'}>
          <BsBagCheckFill size={22} color="#62A82C" />
          <Text
            style={{
              fontWeight: 500,
              fontSize: '24px',
              color: 'darkslategray',
            }}
          >
            Order Details
          </Text>
        </Group>
        <Button variant="light" c={'#62A82C'}>
          Order Again
        </Button>
      </Group>

      <Paper p={'xl'} mt={'lg'} shadow="xs" radius={'md'}>
        <StyledStepper active={active}>
          <Stepper.Step
            completedIcon={
              <>
                <BiPackage size={30} />
                <AiOutlineCheckCircle
                  size={16}
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    zIndex: 1,
                    backgroundColor: 'gray',
                    fill: 'white',
                    borderRadius: '50%',
                  }}
                />
              </>
            }
            color="#62A82C"
            style={{
              position: 'relative',
            }}
          />
          <Stepper.Step icon={<BsTruck size={28} />} />
          <Stepper.Step icon={<FaGifts size={28} />} />
        </StyledStepper>
        <Group pt={'xl'} position="right">
          <Badge variant="light" c={'#62A82C'} size="lg">
            <Text c={'#62A82C'} weight={400}>
              Estimated Delivery Date 4th October
            </Text>
          </Badge>
        </Group>
      </Paper>

      <Paper bg={'#e5e5e5'} mt={'xl'} radius={'md'} withBorder>
        <Group position="apart" py={'xs'} px={'md'}>
          <Group>
            <Text className={classes.customText3}>Order Id:</Text>
            <Text className={classes.customText}>f0ba5b8c</Text>
          </Group>
          <Group>
            <Text className={classes.customText3}>Placed On:</Text>
            <Text className={classes.customText}>10 Nov, 2022</Text>
          </Group>
        </Group>

        {items.map((item) => {
          return (
            <Paper
              key={item.id}
              py={'xl'}
              m={'xs'}
              style={{
                borderBottomLeftRadius: 7,
                borderBottomRightRadius: 7,
              }}
            >
              <Group position="apart">
                <Group noWrap pl={'xl'}>
                  <Image
                    src={item.image}
                    height={100}
                    width={100}
                    radius={'sm'}
                  />
                  <Stack spacing={'xs'} pl={'xs'}>
                    <Text className={classes.customText4}>{item.name}</Text>
                    <Text className={classes.customText3}>
                      Rs. {item.price}
                    </Text>
                  </Stack>
                </Group>

                <Group>
                  <Text className={classes.customText3}>
                    Product Category:{' '}
                  </Text>
                  <Text
                    c={'#62A82C'}
                    style={{
                      fontSize: '15px',
                    }}
                  >
                    {item.category}
                  </Text>
                </Group>

                <Button variant="light" c={'#62A82C'} mr={'lg'}>
                  <Text weight={400}>Write a Review</Text>
                </Button>
              </Group>
            </Paper>
          )
        })}
      </Paper>

      <Grid>
        <Grid.Col md={6}>
          <Paper mt={'xl'} radius={'md'} p={'xl'} withBorder>
            <Stack spacing={'lg'}>
              <Text className={classes.customText2}>Shipping Address</Text>
              <Text className={classes.customText3}>
                i8 Markaz, Zaki Center, Islamabad
              </Text>
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col md={6}>
          <Paper mt={'xl'} radius={'md'} withBorder p={'xl'}>
            <Stack>
              <Text className={classes.customText4}>Total Summary</Text>
              <Group position="apart">
                <Text className={classes.customText}>Subtotal</Text>
                <Text className={classes.customText3}>Rs. 1000</Text>
              </Group>
              <Group position="apart">
                <Text className={classes.customText}>Delivery Charges</Text>
                <Text className={classes.customText3}>Rs. 100</Text>
              </Group>
              <Group position="apart">
                <Text className={classes.customText}>Discount</Text>
                <Text className={classes.customText3}>Rs. 100</Text>
              </Group>

              <Divider />

              <Group position="apart">
                <Text className={classes.customText2}>Total</Text>
                <Text className={classes.customText2}>Rs. 1000</Text>
              </Group>

              <Group position="apart">
                <Text className={classes.customText}>Payment Method </Text>
                <Text className={classes.customText3}>Debit Card</Text>
              </Group>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default OrderDetails
