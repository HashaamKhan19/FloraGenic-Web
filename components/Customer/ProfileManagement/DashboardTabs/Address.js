import {
  ActionIcon,
  Box,
  Button,
  Grid,
  Group,
  Modal,
  Paper,
  Text,
  TextInput,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React, { useState } from 'react'
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'

const addresses = [
  {
    id: 1,
    name: 'Home',
    address: '123, Main Street, New York, USA',
    phone: '+1 9876543210',
    isDefault: true,
  },
]

const Address = () => {
  const match768 = useMediaQuery('(max-width: 768px)')
  const match550 = useMediaQuery('(max-width: 550px)')

  const [opened, setOpened] = useState(false)
  const [deleteOpened, setDeleteOpened] = useState(false)

  return (
    <>
      <Group spacing={'xs'} pb={'sm'}>
        <BiMap size={22} color="#62A82C" />
        <Text
          style={{
            fontWeight: 500,
            fontSize: '24px',
            color: 'darkslategray',
          }}
        >
          My Addresses
        </Text>
      </Group>
      {addresses.map((address) => (
        <Paper key={address.id} p={'md'} my={'xs'} shadow="xs">
          <Grid>
            <Grid.Col span={8}>
              <Group
                noWrap
                spacing={'xl'}
                style={{
                  justifyContent: 'space-between',
                }}
              >
                <Text maw={100} truncate>
                  {address.name}
                </Text>
                <Text truncate maw={200}>
                  {address.address}
                </Text>
                <Text hidden={match768 ? true : false}>{address.phone}</Text>
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
        title="Edit Address Details"
        transition={'fade'}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
        centered
      >
        <TextInput
          label="Address Name"
          placeholder="Enter name of address"
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
          label="Address Details"
          placeholder="Enter details of address"
          styles={(theme) => ({
            input: {
              '&:focus-within': {
                borderColor: theme.colors.green[7],
              },
            },
          })}
        />
        <Group position="right" mt={'xs'}>
          <Button
            style={{
              backgroundColor: '#111',
              color: 'white',
            }}
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
      >
        <Text>Are you sure you want to delete this address?</Text>
        <Group position="right" mt={'xs'}>
          <Button
            style={{
              backgroundColor: '#62A82C',
              color: 'white',
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

export default Address
