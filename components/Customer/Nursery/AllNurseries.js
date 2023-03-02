import {
  Container,
  Group,
  Input,
  Pagination,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import NurseryInfoCard from './NurseryInfoCard'
import Link from 'next/link'
import { BiSearch } from 'react-icons/bi'

export default function AllNurseries() {
  return (
    <Container size={'xl'} pt={60} pb={50}>
      <Stack spacing={'xs'}>
        <Group position="apart">
          <Text
            style={{
              fontSize: 26,
              color: 'darkslategray',
            }}
            weight={600}
          >
            All Nurseries
          </Text>
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
          />
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
    </Container>
  )
}
