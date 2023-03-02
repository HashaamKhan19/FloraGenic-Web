import { Carousel } from '@mantine/carousel'
import {
    Container,
    Group, Text
} from '@mantine/core'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { TbStars } from 'react-icons/tb'
import NurseryCard from './NurseryCard'

export default function TopRatedNurseries() {
  const nurseries = [
    {
      id: 1,
      name: 'Nursery 1',
      ratings: 4.5,
      image:
        'https://images.unsplash.com/photo-1611843467160-25afb8df1074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 1,
      name: 'Nursery 1',
      ratings: 4.5,
      image:
        'https://images.unsplash.com/photo-1593412369977-d3b53ca6b53a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 1,
      name: 'Nursery 1',
      ratings: 4.5,
      image:
        'https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 1,
      name: 'Nursery 1',
      ratings: 4.5,
      image:
        'https://images.unsplash.com/photo-1593412369977-d3b53ca6b53a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ]

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
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <Carousel.Slide key={index}>
              <NurseryCard />
            </Carousel.Slide>
          ))}
      </Carousel>
    </Container>
  )
}
