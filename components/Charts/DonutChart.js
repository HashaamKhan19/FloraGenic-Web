import React, { Component } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const DonutChart = () => {
  const data = {
    series: [14, 23, 21, 17],
    options: {
      chart: {
        type: 'polarArea',
      },
      stroke: {
        colors: ['#fff'],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  }

  return (
    <div className="donut">
      <Box
        sx={{
          width: 630,
          height: 380,
        }}
      >
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Chart
            options={data.options}
            series={data.series}
            type="polarArea"
            width="570"
            height={'375'}
          />
        </Paper>
      </Box>
    </div>
  )
}

export default DonutChart
