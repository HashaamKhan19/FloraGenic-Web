import React from 'react'
import { IoIosFlash } from 'react-icons/io'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const FlashDeals = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <IoIosFlash style={{ color: '#62A82C' }} size={30} />
        <Typography variant="h5">Flash Deals</Typography>
      </Box>
      <Box>
        <Typography variant="p">Carousel Here</Typography>
      </Box>
    </>
  )
}

export default FlashDeals
