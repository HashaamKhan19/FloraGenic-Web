import {
  Button,
  Container,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import React from 'react'

const CartDetails = () => {
  return (
    <Container py={'xl'} mt={'xl'} px={0}>
      <Paper p={'xl'} shadow="xs" radius={'md'}>
        <Stack spacing={'xs'}>
          <Group position="apart">
            <Text
              style={{
                color: 'grey',
              }}
            >
              Subtotal
            </Text>
            <Text
              style={{
                fontWeight: 500,
                color: 'darkslategray',
                fontSize: '1.1rem',
              }}
            >
              Rs. 2610
            </Text>
          </Group>
          <Group position="apart">
            <Text
              style={{
                color: 'grey',
              }}
            >
              Shipping
            </Text>
            <Text
              style={{
                fontWeight: 500,
                color: 'darkslategray',
                fontSize: '1.1rem',
              }}
            >
              Rs. 200
            </Text>
          </Group>
          <Group position="apart">
            <Text
              style={{
                color: 'grey',
              }}
            >
              Tax
            </Text>
            <Text
              style={{
                fontWeight: 500,
                color: 'darkslategray',
                fontSize: '1.1rem',
              }}
            >
              Rs. 50
            </Text>
          </Group>
          <Group position="apart">
            <Text
              style={{
                color: 'grey',
              }}
            >
              Discount
            </Text>
            <Text
              style={{
                fontWeight: 500,
                color: 'darkslategray',
                fontSize: '1.1rem',
              }}
            >
              Rs. 0
            </Text>
          </Group>
        </Stack>
        <Divider mt={'lg'} mb={'xs'} />
        <Group position="right">
          <Text
            style={{
              color: 'darkslategray',
              fontSize: '1.5rem',
              fontWeight: 500,
            }}
          >
            Rs. 2860
          </Text>
        </Group>
        <Stack mt={'lg'}>
          <TextInput
            placeholder="Enter Coupon Code"
            style={{ width: '100%' }}
            radius="sm"
            styles={(theme) => ({
              input: {
                '&:focus-within': {
                  borderColor: theme.colors.green[7],
                },
              },
            })}
          />
          <Button
            variant="outline"
            style={{
              border: '1px solid #62A82C',
              color: '#62A82C',
            }}
          >
            Apply Coupon
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default CartDetails
