import React from 'react'
import GrowthChart from '../Charts/GrowthChart'
import DonutChart from '../Charts/DonutChart'
import StatisticsCards from '../Charts/StatisticsCards'
import AreaChart from '../Charts/AreaChart'
import LineChart from '../Charts/LineChart'

const Dashboard = () => {
  return (
    <div className="mb-16">
      <StatisticsCards />
      <div className="flex flex-row">
        <div className="ml-5">
          <GrowthChart />
          <div className="mt-24">
            <LineChart />
          </div>
        </div>
        <div className="">
          <div className="ml-[58px]">
            <AreaChart />
          </div>
          <div className="mt-24 ml-[58px]">
            <DonutChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
