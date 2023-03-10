import {
  Avatar,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Rating,
  Stack,
  Text,
} from '@mantine/core'
import React from 'react'
import { BiMap } from 'react-icons/bi'
import { IoPaperPlane } from 'react-icons/io5'

const ViewGardener = () => {
  return (
    <Container size="xl" pt={80}>
      <Grid>
        <Grid.Col md={8}>
          <Paper
            style={{
              position: 'relative',
            }}
            withBorder
            p={'xl'}
            radius={'md'}
          >
            <Avatar
              size={100}
              radius={'50%'}
              style={{
                position: 'absolute',
                top: '-50px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
              src={'https://picsum.photos/200/300'}
            />
            <Group position="apart">
              <Stack spacing={'xs'}>
                <Text
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 525,
                    color: 'darkslategray',
                  }}
                >
                  Hashaam
                </Text>
                <Group spacing={2}>
                  <BiMap />
                  <Text
                    style={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'darkslategray',
                    }}
                  >
                    Islamabad
                  </Text>
                </Group>
                <Group pt={'xs'}>
                  <Button
                    leftIcon={<IoPaperPlane />}
                    radius={'xl'}
                    style={{
                      backgroundColor: '#62A82C',
                    }}
                  >
                    Message
                  </Button>
                </Group>
              </Stack>

              <Stack spacing={'xs'}>
                <Rating value={4} size="md" readOnly />
                <Group>
                  <Text
                    style={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'darkslategray',
                    }}
                  >
                    Pricing:
                  </Text>
                  <Text
                    style={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: '#D92228',
                    }}
                  >
                    1000/Day
                  </Text>
                </Group>
              </Stack>
            </Group>
          </Paper>

          <Paper mt={'xs'} p={'xl'} withBorder>
            <Text>Skills</Text>
            <Text>Skills here with endorsement option</Text>
          </Paper>

          <Paper mt={'xs'} p={'xl'} withBorder>
            <Text>Reviews</Text>
            <Text>Reviews Here</Text>
          </Paper>
        </Grid.Col>

        <Grid.Col md={4}>
          <Paper p={'xl'} withBorder>
            <Text>People Also Viewed</Text>
            <Text>3-4 gardener profiles down below</Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default ViewGardener
