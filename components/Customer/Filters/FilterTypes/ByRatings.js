import { Checkbox, Group, Rating, Stack, Text } from '@mantine/core'
import React from 'react'

const ratings = [
  { value: 5 },
  { value: 4 },
  { value: 3 },
  { value: 2 },
  { value: 1 },
]

const ByRatings = () => {
  return (
    <>
      <Stack px={'xs'} mt={'xl'}>
        <Text
          style={{
            fontWeight: 525,
            color: 'darkslategray',
          }}
        >
          Ratings
        </Text>
        {ratings.map((rating, index) => (
          <Checkbox
            key={index}
            label={
              <>
                <Rating value={rating.value} readOnly />
              </>
            }
            radius={'xs'}
            styles={{
              input: {
                '&:checked': {
                  backgroundColor: '#62A82C',
                  borderColor: '#62A82C',
                },
                '&:hover': {
                  cursor: 'pointer',
                },
                borderColor: '#62A82C',
              },
            }}
          />
        ))}
      </Stack>
    </>
  )
}

export default ByRatings
