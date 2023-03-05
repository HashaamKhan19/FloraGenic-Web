import { Container, Grid, Paper, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React from 'react'
import DashboardLinks from './DashboardLinks'

const Dashboard = () => {
  return (
    <Container size={'xl'} py={'xl'}>
      <DashboardLinks />
    </Container>
  )
}

export default Dashboard
