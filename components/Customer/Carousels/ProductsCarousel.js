import { Carousel } from '@mantine/carousel'
import ItemCard from '../Cards/ItemCard'
import { Box, Container } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi'

export default function ProductsCarousel() {
  const match786 = useMediaQuery('(max-width: 786px)')
  return (
    <Container size={'xl'}>
      <Carousel
        slideSize="25%"
        slideGap="md"
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
        ]}
        align="start"
        slidesToScroll={1}
        nextControlIcon={
          <HiArrowNarrowRight size={18} style={{ color: '#fff' }} />
        }
        previousControlIcon={
          <HiArrowNarrowLeft size={18} style={{ color: '#fff' }} />
        }
        styles={{
          control: {
            backgroundColor: '#62A82C',
            opacity: 100,
            border: '1px solid #62A82C',
            width: 35,
            height: 35,
          },
        }}
      >
        <Carousel.Slide>
          <ItemCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <ItemCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <ItemCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <ItemCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <ItemCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <ItemCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <ItemCard />
        </Carousel.Slide>
      </Carousel>
    </Container>
  )
}
