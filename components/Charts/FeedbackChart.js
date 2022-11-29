import React from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import { Card, CardContent, Typography } from '@mui/material'

export default function FeedbackChart() {
  const [chartData, setChartData] = React.useState(null)

  React.useEffect(() => {
    setTimeout(() => {
      setChartData(options)
    }, 100)
  }, [])

  const options = {
    type: 'pie',
    series: [23, 10, 25, 13],
    height: 400,
    options: {
      labels: ['Feedback', 'Complaint', 'Suggestion', 'Bugs'],
      legend: {
        show: true,
        fontSize: '14px',
        fontFamily: `'Roboto', sans-serif`,
        position: 'bottom',
        labels: {
          useSeriesColors: false,
        },
      },
    },
  }
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          Feedback by Type
        </Typography>
        {chartData ? <Chart {...chartData} width="100%" /> : 'Loading...'}
      </CardContent>
    </Card>
  )
}
