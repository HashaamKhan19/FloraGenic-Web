import { Container, Grid } from '@mantine/core'

export default function ProductPage() {
  return (
    <Container size={'xl'}>
      <Grid>
        <Grid.Col span={6} bg={'red'}></Grid.Col>
        <Grid.Col span={6} bg={'blue'}></Grid.Col>
      </Grid>
    </Container>
  )
}
