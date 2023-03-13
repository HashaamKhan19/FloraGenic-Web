import { Container, Grid, Image } from '@mantine/core'
import ProductTabs from './Tabs/ProductTabs'
import RelatedNurseries from './Tabs/RelatedNurseries'
import ProductDetails from './ProductDetails'
import ProductImageSlider from './ProductImageSlider'

export default function ProductPage({ data, loading, error }) {
  return (
    <Container size={'xl'} pt={60}>
      <Grid mb={'xl'}>
        <Grid.Col sm={6}>
          <ProductImageSlider
            data={data?.product?.images}
            loading={loading}
            error={error}
          />
        </Grid.Col>
        <Grid.Col sm={6}>
          <ProductDetails
            data={data?.product}
            loading={loading}
            error={error}
          />
        </Grid.Col>
      </Grid>
      <Container size={'xl'} mt={50}>
        <ProductTabs data={data?.product} loading={loading} error={error} />
      </Container>
      <Container size={'xl'} mt={80} pb={'xl'}>
        <RelatedNurseries />
      </Container>
    </Container>
  )
}
