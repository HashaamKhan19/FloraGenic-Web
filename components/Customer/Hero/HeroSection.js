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
    <div
      style={{
        backgroundColor: '#F6F9FC',
      }}
    >
      <HeroCarousel />
      <ProductsCarousel />
      <CategoriesCard />
      <ServiceCards />
    </div>
  )
}
