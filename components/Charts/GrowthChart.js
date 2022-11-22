import React, { Component } from 'react'
// import Chart from 'react-apexcharts'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const GrowthChart = () => {
  const data = {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
      },
      yaxis: {
        title: {
          text: 'Rs. (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands'
          },
        },
      },
    },
  }

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          {typeof window !== 'undefined' && (
            <Box
              sx={{
                width: '100%',
                height: 375,
              }}
            >
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Chart
                  options={data.options}
                  series={data.series}
                  type="bar"
                  height={375}
                  width={'100%'}
                />
              </Paper>
            </Box>
          )}
        </div>
      </div>
    </div>
  )
}

export default GrowthChart
