import * as React from 'react'
import Rating from '@mui/material/Rating'

export default function Ratings() {
  const [value, setValue] = React.useState(2)
  return <Rating name="read-only" value={value} readOnly />
}
