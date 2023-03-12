import { Container, Image, Paper, SimpleGrid, Stack, Text } from '@mantine/core'
import React from 'react'

const CategoriesList = () => {
  const categories = [
    {
      id: 1,
      name: 'Fruits',
      image: 'https://i.pravatar.cc/300',
      description: 'Fruits are the sweetest things on earth',
    },
    {
      id: 2,
      name: 'Vegetables',
      image: 'https://i.pravatar.cc/300',
      description: 'Vegetables are the sweetest things on earth',
    },
    {
      id: 3,
      name: 'Meat',
      image: 'https://i.pravatar.cc/300',
      description: 'Vegetables are the sweetest things on earth',
    },
    {
      id: 4,
      name: 'Fish',
      image: 'https://i.pravatar.cc/300',
      description: 'Vegetables are the sweetest things on earth',
    },
  ]

  return (
    <Container size={'xl'} pt={'xl'}>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 1040, cols: 2, spacing: 'md' },
          { maxWidth: 680, cols: 1, spacing: 'sm' },
        ]}
        mt={'xl'}
      >
        {categories.map((category) => (
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
