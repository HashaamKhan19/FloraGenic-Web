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
          width: 'full',
          height: { xs: '200px', sm: '300px', md: '400px' },
          display: 'flex',
        }}
      >
        <Box sx={{ flex: 1, backgroundColor: 'lightgray' }}>
          <Typography
            sx={{ fontWeight: 'bold', fontSize: { md: 32, sm: 24, xs: 18 } }}
          >
            50% OFF on your first order
          </Typography>
          <Typography
            sx={{
              mt: 1,
              width: '50%',
              flexWrap: 'nowrap',
              width: { md: '70%', sm: '85%', xs: '100%' },
              fontSize: { md: 18, sm: 14, xs: 12 },
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
            molestias, illum labore
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: 'white',
              borderRadius: 0,
              mt: 4,
            }}
          >
            SHOP NOW
          </Button>
        </Box>
        <Box
          sx={{
            flex: 1,
            backgroundColor: 'grey',
          }}
        >
          <div className="unset-img full-bleed">
            <Image src={props.item.url} width={500} height={500} />
          </div>
        </Box>
      </Box>
    )
  }
  return (
    <>
      <Carousel
        duration={200}
        navButtonsAlwaysInvisible={true}
        swipe={false}
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
