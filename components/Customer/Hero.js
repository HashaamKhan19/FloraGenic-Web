import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Image from 'next/image'
import { Box } from '@mui/system'
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined'

export default function Hero() {
  const items = [
    {
      url: '/images/HeroDeal/1.png',
    },
    {
      url: '/images/HeroDeal/2.png',
    },
  ]

  const Item = (props) => {
    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          height: '400px',
          px: 6,
          mt: 6,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6">50% Sale</Typography>
          <Typography variant="p">Get your plants now</Typography>
          <br />
          <Button variant="contained" sx={{ color: 'white', borderRadius: 0 }}>
            SHOP NOW
          </Button>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
          }}
        >
          <img
            src={props.item.url}
            style={{
              objectFit: 'fill',
              height: '100%',
            }}
          />
        </Box>
      </Box>
    )
  }
  return (
    <>
      <Carousel
        duration={200}
        navButtonsAlwaysInvisible={true}
        // swipe={false}
        IndicatorIcon={
          <RadioButtonCheckedOutlinedIcon
            sx={{
              fontSize: '17px',
            }}
          />
        }
        indicatorIconButtonProps={{
          style: {
            color: '#62A82C',
            border: 1,
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: '#0E8074',
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  )
}
