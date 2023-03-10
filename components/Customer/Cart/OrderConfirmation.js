import {
  ActionIcon,
  Badge,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  Stack,
  createStyles,
  Text,
  Button,
  Center,
} from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { MdDeleteOutline, MdOutlineModeEditOutline } from 'react-icons/md'

const useStyles = createStyles((theme) => ({
  normalText: {
    color: 'darkslategray',
    fontSize: '14px',
  },
  priceText: {
    color: 'darkslategray',
    fontSize: '16px',
    fontWeight: 500,
  },
}))

const OrderConfirmation = () => {
  const { classes } = useStyles()

  return (
    <Container size={'xl'} pt={40} pb={'xl'}>
      <Grid>
        <Grid.Col sm={8}>
          <Stack>
            <Paper p={'xl'} shadow="xs">
              <Group pb={'sm'} spacing={'xs'}>
                <Paper
                  style={{
                    backgroundColor: '#62A82C',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                    }}
                  >
                    1
                  </Text>
                </Paper>
                <Text
                  style={{
                    color: 'darkslategray',
                    fontSize: '18px',
                    fontWeight: 500,
                  }}
                >
                  Delivery Address
                </Text>
              </Group>
              <Paper
                style={{
                  backgroundColor: '#F6F9FC',
                  position: 'relative',
                }}
              >
                <Stack spacing={5} py={'xs'} pl={'lg'}>
                  <Group spacing={'xs'} noWrap>
                    <Text
                      weight={425}
                      style={{
                        color: 'darkslategray',
                        fontSize: '14px',
                      }}
                    >
                      Address:{' '}
                    </Text>
                    <Text className={classes.normalText}>
                      Zaki Center, i8, Islamabad
                    </Text>
                  </Group>

                  <Group spacing={'xs'} noWrap>
                    <Text
                      weight={425}
                      style={{
                        color: 'darkslategray',
                        fontSize: '14px',
                      }}
                    >
                      Phone Number:{' '}
                    </Text>
                    <Text className={classes.normalText}>+9212312312</Text>
                  </Group>
                </Stack>
              </Paper>
            </Paper>

            <Paper p={'xl'} shadow="xs">
              <Group pb={'sm'} spacing={'xs'}>
                <Paper
                  style={{
                    backgroundColor: '#62A82C',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                    }}
                  >
                    2
                  </Text>
                </Paper>
                <Text
                  style={{
                    color: 'darkslategray',
                    fontSize: '18px',
                    fontWeight: 500,
                  }}
                >
                  Payment Details
                </Text>
              </Group>

              <Paper
                style={{
                  backgroundColor: '#F6F9FC',
                  position: 'relative',
                }}
              >
                <Stack spacing={5} py={'xs'} pl={'lg'}>
                  <Text weight={500} italic>
                    Via Card
                  </Text>
                  <Group spacing={'xs'} noWrap>
                    <Text
                      weight={425}
                      style={{
                        color: 'darkslategray',
                        fontSize: '14px',
                      }}
                    >
                      Card Number:{' '}
                    </Text>
                    <Text className={classes.normalText}>
                      1234 1234 1234 1234
                    </Text>
                  </Group>
                  <Group spacing={'xs'} noWrap>
                    <Text
                      weight={425}
                      style={{
                        color: 'darkslategray',
                        fontSize: '14px',
                      }}
                    >
                      Expiry Date:{' '}
                    </Text>
                    <Text className={classes.normalText}>12/22</Text>
                  </Group>
                  <Group spacing={'xs'} noWrap>
                    <Text
                      weight={425}
                      style={{
                        color: 'darkslategray',
                        fontSize: '14px',
                      }}
                    >
                      CVV:{' '}
                    </Text>
                    <Text className={classes.normalText}>123</Text>
                  </Group>
                </Stack>
              </Paper>
            </Paper>
          </Stack>
          <Group pt={'lg'}>
            <Link href={'/customer/viewCart'}>
              <Button
                variant="outline"
                style={{
                  border: '1px solid #62A82C',
                  color: '#62A82C',
                }}
              >
                Go Back
              </Button>
            </Link>
          </Group>
        </Grid.Col>

        <Grid.Col sm={4} pb={'xl'} pl={'xl'}>
          <Stack>
            <Text
              style={{
                color: 'darkslategray',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              Your Order
            </Text>

            <Group position="apart">
              <Text className={classes.normalText}>1 x Oliver Plant</Text>
              <Text className={classes.priceText}>$ 20.00</Text>
            </Group>

            <Group position="apart">
              <Text className={classes.normalText}>1 x Oliver Plant</Text>
              <Text className={classes.priceText}>$ 20.00</Text>
            </Group>

            <Group position="apart">
              <Text className={classes.normalText}>1 x Oliver Plant</Text>
              <Text className={classes.priceText}>$ 20.00</Text>
            </Group>

            <Divider />

            <Group position="apart">
              <Text className={classes.normalText}>Subtotal</Text>
              <Text className={classes.priceText}>$ 60.00</Text>
            </Group>

            <Group position="apart">
              <Text className={classes.normalText}>Shipping</Text>
              <Text className={classes.priceText}>$ 10.00</Text>
            </Group>

            <Group position="apart">
              <Text className={classes.normalText}>Tax</Text>
              <Text className={classes.priceText}>$ 0.00</Text>
            </Group>

            <Group position="apart">
              <Text className={classes.normalText}>Discount</Text>
              <Text className={classes.priceText}>$ 0.00</Text>
            </Group>

            <Divider />

            <Group position="apart">
              <Text
                style={{
                  color: 'darkslategray',
                  fontSize: '15px',
                  fontWeight: 600,
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  color: 'darkslategray',
                  fontSize: '18px',
                  fontWeight: 600,
                }}
              >
                $ 70.00
              </Text>
            </Group>
          </Stack>
          <Center pt={'xl'}>
            <Button
              fullWidth
              style={{
                backgroundColor: '#62A82C',
                color: '#fff',
              }}
            >
              <Text>Place Order</Text>
            </Button>
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default OrderConfirmation
