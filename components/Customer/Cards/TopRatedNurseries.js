import { Carousel } from '@mantine/carousel'
import { Container, Group, Text } from '@mantine/core'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { TbStars } from 'react-icons/tb'
import NurseryCard from './NurseryCard'
import { gql, useQuery } from '@apollo/client'
import NurseryCardLoading from '../Generic/Skeletons/NurseryCardLoading'
import NurseryCarouselLoader from '../Generic/Skeletons/NurseryCarouselLoader'
import Link from 'next/link'

const GET_NURSERIES = gql`
  query Nurseries {
    nurseries {
      images
      name
      rating
      id
      openingHours
      closingHours
    }
  }
`

export default function TopRatedNurseries() {
  const { loading, error, data } = useQuery(GET_NURSERIES)

  const firstSixNurseries = data?.nurseries.slice(0, 6)

  return (
    <Container size={'xl'} mt={80}>
      <Group pl={'lg'} spacing={'xs'} mb={'lg'}>
        <TbStars size={26} style={{ color: '#62A82C' }} />
        <Text
          style={{
            fontSize: '26px',
            color: 'darkslategray',
            fontWeight: 550,
          }}
        >
          Top Rated Nurseries
        </Text>
      </Group>
      <Carousel
        slideSize="25%"
        slideGap="md"
        dragFree={true}
        draggable={false}
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'xs', slideSize: '100%', slideGap: 0 },
        ]}
        align="start"
        slidesToScroll={1}
        containScroll="trimSnaps"
        controlsOffset={-20}
        styles={{
          control: {
            opacity: 100,
            width: 40,
            height: 40,
            background: '#bfe6a1',

            '&[data-inactive]': {
              opacity: 0,
              cursor: 'default',
            },
          },
        }}
        px={'lg'}
        nextControlIcon={
          <HiArrowNarrowRight
            size={20}
            style={{ color: '#62A82C', opacity: 100 }}
          />
        }
        previousControlIcon={
          <HiArrowNarrowLeft
            size={20}
            style={{ color: '#62A82C', opacity: 100 }}
          />
        }
      >
        {loading && (
          <Group position="center">
            <NurseryCarouselLoader />
            <NurseryCarouselLoader />
            <NurseryCarouselLoader />
            <NurseryCarouselLoader />
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
            Error loading nurseries
          </Text>
        )}
        {firstSixNurseries?.map((nursery, index) => (
          <Carousel.Slide key={index}>
            <Link href={`/customer/viewNursery/${nursery.id}`} key={index}>
              <NurseryCard data={nursery} />
            </Link>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  )
}
