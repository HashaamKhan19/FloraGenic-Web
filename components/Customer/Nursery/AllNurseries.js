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
  useMantineTheme,
} from '@mantine/core'
import NurseryInfoCard from './NurseryInfoCard'
import Link from 'next/link'
import { BiFilterAlt, BiSearch } from 'react-icons/bi'
import { useMediaQuery } from '@mantine/hooks'
import { useState } from 'react'
import ByCity from '../Filters/FilterTypes/ByCity'
import ByRatings from '../Filters/FilterTypes/ByRatings'
import { gql, useQuery } from '@apollo/client'
import NurseryCardLoading from '../Generic/Skeletons/NurseryCardLoading'
import SixNurseryLoaders from '../Generic/Skeletons/SixNurseryLoaders'
import ListingPagination from '../Generic/ListingPagination'

const GET_NURSERIES = gql`
  query Query {
    nurseries {
      id
      address
      name
      rating
      phoneNumber
      images
    }
  }
`

export default function AllNurseries() {
  const matches575 = useMediaQuery('(max-width: 575px)')
  const [opened, setOpened] = useState(false)

  const { loading, error, data } = useQuery(GET_NURSERIES)

  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  const indexOfLastPost = currentPage * postsPerPage // = 9
  const indexOfFirstPost = indexOfLastPost - postsPerPage // = 0
  const currentPosts = data?.nurseries?.slice(indexOfFirstPost, indexOfLastPost) // = 9

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  //searching
  const [query, setQuery] = useState('')

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
              All Nurseries
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
                      data?.name?.toLowerCase().includes(query?.toLowerCase())
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
                placeholder="search a nursery..."
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
                leftIcon={<BiFilterAlt size={17} />}
                style={{
                  backgroundColor: '#62A82C',
                }}
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
          breakpoints={[
            { maxWidth: 'md', cols: 2 },
            {
              maxWidth: 'sm',
              cols: 1,
            },
          ]}
        >
          {currentPosts
            ?.filter((data) => {
              if (query === '') {
                return data
              } else if (
                data?.name?.toLowerCase().includes(query?.toLowerCase())
              ) {
                return data
              }
            })
            .map((data, index) => (
              <Link href={`/customer/viewNursery/${data?.id}`} key={index}>
                <NurseryInfoCard key={index} data={data} />
              </Link>
            ))}
        </SimpleGrid>
      </Stack>
      <Group position="center" pt={'xl'}>
        {query === '' && (
          <ListingPagination
            postsPerPage={postsPerPage}
            totalPosts={data?.nurseries?.length}
            paginate={paginate}
            currentPosts={currentPosts}
            filteredData={
              data?.nurseries?.length > 0 ? data?.nurseries : undefined
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
        <Box pl={8} pt={'lg'}>
          <Button disabled fullWidth>
            Clear Filters
          </Button>
        </Box>
      </Modal>
    </Container>
  )
}
