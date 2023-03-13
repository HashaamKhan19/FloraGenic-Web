import {
  Box,
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
import { gql, useQuery } from '@apollo/client'
import CardLoading from '../../Generic/Skeletons/CardLoading'
import SixCardsLoading from '../../Generic/Skeletons/SixCardsLoading'

const GET_PRODUCTS = gql`
  query ExampleQuery {
    products {
      id
      nurseryID
      nursery {
        name
        id
        details
        images
      }
      name
      description
      category {
        name
      }
      hidden
      retailPrice
      wholesalePrice
      stock
      sold
      images
      overallRating
      tags
      createdAt
      updatedAt
      reviews {
        createdAt
        likes
        rating
        review
        customerDetails {
          details {
            ... on Customer {
              firstName
              image
              lastName
            }
          }
        }
      }
    }
  }
`

const ProductListings = () => {
  const match1200 = useMediaQuery('(max-width: 1200px)')

  const [opened, setOpened] = useState(false)

  const { loading, error, data } = useQuery(GET_PRODUCTS)

  return (
    <Container size={'xl'} pb={'xl'}>
      <Grid pt={'xl'}>
        <Grid.Col md={3} hidden={match1200 ? true : false}>
          <Filter />
        </Grid.Col>
        <Grid.Col md={!match1200 ? 9 : 12}>
          {loading && (
            <Box mt={'xs'}>
              <SixCardsLoading />
            </Box>
          )}

          {error && (
            <Text
              style={{
                fontWeight: 500,
                color: 'darkslategray',
                whiteSpace: 'nowrap',
              }}
            >
              Error loading products
            </Text>
          )}

          {!loading && !error && (
            <Group position="apart" noWrap>
              <Text
                style={{
                  fontWeight: 500,
                  color: 'darkslategray',
                  whiteSpace: 'nowrap',
                }}
              >
                {data?.products?.length} Products
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
          )}
          <SimpleGrid
            cols={3}
            breakpoints={[
              { maxWidth: 1040, cols: 2, spacing: 'md' },
              { maxWidth: 680, cols: 1, spacing: 'sm' },
            ]}
            mt={'xl'}
          >
            {data?.products?.map((data, index) => (
              <Link href={`/customer/viewProduct/${data?.id}`} key={index}>
                <ProductCard key={index} data={data} />
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
