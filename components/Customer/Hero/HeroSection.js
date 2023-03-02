import HeroCarousel from './HeroCarousel'
import CategoriesCard from '../Cards/CategoriesCard'
import ProductsCarousel from '../Carousels/ProductsCarousel'
import TopRatedNurseries from '../Cards/TopRatedNurseries'
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
      <TopRatedNurseries />
      <CategoriesCard />
      <ServiceCards />
    </div>
  )
}
