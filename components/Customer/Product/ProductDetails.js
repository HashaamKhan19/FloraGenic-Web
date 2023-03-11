import { Badge, Box, Button, Group, Rating, Stack, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React from 'react'

const ProductDetails = () => {
  const matches768 = useMediaQuery('(max-width: 768px)')

  return (
    <Box mt={matches768 ? 'md' : '0'} px={matches768 ? 'md' : '0'}>
      <Text
        weight={600}
        style={{
          fontSize: 28,
          color: 'darkslategray',
        }}
      >
        Oliver Buzz Plant
      </Text>
      <Group align="center" spacing={'sm'}>
        <Rating value={4} size="md" readOnly />
        <Text
          weight={400}
          style={{
            fontSize: 14,
            color: 'darkslategray',
          }}
        >
          4.0 (10 Reviews)
        </Text>
      </Group>
      <Group mt={'lg'}>
        <Text
          weight={600}
          style={{
            fontSize: 14,
            color: 'darkslategray',
          }}
        >
          Category:{' '}
        </Text>
        <Badge color="green" variant="filled">
          Decorations
        </Badge>
      </Group>
      <Group spacing={'xs'} mt={'sm'}>
        <Text
          weight={600}
          style={{
            fontSize: 14,
            color: 'darkslategray',
          }}
        >
          Seller:
        </Text>
        <Text
          style={{
            fontSize: 14,
            cursor: 'pointer',
          }}
          weight={600}
          c={'green'}
        >
          TRA Nursery
        </Text>
      </Group>
      <Stack spacing={0}>
        <Text
          weight={600}
          style={{
            fontSize: 14,
            color: 'darkslategray',
          }}
          mt={'md'}
        >
          Description:
        </Text>
        <Text
          mt={'xs'}
          style={{
            color: 'darkslategray',
            fontSize: 14,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis in
          ullam repudiandae laboriosam quas, fuga similique ipsa! Nemo a facere
          cupiditate labore totam dignissimos quisquam enim dolore nam dolor.
        </Text>
      </Stack>
      <Stack spacing={0}>
        <Text
          weight={600}
          style={{
            fontSize: 23,
            color: '#d4172e',
          }}
          mt={'md'}
        >
          Rs. 1000
        </Text>
        <Text
          weight={600}
          style={{
            fontSize: 14,
            color: 'darkslategray',
          }}
        >
          Stock Available: 10
        </Text>
      </Stack>
      <Button mt={'lg'} color="green">
        Add To Cart
      </Button>
    </Box>
  )
}

export default ProductDetails
