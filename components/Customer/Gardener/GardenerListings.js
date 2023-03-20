import {
  Box,
  Button,
  Container,
  Group,
  Input,
  Modal,
  Pagination,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core'
import Link from 'next/link'
import { BiFilterAlt, BiSearch } from 'react-icons/bi'
import GardenerInfoCard from './GardenerInfoCard'
import { useMediaQuery } from '@mantine/hooks'
import { useState } from 'react'
import ByRatings from '../Filters/FilterTypes/ByRatings'
import ByAvailability from '../Filters/FilterTypes/ByAvailability'
import ByCity from '../Filters/FilterTypes/ByCity'
import { gql, useQuery } from '@apollo/client'
import SixNurseryLoaders from '../Generic/Skeletons/SixNurseryLoaders'
import ListingPagination from '../Generic/ListingPagination'

const GET_GARDENERS = gql`
  query Query {
    gardeners {
      id
      image
      firstName
      lastName
      city
      rating
      skills {
        skill {
          id
          name
        }
      }
      price
    }
  }
`

export default function GardenerListings() {
  const { data, loading, error } = useQuery(GET_GARDENERS)

  const matches575 = useMediaQuery('(max-width:575px)')
  const [opened, setOpened] = useState(false)

  const [query, setQuery] = useState('')

  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  const indexOfLastPost = currentPage * postsPerPage // = 9
  const indexOfFirstPost = indexOfLastPost - postsPerPage // = 0
  const currentPosts = data?.gardeners?.slice(indexOfFirstPost, indexOfLastPost) // = 9

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Container size={'xl'} pt={60} pb={50}>
      <Stack spacing={'xs'}>
        <Group position="apart" style={{ width: '100%' }}>
          <Group noWrap spacing={'xs'}>
            <Text
              style={{
                fontSize: 26,
                color: 'darkslategray',
              }}
              weight={600}
            >
              All Gardeners
            </Text>
            {!loading && !error && (
              <Text
                style={{
                  fontSize: 18,
                  color: 'darkslategray',
                }}
                mt={3}
              >
                (
                {
                  currentPosts?.filter((data) => {
                    if (query === '') {
                      return data
                    } else if (
                      data?.firstName
                        ?.toLowerCase()
                        .includes(query?.toLowerCase()) ||
                      data?.lastName
                        ?.toLowerCase()
                        .includes(query?.toLowerCase())
                    ) {
                      return data
                    }
                  }).length
                }
                )
              </Text>
            )}
          </Group>
          {!loading && !error && (
            <Group
              noWrap
              style={{
                width: matches575 ? '100%' : 'auto',
              }}
            >
              <Input
                placeholder="search a gardener..."
                icon={<BiSearch />}
                styles={(theme) => ({
                  input: {
                    '&:focus-within': {
                      borderColor: theme.colors.green[7],
                    },
                  },
                })}
                style={{
                  width: matches575 ? '100%' : 250,
                }}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button
                style={{
                  backgroundColor: '#62A82C',
                }}
                leftIcon={<BiFilterAlt size={17} />}
                onClick={() => setOpened(true)}
              >
                Filters
              </Button>
            </Group>
          )}
        </Group>

        {loading && (
          <Box mt={'xs'}>
            <SixNurseryLoaders />
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
            Error loading nurseries
          </Text>
        )}

        <SimpleGrid
          cols={3}
          spacing="xl"
          verticalSpacing={'xs'}
          breakpoints={[
            { maxWidth: 'md', cols: 2 },
            {
              maxWidth: 'xs',
              cols: 1,
            },
          ]}
        >
          {currentPosts
            ?.filter((data) => {
              if (query === '') {
                return data
              } else if (
                data?.firstName?.toLowerCase().includes(query?.toLowerCase()) ||
                data?.lastName?.toLowerCase().includes(query?.toLowerCase())
              ) {
                return data
              }
            })
            .map((data, index) => (
              <Link href={`/customer/viewGardener/${data?.id}`} key={index}>
                <GardenerInfoCard key={index} data={data} />
              </Link>
            ))}
        </SimpleGrid>
      </Stack>
      <Group position="right" pt={'xl'}>
        {query === '' && (
          <ListingPagination
            postsPerPage={postsPerPage}
            totalPosts={data?.nurseries?.length}
            paginate={paginate}
            currentPosts={currentPosts}
            filteredData={
              data?.gardeners?.length > 0 ? data?.gardeners : undefined
            }
          />
        )}
      </Group>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="FILTERS"
        transition={'fade'}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
        centered
      >
        <Box pl={8}>
          <ByCity />
        </Box>
        <ByRatings />
        <ByAvailability />
        <Box pl={8} pt={'lg'}>
          <Button disabled fullWidth>
            Clear Filters
          </Button>
        </Box>
      </Modal>
    </Container>
  )
}
