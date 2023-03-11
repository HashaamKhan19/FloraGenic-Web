import {
  Avatar,
  Badge,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
} from '@mantine/core'
import React from 'react'
import { BiMap } from 'react-icons/bi'

const RelatedGardeners = () => {
  return (
    <>
      <Paper p={'xl'} withBorder mb={'xl'}>
        <Text
          style={{
            fontSize: '1.1rem',
            fontWeight: 525,
            color: 'darkslategray',
          }}
        >
          People Also Viewed
        </Text>

        <Stack pt={'xl'}>
          <Group position="apart">
            <Group>
              <Avatar
                radius="xl"
                size={50}
                src={'https://picsum.photos/200/300'}
              />
              <Stack spacing={'xs'}>
                <Text
                  weight={500}
                  style={{
                    fontSize: 14,
                    color: 'darkslategray',
                  }}
                >
                  John Doe
                </Text>
                <Badge
                  variant="outline"
                  style={{
                    border: '1px solid #62A82C',
                    color: '#62A82C',
                  }}
                >
                  View Profile
                </Badge>
              </Stack>
            </Group>

            <Stack spacing={'xs'}>
              <Group spacing={2}>
                <BiMap />
                <Text
                  style={{
                    fontSize: 14,
                    color: 'darkslategray',
                  }}
                >
                  Islamabad
                </Text>
              </Group>
              <Text
                style={{
                  fontSize: 15,
                  color: '#D92228',
                }}
              >
                5000/Month
              </Text>
            </Stack>
          </Group>
          <Divider my={'xs'} />
        </Stack>
      </Paper>
    </>
  )
}

export default RelatedGardeners
