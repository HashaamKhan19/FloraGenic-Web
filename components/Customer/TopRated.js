import React from 'react'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const TopRated = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <StarBorderPurple500Icon style={{ color: '#62A82C', fontSize: 30 }} />
        <Typography variant="h5">Top Rated Products</Typography>
      </Box>
      <Box>
        <Typography variant="p">Carousel Here</Typography>
      </Box>
    </>
  )
}

export default TopRated
