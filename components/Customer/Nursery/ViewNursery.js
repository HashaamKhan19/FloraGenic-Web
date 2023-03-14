import {
  Button,
  Container,
  Grid,
  Group,
  Input,
  Modal,
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
import { useState } from 'react'

export default function ViewNursery({ data, loading, error }) {
  const match1200 = useMediaQuery('(max-width: 1200px)')
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Container size={'xl'} pt={'xl'} mb={'xl'}>
        <Paper
          style={{
            width: '100%',
            height: '300px',
          }}
        >
          <NurseryInfoCard data={data} />
        </Paper>
        <Grid mt={'xl'}>
          <Grid.Col md={3} hidden={match1200 ? true : false}>
            <Filter />
          </Grid.Col>
          <Grid.Col md={!match1200 ? 9 : 12}>
            {data?.products?.length > 0 ? (
              <Group position="apart" noWrap>
                <Text
                  style={{
                    fontWeight: 500,
                    color: 'darkslategray',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {data?.products?.length}{' '}
                  {data?.products?.length > 1 ? 'products' : 'product'} found
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
                  style={{
                    width: match1200 ? '100%' : '250px',
                  }}
                />
                {match1200 && (
                  <Button
                    onClick={() => {
                      setOpened(true)
                    }}
                    style={{
                      backgroundColor: '#62A82C',
                      color: 'white',
                    }}
                  >
                    Filters
                  </Button>
                )}
              </Group>
            ) : (
              <Text
                style={{
                  fontWeight: 525,
                  color: 'darkslategray',
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                  fontSize: '20px',
                }}
              >
                {loading ? 'Loading products...' : 'No products found'}
              </Text>
            )}
            <SimpleGrid
              cols={3}
              breakpoints={[
                { maxWidth: 1040, cols: 2, spacing: 'md' },
                { maxWidth: 680, cols: 1, spacing: 'sm' },
              ]}
              mt={'xl'}
            >
              {data?.products?.map((prodData, index) => (
                <Link href={`/customer/viewProduct/${prodData.id}`} key={index}>
                  <ProductCard key={index} data={prodData} />
                </Link>
              ))}
            </SimpleGrid>
            <Group position="center" pt={'xl'}>
              {data?.products?.length > 0 && (
                <Pagination
                  total={10}
                  position="center"
                  styles={(theme) => ({
                    item: {
                      '&[data-active]': {
                        backgroundImage: theme.fn.gradient({
                          from: '#62A82C',
                          to: '#62A82C',
                        }),
                      },
                    },
                  })}
                />
              )}
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size={match1200 ? 'xs' : ''}
        transition={'fade'}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
        centered
      >
        <Filter />
      </Modal>
    </>
  )
}
