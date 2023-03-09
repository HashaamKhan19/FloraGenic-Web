import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Center,
  Grid,
  Group,
  Input,
  Modal,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Tooltip,
  createStyles,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { React, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'

const useStyles = createStyles(() => ({
  title: {
    color: 'darkslategray',
    fontWeight: 500,
    fontSize: '16px',
  },
  text: {
    color: 'gray',
    fontWeight: 400,
    fontSize: '14px',
    maxWidth: '230px',
  },
}))

const ProfileInfo = () => {
  const { classes } = useStyles()
  const match600 = useMediaQuery('(max-width: 600px)')
  const match1000 = useMediaQuery('(max-width: 1100px)')

  const [opened, setOpened] = useState(false)
  const [editOpened, setEditOpened] = useState(false)

  return (
    <>
      <Group position="apart" mt={match1000 ? 'xl' : '0'}>
        <Group spacing={'xs'}>
          <BsFillPersonFill size={22} color="#62A82C" />
          <Text
            style={{
              fontWeight: 500,
              fontSize: '24px',
              color: 'darkslategray',
            }}
          >
            My Profile
          </Text>
        </Group>

        <Button
          variant="light"
          c={'#62A82C'}
          onClick={() => setEditOpened(true)}
        >
          <Text weight={400}>Edit Profile</Text>
        </Button>
      </Group>

      <Grid>
        <Grid.Col md={7}>
          <Paper p={'lg'} mt={'xl'} shadow="xs" radius={'md'}>
            <Group position="apart">
              <Avatar
                size={'lg'}
                radius={'xl'}
                src="https://i.pravatar.cc/300"
              />
              {!match600 && (
                <Stack spacing={'xs'}>
                  <Text className={classes.title}>Username</Text>
                  <Text className={classes.text} truncate>
                    Hashaam Khan
                  </Text>
                </Stack>
              )}
              {match600 && (
                <ActionIcon onClick={() => setOpened(true)}>
                  <AiOutlineEye size={22} color="#62A" />
                </ActionIcon>
              )}
              <Stack spacing={'xs'}>
                <Text className={classes.title}>Email Address</Text>
                <Text className={classes.text} truncate>
                  hashaamkhan4247@gmail.com
                </Text>
              </Stack>
            </Group>
          </Paper>
        </Grid.Col>
        <Grid.Col md={5}>
          <Paper p={'lg'} mt={'xl'} shadow="xs" radius={'md'}>
            <Group position="apart">
              <Stack spacing={'xs'}>
                <Text className={classes.title}>Total Orders</Text>
                <Text className={classes.text}>69</Text>
              </Stack>
              <Stack spacing={'xs'}>
                <Text className={classes.title}>Total Spent</Text>
                <Text className={classes.text}>$ 420</Text>
              </Stack>
            </Group>
          </Paper>
        </Grid.Col>
      </Grid>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Profile Details"
        transition={'fade'}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
        centered
      >
        <Stack>
          <Center mb={'xl'}>
            <Avatar size={'xl'} radius={'xl'} src="https://i.pravatar.cc/300" />
          </Center>
          <Group position="apart">
            <Text className={classes.title}>Username</Text>
            <Text className={classes.text}>Hashaam Khan</Text>
          </Group>
          <Group position="apart">
            <Text className={classes.title}>Email Address</Text>
            <Text className={classes.text}>Hashaamkhan4247@gmail.com</Text>
          </Group>
          <Group position="apart">
            <Text className={classes.title}>Total Orders</Text>
            <Text className={classes.text}>420</Text>
          </Group>
          <Group position="apart">
            <Text className={classes.title}>Awaiting Delivery</Text>
            <Text className={classes.text}>69</Text>
          </Group>
        </Stack>
      </Modal>

      <Modal
        opened={editOpened}
        onClose={() => setEditOpened(false)}
        title="Edit Profile"
        transition={'fade'}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
        centered
      >
        <TextInput
          label="Username"
          styles={(theme) => ({
            input: {
              '&:focus-within': {
                borderColor: theme.colors.green[7],
              },
            },
          })}
        />
        <TextInput
          label="Email"
          styles={(theme) => ({
            input: {
              '&:focus-within': {
                borderColor: theme.colors.green[7],
              },
            },
          })}
        />
        <Group position="right" pt={'sm'}>
          <Button
            style={{
              backgroundColor: '#000',
              color: '#fff',
            }}
            onClick={() => setEditOpened(false)}
          >
            <Text weight={400}>Cancel</Text>
          </Button>
          <Button
            style={{
              backgroundColor: '#62A82C',
              color: '#fff',
            }}
          >
            <Text weight={400}>Save</Text>
          </Button>
        </Group>
      </Modal>
    </>
  )
}

export default ProfileInfo
