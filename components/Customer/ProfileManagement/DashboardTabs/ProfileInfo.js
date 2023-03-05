import {
  ActionIcon,
  Avatar,
  Button,
  Center,
  Group,
  Modal,
  Paper,
  Stack,
  Text,
  Tooltip,
  createStyles,
} from '@mantine/core'
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
  },
}))

const ProfileInfo = () => {
  const { classes } = useStyles()

  const [opened, setOpened] = useState(false)

  return (
    <>
      <Group position="apart">
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

        <Button variant="light" c={'#62A82C'}>
          <Text weight={400}>Edit Profile</Text>
        </Button>
      </Group>

      <Paper p={'md'} mt={'xl'}>
        <Group position="apart" spacing={'xl'}>
          <Avatar size={'lg'} radius={'xl'} src="https://i.pravatar.cc/300" />
          <Stack spacing={'xs'}>
            <Text className={classes.title}>Username</Text>
            <Text className={classes.text}>Hashaam Khan</Text>
          </Stack>
          <Stack spacing={'xs'}>
            <Text className={classes.title}>Email Address</Text>
            <Text className={classes.text}>Hashaamkhan4247@gmail.com</Text>
          </Stack>
          <Stack spacing={'xs'}>
            <Text className={classes.title}>Total Orders</Text>
            <Text className={classes.text}>420</Text>
          </Stack>
          <Stack spacing={'xs'}>
            <Text className={classes.title}>Awaiting Delivery</Text>
            <Text className={classes.text}>69</Text>
          </Stack>
          <Tooltip label="View Details">
            <ActionIcon onClick={() => setOpened(true)}>
              <AiOutlineEye size={28} color="#62A" />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Paper>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Profile Details"
        transition={'fade'}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
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
    </>
  )
}

export default ProfileInfo
