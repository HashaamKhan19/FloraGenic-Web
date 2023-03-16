import { Carousel } from '@mantine/carousel'
import ProductCard from '../Cards/ProductCard'
import { Box, Container, Group, Text } from '@mantine/core'
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi'
import { IoIosFlash } from 'react-icons/io'
import Link from 'next/link'
import { gql, useQuery } from '@apollo/client'
import CardLoading from '../Generic/Skeletons/CardLoading'
import ProductsCardHero from '../Cards/ProductsCardHero'
import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'

const GET_PRODUCTS = gql`
  query Query {
    products {
      category {
        name
      }
      description
      id
      hidden
      images
      name
      nursery {
        images
        name
        details
      }
      overallRating
      retailPrice
      sold
      stock
    }
  }
`

export default function ProductsCarousel() {
  const { loading, error, data } = useQuery(GET_PRODUCTS)

  const autoplay = useRef(Autoplay({ delay: 3000 }))

  const firstEightProducts = data?.products.slice(0, 8)

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
        withControls={false}
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'xs', slideSize: '100%', slideGap: 0 },
        ]}
        align="start"
        slidesToScroll={1}
        nextControlIcon={
          <HiArrowNarrowRight size={20} style={{ color: '#fff' }} />
        }
        previousControlIcon={
          <HiArrowNarrowLeft size={20} style={{ color: '#fff' }} />
        }
        controlsOffset={-20}
        styles={{
          control: {
            backgroundColor: '#62A82C',
            opacity: 100,
            border: '1px solid #62A82C',
            width: 40,
            height: 40,
          },
        }}
        px={'lg'}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {loading && (
          <Group position="center">
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </Group>
        )}
        {error && (
          <Text
            style={{
              fontWeight: 500,
              color: 'darkslategray',
              whiteSpace: 'nowrap',
            }}
          >
            Error loading products
          </Text>
        )}
        {firstEightProducts?.map((product, index) => (
          <Carousel.Slide key={index}>
            <Link href={`/customer/viewProduct/${product?.id}`}>
              <ProductsCardHero data={product} />
            </Link>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  )
}
