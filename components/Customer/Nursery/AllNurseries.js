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

  return (
    <Container size={'xl'} pt={60} pb={50}>
      <Stack spacing={'xs'}>
        <Group position="apart" style={{ width: '100%' }}>
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
          {data?.nurseries.map((data, index) => (
            <Link href={`/customer/viewNursery/${data?.id}`} key={index}>
              <NurseryInfoCard key={index} data={data} />
            </Link>
          ))}
        </SimpleGrid>
      </Stack>
      <Group position="right" pt={'xl'}>
        {data?.nurseries.length > 0 && (
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
