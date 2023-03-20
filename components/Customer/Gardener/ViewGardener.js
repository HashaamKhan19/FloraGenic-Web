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
import GardenerReviews from './GardenerReviews'
import GardenerEndorsements from './GardenerEndorsements'
import RelatedGardeners from './RelatedGardeners'
import GardenerDetails from './GardenerDetails'

const ViewGardener = ({ data }) => {
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
            shadow="xs"
          >
            <GardenerDetails data={data} />
          </Paper>

          <Paper mt={'xs'} p={'xl'} withBorder radius={'md'} shadow="xs">
            <GardenerEndorsements data={data} />
          </Paper>

          <Paper mt={'xs'} p={'xl'} withBorder radius={'md'} shadow="xs">
            <GardenerReviews />
          </Paper>
        </Grid.Col>

        <Grid.Col md={4}>
          <RelatedGardeners />
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default ViewGardener
