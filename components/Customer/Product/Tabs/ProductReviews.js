import { Avatar, Group, Rating, Stack, Text } from '@mantine/core'
import React from 'react'

const ProductReviews = () => {
  return (
    <>
      <Group>
        <Stack mt={'lg'}>
          <Group spacing={'xs'}>
            <Avatar radius="xl" size={'lg'} />
            <Stack spacing={0}>
              <Text
                weight={500}
                style={{
                  fontSize: 14,
                  color: 'darkslategray',
                }}
              >
                John Doe
              </Text>
              <Group>
                <Rating value={4.5} fractions={2} size="md" readOnly /> 4.5
              </Group>
            </Stack>
          </Group>
          <Text
            mt={'xs'}
            pl={'xs'}
            style={{
              fontSize: 14,
              color: 'darkslategray',
            }}
          >
            This plant is very beautiful and it is very easy to maintain.
          </Text>
        </Stack>
      </Group>
    </>
  )
}

export default ProductReviews
