import React, { useRef } from 'react'
import { Image, Paper, Grid, Text, Button, Center } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'

const HeroCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }))

  return (
    <Paper style={{ width: '100%' }}>
      <Carousel
        withIndicators
        withControls={false}
        mx="auto"
        loop
        maw={1000}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        styles={{
          indicator: {
            width: 12,
            height: 4,
            transition: 'width 250ms ease',
            backgroundColor: '#62A82C',

            '&[data-active]': {
              width: 40,
            },
          },
        }}
      >
        <Carousel.Slide>
          <Grid mt={'xl'} mx="auto">
            <Grid.Col md={6} xs={12} mt={'xl'}>
              <Text
                style={{
                  fontWeight: 600,
                  color: 'darkslategray',
                  fontSize: '2.7rem',
                }}
              >
                50% Off For Your First Shopping
              </Text>
              <Text
                style={{
                  fontWeight: 400,
                  color: 'darkslategray',
                  fontSize: '1rem',
                }}
                mb={'xl'}
                mt={'xs'}
              >
                Revamp your garden with our wide range of plants and gardening
                tools. Shop now and get 50% off on your first purchase.
              </Text>
              <Button
                style={{
                  backgroundColor: '#62A82C',
                  color: 'white',
                }}
                mt={'xs'}
              >
                Shop Now
              </Button>
            </Grid.Col>
            <Grid.Col md={6} xs={12}>
              <Center>
                <Image
                  src={'/images/HeroDeal/test2.png'}
                  width={470}
                  height={430}
                />
              </Center>
            </Grid.Col>
          </Grid>
        </Carousel.Slide>
        <Carousel.Slide>
          <Grid mt={'xl'} mx="auto">
            <Grid.Col md={6} xs={12} mt={'xl'}>
              <Text
                style={{
                  fontWeight: 600,
                  color: 'darkslategray',
                  fontSize: '2.7rem',
                }}
              >
                50% Off For Your First Shopping
              </Text>
              <Text
                style={{
                  fontWeight: 400,
                  color: 'darkslategray',
                  fontSize: '1rem',
                }}
                mb={'xl'}
                mt={'xs'}
              >
                Revamp your garden with our wide range of plants and gardening
                tools. Shop now and get 50% off on your first purchase.
              </Text>
              <Button
                style={{
                  backgroundColor: '#62A82C',
                  color: 'white',
                }}
                mt={'xs'}
              >
                Shop Now
              </Button>
            </Grid.Col>
            <Grid.Col md={6} xs={12}>
              <Center>
                <Image
                  src={'/images/HeroDeal/test1.png'}
                  width={400}
                  height={400}
                />
              </Center>
            </Grid.Col>
          </Grid>
        </Carousel.Slide>
      </Carousel>
    </Paper>
  )
}

export default HeroCarousel
