import React from 'react'
import Hero from '../../components/Customer/Hero'
import FlashDeals from '../../components/Customer/FlashDeals'
import TopRated from '../../components/Customer/TopRated'
import TopCategories from '../../components/Customer/TopCategories'
import { Box } from '@mui/system'

export default function index() {
  return (
    <>
      <Box sx={{ backgroundColor: '#F6F9FC', height: '100vh' }}>
        <Hero />
        <FlashDeals />
        <TopCategories />
        <TopRated />
      </Box>
    </>
  )
}
