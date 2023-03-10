import { Avatar, Divider, Group, Rating, Stack, Text } from '@mantine/core'
import React from 'react'

const GardenerReviews = () => {
  return (
    <Stack>
      <Group>
        <Stack mt={'lg'}>
          <Group spacing={'xs'}>
            <Avatar radius="xl" size={'lg'} />
            <Stack spacing={0}>
              <Text
                weight={500}
                style={{
                  fontSize: 14,
                  color: 'darkslategray',
                }}
              >
                John Doe
              </Text>
              <Group>
                <Rating value={4.5} fractions={2} size="md" readOnly /> 4.5
              </Group>
            </Stack>
          </Group>
          <Text
            mt={'xs'}
            pl={'xs'}
            style={{
              fontSize: 14,
              color: 'darkslategray',
            }}
          >
            This gardener is very hardworking.
          </Text>
        </Stack>
      </Group>
      <Divider />
    </Stack>
  )
}

export default GardenerReviews
