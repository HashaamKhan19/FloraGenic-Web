import HeroCarousel from './HeroCarousel'
import { Container, Group, Paper, Stack, Text } from '@mantine/core'
import CategoriesCard from '../Cards/CategoriesCard'
import ProductsCarousel from '../Carousels/ProductsCarousel'
import TopRatedNurseries from '../Cards/TopRatedNurseries'
import TopRatedProducts from '../Cards/TopRatedProducts'
import { GiSeedling, GiStarsStack } from 'react-icons/gi'
import { BiChevronsRight } from 'react-icons/bi'
import ServiceCards from '../Cards/ServiceCards'

export default function HeroSection() {
  return (
    <div>
      <HeroCarousel />
      <ProductsCarousel />
      <CategoriesCard />
      {/* Top Rated Code+components start */}
      <Container size={'xl'} mt={60}>
        <Group spacing={'xl'}>
          <Stack>
            <Group
              mb={'lg'}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Group spacing={'xs'} position="apart">
                <GiSeedling size={26} style={{ color: '#62A82C' }} />
                <Text
                  style={{
                    fontSize: '26px',
                    color: 'darkslategray',
                    fontWeight: 550,
                  }}
                >
                  Top Rated Products
                </Text>
              </Group>
              <Group spacing={0} pr={'xs'}>
                <Text
                  style={{
                    fontSize: '14px',
                    color: 'darkslategray',
                  }}
                >
                  View all
                </Text>
                <BiChevronsRight
                  size={20}
                  style={{
                    color: 'darkslategray',
                  }}
                />
              </Group>
            </Group>
            <TopRatedProducts />
          </Stack>

          {/* <GiStarsStack size={26} style={{ color: '#62A82C' }} /> */}

          <Stack>
            <Group
              mb={'lg'}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Group spacing={'xs'} position="apart">
                <GiStarsStack size={26} style={{ color: '#62A82C' }} />
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
              <Group spacing={0} pr={'xs'}>
                <Text
                  style={{
                    fontSize: '14px',
                    color: 'darkslategray',
                  }}
                >
                  View all
                </Text>
                <BiChevronsRight
                  size={20}
                  style={{
                    color: 'darkslategray',
                  }}
                />
              </Group>
            </Group>
            <TopRatedNurseries />
          </Stack>
        </Group>
      </Container>
      {/* Top Rated Code+components end */}
      <ServiceCards />
    </div>
  )
}
