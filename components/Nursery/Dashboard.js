import React from 'react'
import Grid from '@mui/material/Grid'
import GrowthChart from '../Charts/GrowthChart'
import FeedbackChart from '../Charts/FeedbackChart'
import StatisticsCards from '../Charts/StatisticsCards'
import AreaChart from '../Charts/AreaChart'
import LineChart from '../Charts/LineChart'

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import PeopleIcon from '@mui/icons-material/People'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import InventoryIcon from '@mui/icons-material/Inventory'

const Dashboard = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="stretch"
        marginBottom={8}
      >
        <Grid item xs={6} sm={6} lg={3}>
          <StatisticsCards
            amount={'2'}
            text={'Total admins'}
            icon={<ManageAccountsIcon color="primary" fill="red" />}
            percentage={'1'}
            trend={'up'}
          />
        </Grid>
        <Grid item xs={6} sm={6} lg={3}>
          <StatisticsCards
            amount={2346}
            text={'New Users'}
            icon={<PeopleIcon color="primary" />}
            percentage={'10'}
            trend={'down'}
          />
        </Grid>
        <Grid item xs={6} sm={6} lg={3}>
          <StatisticsCards
            amount={120}
            text={'New Nurseries'}
            icon={<WarehouseIcon color="primary" />}
            percentage={'15'}
            trend={'up'}
          />
        </Grid>
        <Grid item xs={6} sm={6} lg={3}>
          <StatisticsCards
            amount={924}
            text={'Product Sales'}
            icon={<InventoryIcon color="primary" />}
            percentage={'7'}
            trend={'up'}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8}>
          <GrowthChart />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <FeedbackChart />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <AreaChart />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <LineChart />
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard
