import { Carousel } from '@mantine/carousel'
import ProductCard from '../Cards/ProductCard'
import { Box, Container, Group, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi'
import { IoIosFlash } from 'react-icons/io'
import Link from 'next/link'

export default function ProductsCarousel() {
  return (
    <Container size={'xl'} mt={60}>
      <Group spacing={'xs'} mb={'lg'} pl={'lg'}>
        <IoIosFlash size={26} style={{ color: '#62A82C' }} />
        <Text
          style={{
            fontSize: '26px',
            color: 'darkslategray',
            fontWeight: 550,
          }}
        >
          Flash Deals
        </Text>
      </Group>
      <Carousel
        slideSize="25%"
        slideGap="md"
        dragFree={true}
        draggable={false}
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
        controlsOffset={-20}
        styles={{
          control: {
            backgroundColor: '#62A82C',
            opacity: 100,
            border: '1px solid #62A82C',
            width: 35,
            height: 35,
          },
        }}
        px={'lg'}
      >
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <Carousel.Slide key={index}>
              <Link href={'/customer/product'}>
                <ProductCard />
              </Link>
            </Carousel.Slide>
          ))}
      </Carousel>
    </Container>
  )
}
