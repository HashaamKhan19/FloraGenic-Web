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

export default function AllNurseries() {
  const matches575 = useMediaQuery('(max-width: 575px)')
  const [opened, setOpened] = useState(false)

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
        </Group>
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
          {Array(9)
            .fill(0)
            .map((_, index) => (
              <Link
                href={`/customer/viewNursery/${123}`}
                key={`nursery-${index}`}
              >
                <NurseryInfoCard key={index} />
              </Link>
            ))}
        </SimpleGrid>
      </Stack>
      <Group position="right" pt={'xl'}>
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
