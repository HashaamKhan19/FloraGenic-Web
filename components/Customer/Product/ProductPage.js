import { Container, Grid, Image } from '@mantine/core'
import ProductTabs from './Tabs/ProductTabs'
import RelatedNurseries from './Tabs/RelatedNurseries'
import ProductDetails from './ProductDetails'
import ProductImageSlider from './ProductImageSlider'

export default function ProductPage() {
  return (
    <Container size={'xl'} pt={60}>
      <Grid mb={'xl'}>
        <Grid.Col sm={6}>
          <ProductImageSlider />
        </Grid.Col>
        <Grid.Col sm={6}>
          <ProductDetails />
        </Grid.Col>
      </Grid>
      <Container size={'xl'} mt={50}>
        <ProductTabs />
      </Container>
      <Container size={'xl'} mt={80} pb={'xl'}>
        <RelatedNurseries />
      </Container>
    </Container>
  )
}
