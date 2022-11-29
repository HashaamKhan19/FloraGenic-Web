import React from 'react'
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'

export default function StatisticsCards({
  amount,
  text,
  icon,
  percentage,
  trend,
}) {
  return (
    <Card>
      <CardContent
        sx={{
          backgroundColor: 'primary.light',
        }}
      >
        <Box
          sx={{
            color: 'black',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              variant="caption"
              component="div"
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'semibold',
              }}
            >
              {text}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {amount}
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: 'secondary.contrastText',
              aspectRatio: '1',
              borderRadius: '50%',
              height: 40,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            {icon}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            mt: 1,
            // color: '#295e00'
          }}
        >
          {trend === 'up' ? (
            <KeyboardDoubleArrowUpIcon sx={{ color: '#418f04' }} size={16} />
          ) : (
            <KeyboardDoubleArrowDownIcon sx={{ color: '#a61c2c' }} size={16} />
          )}

          <Typography variant="caption">
            <span>{percentage}% </span>
            <span>Since Last Month</span>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
