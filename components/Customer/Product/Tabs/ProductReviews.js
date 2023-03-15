import { Avatar, Group, Rating, Stack, Text } from '@mantine/core'
import React from 'react'

const ProductReviews = ({ data }) => {
  console.log('====================================')
  console.log('data in reviews', data)
  console.log('====================================')

  return (
    <>
      {data?.reviews?.length === 0 && (
        <Text
          style={{
            fontSize: 14,
            color: 'darkslategray',
            fontWeight: 500,
          }}
        >
          No reviews yet
        </Text>
      )}
      {data?.reviews?.map((review, index) => (
        <Group key={index}>
          <Stack mt={'lg'}>
            <Group spacing={'xs'}>
              <Avatar
                radius="xl"
                size={'lg'}
                src={
                  review?.customerDetails?.details?.image ||
                  'https://i.pravatar.cc/300'
                }
              />
              <Stack spacing={0}>
                <Text
                  weight={500}
                  style={{
                    fontSize: 14,
                    color: 'darkslategray',
                  }}
                >
                  {review?.customerDetails?.details?.firstName || 'Anonymous'}{' '}
                  {review?.customerDetails?.details?.lastName || 'User'}
                </Text>
                <Group>
                  <Rating
                    value={review?.rating || 4}
                    fractions={2}
                    size="md"
                    readOnly
                  />{' '}
                  {review?.rating || 0}
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
              {review?.review || 'Product Review'}
            </Text>
          </Stack>
        </Group>
      ))}
    </>
  )
}

export default ProductReviews
