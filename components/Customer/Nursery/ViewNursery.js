import {
  Container,
  Grid,
  Group,
  Input,
  Pagination,
  Paper,
  SimpleGrid,
  Text,
} from '@mantine/core'
import NurseryInfoCard from './NurseryInfoCard'
import ProductCard from '../Cards/ProductCard'
import { useMediaQuery } from '@mantine/hooks'
import { BiSearch } from 'react-icons/bi'
import Link from 'next/link'
import Filter from '../Filters/Filter'

export default function ViewNursery({ id }) {
  const match1200 = useMediaQuery('(max-width: 1200px)')

  return (
    <Container size={'xl'} pt={'xl'} mb={'xl'}>
      <Paper
        style={{
          width: '100%',
          height: '300px',
        }}
      >
        <NurseryInfoCard />
      </Paper>
      <Grid mt={'xl'}>
        <Grid.Col md={3} hidden={match1200 ? true : false}>
          <Filter />
        </Grid.Col>
        <Grid.Col md={!match1200 ? 9 : 12}>
          <Group position="apart">
            <Text
              style={{
                fontWeight: 500,
                color: 'darkslategray',
              }}
            >
              9 Products
            </Text>
            <Input
              placeholder="search..."
              icon={<BiSearch />}
              styles={(theme) => ({
                input: {
                  '&:focus-within': {
                    borderColor: theme.colors.green[7],
                  },
                },
              })}
            />
          </Group>
          <SimpleGrid
            cols={3}
            breakpoints={[
              { maxWidth: 1040, cols: 2, spacing: 'md' },
              { maxWidth: 680, cols: 1, spacing: 'sm' },
            ]}
            mt={'xl'}
          >
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <Link href={`/customer/product`} key={`product-${index}`}>
                  <ProductCard key={index} />
                </Link>
              ))}
          </SimpleGrid>
          <Group position="right" pt={'xl'}>
            <Pagination
              total={10}
              position="center"
              styles={(theme) => ({
                item: {
                  '&[data-active]': {
                    backgroundImage: theme.fn.gradient({
                      from: 'green',
                      to: 'green',
                    }),
                  },
                },
              })}
            />
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
