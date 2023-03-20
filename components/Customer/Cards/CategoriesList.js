import { gql, useQuery } from '@apollo/client'
import { Container, Image, Paper, SimpleGrid, Stack, Text } from '@mantine/core'
import React from 'react'

const GET_CATEGORIES = gql`
  query Query {
    categories {
      image
      name
      id
      hiddenStatus
      description
    }
  }
`

const CategoriesList = () => {
  const { data, loading, error } = useQuery(GET_CATEGORIES)

  console.log('====================================')
  console.log('categories: ', data)
  console.log('====================================')

  return (
    <Container size={'xl'} pt={'xl'} pb={'xl'}>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 1040, cols: 2, spacing: 'md' },
          { maxWidth: 680, cols: 1, spacing: 'sm' },
        ]}
        mt={'xl'}
      >
        {data?.categories?.map((category) => (
          <Paper
            key={category.id}
            shadow="sm"
            padding="xl"
            style={{ maxHeight: 300 }}
            radius={'sm'}
            withBorder
            pb={'xs'}
          >
            <Image
              src={category.image}
              radius={'xs'}
              height={200}
              alt={category.name}
            />
            <Stack spacing={3} pl={'xs'} pt={'xs'}>
              <Text
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 525,
                  color: 'darkslategray',
                }}
              >
                {category.name}
              </Text>
              <Text
                style={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: 'darkslategray',
                  maxWidth: 400,
                }}
                truncate
              >
                {category.description}
              </Text>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default CategoriesList
