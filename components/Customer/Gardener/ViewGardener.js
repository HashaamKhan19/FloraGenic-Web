import {
  Avatar,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  Rating,
  Space,
  Stack,
  Text,
} from '@mantine/core'
import React, { useState } from 'react'
import { BiMap } from 'react-icons/bi'
import { IoPaperPlane } from 'react-icons/io5'
import GardenerReviews from './GardenerReviews'
import GardenerEndorsements from './GardenerEndorsements'
import RelatedGardeners from './RelatedGardeners'
import { GiSuitcase } from 'react-icons/gi'

const ViewGardener = () => {
  return (
    <Container size="xl" pt={80}>
      <Grid>
        <Grid.Col md={8} pb={'xl'}>
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
                  <Button
                    leftIcon={<GiSuitcase size={18} />}
                    radius={'xl'}
                    style={{
                      border: '1px solid #62A82C',
                      backgroundColor: 'white',
                      color: '#62A82C',
                    }}
                  >
                    Hire
                  </Button>
                </Group>
              </Stack>

              <Stack
                spacing={'xs'}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: '1.5rem',
                  transform: 'translateY(-50%)',
                }}
              >
                <Group spacing={2}>
                  <Rating value={4} size="md" readOnly />
                  <Text
                    style={{
                      fontSize: '14px',
                      color: 'darkslategray',
                    }}
                  >
                    (12)
                  </Text>
                </Group>
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

          <Paper mt={'xs'} p={'xl'} withBorder radius={'md'}>
            <Text
              style={{
                fontSize: '1.3rem',
                fontWeight: 525,
                color: 'darkslategray',
              }}
            >
              Skills
            </Text>
            <Space mt={'xl'} />

            <GardenerEndorsements />
          </Paper>

          <Paper mt={'xs'} p={'xl'} withBorder radius={'md'}>
            <Text
              style={{
                fontSize: '1.3rem',
                fontWeight: 525,
                color: 'darkslategray',
              }}
            >
              Reviews
            </Text>
            <GardenerReviews />
          </Paper>
        </Grid.Col>

        <Grid.Col
          md={4}
          hidden={{
            xs: true,
            sm: true,
            md: false,
            lg: false,
            xl: false,
          }}
        >
          <RelatedGardeners />
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default ViewGardener
