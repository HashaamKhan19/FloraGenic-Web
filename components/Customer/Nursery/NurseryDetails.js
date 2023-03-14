import { Group, Modal, Stack, Text, createStyles } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
  boldText: {
    color: 'darkslategray',
    fontSize: '15px',
    fontWeight: 525,
  },
  normalText: {
    color: 'darkslategray',
    fontSize: '15px',
    fontWeight: 400,
  },
}))

const NurseryDetails = ({ opened, setOpened, data }) => {
  const { classes } = useStyles()

  return (
    <Modal
      title="Nursery Details"
      opened={opened}
      onClose={() => setOpened(false)}
      transition={'pop'}
      transitionDuration={700}
      transitionTimingFunction="ease"
      exitTransitionDuration={700}
      centered
      styles={{
        title: {
          width: '100%',
          color: 'darkslategray',
          fontSize: '20px',
          fontWeight: 525,
          textAlign: 'center',
        },
      }}
    >
      <Stack mt={'xs'}>
        <Group spacing={'xs'} noWrap>
          <Text className={classes.boldText}>Name:</Text>
          <Text className={classes.normalText}>
            {data?.name || 'Not Available'}
          </Text>
        </Group>

        <Group spacing={'xs'} noWrap>
          <Text className={classes.boldText}>Email:</Text>
          <Text className={classes.normalText}>
            {data?.email || 'Not Available'}
          </Text>
        </Group>

        <Group spacing={'xs'} noWrap>
          <Text className={classes.boldText}>Opening Hours: </Text>
          <Text className={classes.normalText}>
            {new Date(data?.openingHours || 'Not Available').toLocaleTimeString(
              'en-US',
            )}
          </Text>
        </Group>

        <Group spacing={'xs'} noWrap>
          <Text className={classes.boldText}>Closing Hours: </Text>
          <Text className={classes.normalText}>
            {new Date(data?.closingHours || 'Not Available').toLocaleTimeString(
              'en-US',
            )}
          </Text>
        </Group>

        <Group spacing={'xs'} noWrap>
          <Text className={classes.boldText}>Details:</Text>
          <Text className={classes.normalText}>
            {data?.details || 'Not Available'}
          </Text>
        </Group>

        <Group spacing={'xs'} noWrap>
          <Text className={classes.boldText}>Owner Name: </Text>

          <Text className={classes.normalText}>
            {data?.nurseryOwner?.firstName + data?.nurseryOwner?.lastName ||
              'Not Available'}
          </Text>
        </Group>

        <Group spacing={'xs'} noWrap>
          <Text className={classes.boldText}>Owner Phone Number:</Text>
          <Text className={classes.normalText}>
            {data?.nurseryOwner?.phoneNumber || 'Not Available'}
          </Text>
        </Group>
      </Stack>
    </Modal>
  )
}

export default NurseryDetails
