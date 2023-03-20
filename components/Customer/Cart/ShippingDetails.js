import {
  Checkbox,
  Container,
  Grid,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import React from 'react'

const ShippingDetails = ({ form }) => {
  return (
    <Container size={'xl'} py={'xl'}>
      <Paper p={'xl'} my={'xl'} shadow="xs">
        <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
          <Grid columns={12} py={'xs'}>
            <Text
              style={{
                color: 'darkslategray',
                fontSize: '0.95rem',
              }}
              pb={'xs'}
            >
              Shipping Address
            </Text>
            <SimpleGrid
              cols={2}
              breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
              style={{
                width: '100%',
              }}
              spacing={'xl'}
              mt={'xs'}
            >
              <TextInput
                placeholder="Full Name"
                radius="sm"
                styles={(theme) => ({
                  input: {
                    '&:focus-within': {
                      borderColor: theme.colors.green[7],
                    },
                    border: '1px solid #C7C6C1',
                  },
                })}
                {...form.getInputProps('name')}
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
                {...form.getInputProps('email')}
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
                {...form.getInputProps('phoneNumber')}
              />
              <TextInput
                placeholder="CNIC"
                radius="sm"
                styles={(theme) => ({
                  input: {
                    '&:focus-within': {
                      borderColor: theme.colors.green[7],
                    },
                    border: '1px solid #C7C6C1',
                  },
                })}
                {...form.getInputProps('cnic')}
              />
              <TextInput
                placeholder="Address"
                radius="sm"
                multiple
                styles={(theme) => ({
                  input: {
                    '&:focus-within': {
                      borderColor: theme.colors.green[7],
                    },
                    border: '1px solid #C7C6C1',
                  },
                })}
                {...form.getInputProps('address')}
              />
            </SimpleGrid>
          </Grid>
        </form>
      </Paper>
      {/* <Paper p={'xl'} my={'xl'} shadow="xs">
        <Grid columns={12} py={'xs'}>
          <Stack spacing={'xs'} mb={'xs'}>
            <Text
              style={{
                color: 'darkslategray',
                fontSize: '0.95rem',
              }}
              pb={'xs'}
            >
              Billing Address
            </Text>

            <Checkbox
              label="Same as shipping address"
              radius={'xs'}
              styles={(theme) => ({
                label: {
                  color: theme.colors.gray[7],
                  fontSize: '0.9rem',
                },
                input: {
                  '&:checked': {
                    backgroundColor: '#62A82C',
                    borderColor: '#62A82C',
                  },
                  '&:hover': {
                    cursor: 'pointer',
                  },
                  borderColor: '#62A82C',
                },
              })}
            />
          </Stack>
          <SimpleGrid
            cols={2}
            breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
            style={{
              width: '100%',
            }}
            spacing={'xl'}
            mt={'xs'}
          >
            <TextInput
              placeholder="Full Name"
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
            <TextInput
              placeholder="CNIC"
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
              placeholder="Address 1"
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
              placeholder="Address 2"
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
          </SimpleGrid>
        </Grid>
      </Paper> */}
    </Container>
  )
}

export default ShippingDetails
