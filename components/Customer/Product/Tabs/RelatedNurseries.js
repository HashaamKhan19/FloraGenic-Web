import {
  Avatar,
  Box,
  Grid,
  Group,
  Paper,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core'
import React from 'react'

const cardsData = [
  {
    id: 1,
    name: 'Talha Nursery',
  },
  {
    id: 2,
    name: 'Hashaam Nursery',
  },
  {
    id: 3,
    name: 'Abdullah Nursery',
  },
  {
    id: 4,
    name: 'Taha Nursery',
  },
]

const RelatedNurseries = () => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Stack>
        <Text
          weight={600}
          style={{
            fontSize: 22,
            color: 'darkslategray',
          }}
        >
          Also Available at
        </Text>
        <Grid>
          {cardsData.map((card, index) => (
            <Grid.Col lg={3} sm={6} key={index}>
              <Paper h={120} key={index}>
                <Stack align="center" py={'xs'} spacing={'md'}>
                  <Avatar size={'lg'} radius={'xl'} />
                  <Text
                    style={{
                      fontSize: 19,
                      color: 'darkslategray',
                      width: '100%',
                      textAlign: 'center',
                    }}
                    px={'xs'}
                    truncate
                  >
                    {card.name}
                  </Text>
                </Stack>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Box>
  )
}

export default RelatedNurseries
