import React from 'react'
import Hero from '../../components/Customer/Hero'
import FlashDeals from '../../components/Customer/FlashDeals'
import { Box } from '@mui/system'

export default function index() {
  return (
    <>
      <Box sx={{ backgroundColor: '#F6F9FC', height: '100vh' }}>
        <Hero />
        <FlashDeals />
      </Box>
    </>
  )
}
