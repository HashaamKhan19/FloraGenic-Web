import ProductPage from '../Product/ProductPage'
import ProductsCarousel from '../Carousels/ProductsCarousel'
import {
  Button,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'

export default function HeroCarousel() {
  // const autoplay = useRef(Autoplay({ delay: 5000 }))
  const images = [
    {
      id: 1,
      url:
        'https://images.unsplash.com/photo-1591495913229-12bcd022097b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description:
        'Buy now to revamp your garden. Get 20% off on all plants here.',
      buttonLabel: 'Shop Now',
    },
    {
      id: 2,
      url:
        'https://images.unsplash.com/photo-1587131766835-e5dfaf70ea20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      description:
        'Buy now to revamp your garden. Get 50% off on all plants here.',
      buttonLabel: 'Shop Now',
    },
  ]

  return (
    <>
      <Carousel
        withIndicators
        height={500}
        style={{
          width: '100%',
        }}
        slideSize="100%"
        align="center"
        withControls={false}
        // plugins={[autoplay.current]}
        // onMouseEnter={autoplay.current.stop}
        // onMouseLeave={autoplay.current.reset}
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
        {images.map((image) => (
          <Carousel.Slide>
            <Image
              src={image.url}
              alt="hero"
              style={{
                width: '100%',
                objectFit: 'contain',
              }}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  )
}
