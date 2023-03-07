import {
  ActionIcon,
  Button,
  Grid,
  Group,
  Modal,
  Paper,
  Select,
  Text,
  TextInput,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React, { useState } from 'react'
import { AiOutlineCreditCard, AiOutlineDelete } from 'react-icons/ai'
import { CiEdit } from 'react-icons/ci'

const payments = [
  {
    id: 1,
    name: 'Visa',
    number: '**** **** **** 1234',
    expiry: '12/2024',
  },
  {
    id: 2,
    name: 'Mastercard',
    number: '**** **** **** 1234',
    expiry: '12/2024',
  },
]

const Payment = () => {
  const match768 = useMediaQuery('(max-width: 768px)')

  const [opened, setOpened] = useState(false)
  const [deleteOpened, setDeleteOpened] = useState(false)

  return (
    <>
      <Group spacing={'xs'} pb={'sm'}>
        <AiOutlineCreditCard size={22} color="#62A82C" />
        <Text
          style={{
            fontWeight: 500,
            fontSize: '24px',
            color: 'darkslategray',
          }}
        >
          My Payments
        </Text>
      </Group>
      {payments.map((payment) => (
        <Paper key={payment.id} p={'md'} my={'xs'} shadow="xs">
          <Grid>
            <Grid.Col span={8}>
              <Group
                noWrap
                spacing={'xl'}
                style={{
                  justifyContent: 'space-between',
                }}
              >
                <Text maw={100} truncate color="darkslategray">
                  {payment.name}
                </Text>
                <Text truncate maw={200} color="darkslategray">
                  {payment.number}
                </Text>
                <Text hidden={match768 ? true : false} color="darkslategray">
                  {payment.expiry}
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={4}>
              <Group spacing={'md'} position="right" noWrap>
                <ActionIcon
                  variant="light"
                  color="blue"
                  size="lg"
                  onClick={() => setOpened(true)}
                >
                  <CiEdit size={22} />
                </ActionIcon>
                <ActionIcon
                  variant="light"
                  color="red"
                  size="lg"
                  onClick={() => setDeleteOpened(true)}
                >
                  <AiOutlineDelete size={21} />
                </ActionIcon>
              </Group>
            </Grid.Col>
          </Grid>
        </Paper>
      ))}

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Edit Payment Details"
        transition={'fade'}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
        centered
      >
        <Select
          label="Payment Method"
          placeholder="Enter name of Payment Method"
          styles={(theme) => ({
            input: {
              '&:focus-within': {
                borderColor: theme.colors.green[7],
              },
            },
            item: {
              '&[data-selected]': {
                '&, &:hover': {
                  backgroundColor: '#62A82C',
                },
              },
            },
          })}
          data={[
            { label: 'Visa', value: 'visa' },
            { label: 'Mastercard', value: 'mastercard' },
          ]}
        />
        <TextInput
          mt={'md'}
          label="Card Number"
          placeholder="1234 **** **** ****"
          styles={(theme) => ({
            input: {
              '&:focus-within': {
                borderColor: theme.colors.green[7],
              },
            },
          })}
        />
        <Group noWrap>
          <TextInput
            mt={'md'}
            label="Expiry Date"
            placeholder="12/37"
            styles={(theme) => ({
              input: {
                '&:focus-within': {
                  borderColor: theme.colors.green[7],
                },
              },
            })}
          />
          <TextInput
            mt={'md'}
            label="CVV"
            placeholder="123"
            styles={(theme) => ({
              input: {
                '&:focus-within': {
                  borderColor: theme.colors.green[7],
                },
              },
            })}
          />
        </Group>
        <Group position="right" mt={'lg'}>
          <Button
            style={{
              backgroundColor: '#111',
              color: 'white',
            }}
            onClick={() => setOpened(false)}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: '#62A82C',
              color: 'white',
            }}
          >
            Save
          </Button>
        </Group>
      </Modal>

      <Modal
        opened={deleteOpened}
        onClose={() => setDeleteOpened(false)}
        title="Confirm Deletion"
        transition={'fade'}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
        centered
        styles={{
          title: {
            color: 'darkslategray',
            fontWeight: 600,
            fontSize: '20px',
          },
        }}
      >
        <Text>Are you sure you want to delete this Payment Option?</Text>
        <Group position="right" mt={'xs'}>
          <Button
            style={{
              backgroundColor: '#62A82C',
              color: 'white',
            }}
            onClick={() => {
              setDeleteOpened(false)
            }}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: 'red',
              color: 'white',
            }}
          >
            Delete
          </Button>
        </Group>
      </Modal>
    </>
  )
}

export default Payment
