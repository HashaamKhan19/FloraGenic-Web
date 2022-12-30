import React from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const TopCategories = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <BiCategoryAlt style={{ color: '#62A82C' }} size={30} />
        <Typography variant="h5">Top Categories</Typography>
      </Box>
      <Box>
        <Typography variant="p">Carousel Here</Typography>
      </Box>
    </>
  )
}

export default TopCategories
