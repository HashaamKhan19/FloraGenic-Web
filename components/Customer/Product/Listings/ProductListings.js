import {
  Button,
  Container,
  Grid,
  Group,
  Input,
  Modal,
  Pagination,
  SimpleGrid,
  Text,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Filter from '../../Filters/Filter'
import ProductCard from '../../Cards/ProductCard'
import { BiSearch } from 'react-icons/bi'
import React, { useState } from 'react'
import Link from 'next/link'

const ProductListings = () => {
  const match1200 = useMediaQuery('(max-width: 1200px)')

  const [opened, setOpened] = useState(false)

  return (
    <Container size={'xl'} pb={'xl'}>
      <Grid pt={'xl'}>
        <Grid.Col md={3} hidden={match1200 ? true : false}>
          <Filter />
        </Grid.Col>
        <Grid.Col md={!match1200 ? 9 : 12}>
          <Group position="apart" noWrap>
            <Text
              style={{
                fontWeight: 500,
                color: 'darkslategray',
                whiteSpace: 'nowrap',
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
          <Group position="center" pt={'xl'}>
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
          </Group>
        </Grid.Col>
      </Grid>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        transition={'fade'}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
        size={match1200 ? 'xs' : ''}
        centered
      >
        <Filter />
      </Modal>
    </Container>
  )
}

export default ProductListings
