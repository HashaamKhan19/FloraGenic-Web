import ProductPage from '../Product/ProductPage'
import ProductsCarousel from '../Carousels/ProductsCarousel'
import {
  Button,
  Container,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from '@mantine/core'
import { Carousel } from '@mantine/carousel'

export default function HeroCarousel() {
  const images = [
    {
      id: 1,
      url: '/images/HeroDeal/1.png',
    },
    {
      id: 2,
      url: '/images/HeroDeal/2.png',
    },
  ]

  return (
    <>
      <Paper
        style={{
          width: '100%',
          height: '500px',
          borderRadius: '0px',
        }}
      ></Paper>
    </>
  )
}
