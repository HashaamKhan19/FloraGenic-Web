import {
  Container,
  Grid,
  Paper,
  Radio,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import React, { useState } from 'react'

const PaymentDetails = () => {
  const [checked, setChecked] = useState('card')

  console.log('====================================')
  console.log('checked', checked)
  console.log('====================================')

  return (
    <Container size={'xl'} py={'xl'}>
      <Paper p={'xl'} my={'xl'} shadow="xs">
        <Radio.Group orientation="vertical" defaultValue={checked}>
          <Radio
            value="card"
            label="Pay with Card"
            styles={{
              radio: {
                '&:checked': {
                  color: 'green',
                  borderColor: 'green',
                  backgroundColor: 'green',
                },
              },
            }}
            onClick={() => setChecked('card')}
          />
          {checked === 'card' && (
            <Stack direction="column" spacing="xs">
              <TextInput
                placeholder="Card Number"
                radius="sm"
                styles={(theme) => ({
                  input: {
                    '&:focus-within': {
                      borderColor: theme.colors.green[7],
                    },
                    border: '1px solid #C7C6C1',
                  },
                })}
              />
              <TextInput
                placeholder="Card Holder Name"
                radius="sm"
                styles={(theme) => ({
                  input: {
                    '&:focus-within': {
                      borderColor: theme.colors.green[7],
                    },
                    border: '1px solid #C7C6C1',
                  },
                })}
              />
            </Stack>
          )}
          <Radio
            value="easypaisa"
            label="Pay with Easypaisa"
            styles={{
              radio: {
                '&:checked': {
                  color: 'green',
                  borderColor: 'green',
                  backgroundColor: 'green',
                },
              },
            }}
            onClick={() => setChecked('easypaisa')}
          />
          {checked === 'easypaisa' && (
            <Stack direction="column" spacing="xs">
              <TextInput
                placeholder="Name"
                radius="sm"
                styles={(theme) => ({
                  input: {
                    '&:focus-within': {
                      borderColor: theme.colors.green[7],
                    },
                    border: '1px solid #C7C6C1',
                  },
                })}
              />
              <TextInput
                placeholder="Phone Number"
                radius="sm"
                styles={(theme) => ({
                  input: {
                    '&:focus-within': {
                      borderColor: theme.colors.green[7],
                    },
                    border: '1px solid #C7C6C1',
                  },
                })}
              />
            </Stack>
          )}
          <Radio
            value="cash"
            label="Cash on Delivery"
            styles={{
              radio: {
                '&:checked': {
                  color: 'green',
                  borderColor: 'green',
                  backgroundColor: 'green',
                },
              },
            }}
            onClick={() => setChecked('cash')}
          />
          {checked === 'cash' && (
            <Stack direction="column" spacing="xs">
              <TextInput
                placeholder="Address"
                radius="sm"
                styles={(theme) => ({
                  input: {
                    '&:focus-within': {
                      borderColor: theme.colors.green[7],
                    },
                    border: '1px solid #C7C6C1',
                  },
                })}
              />
              <TextInput
                placeholder="Email Address"
                radius="sm"
                styles={(theme) => ({
                  input: {
                    '&:focus-within': {
                      borderColor: theme.colors.green[7],
                    },
                    border: '1px solid #C7C6C1',
                  },
                })}
              />
              <TextInput
                placeholder="Phone Number"
                radius="sm"
                styles={(theme) => ({
                  input: {
                    '&:focus-within': {
                      borderColor: theme.colors.green[7],
                    },
                    border: '1px solid #C7C6C1',
                  },
                })}
              />
            </Stack>
          )}
        </Radio.Group>
      </Paper>
    </Container>
  )
}

export default PaymentDetails
