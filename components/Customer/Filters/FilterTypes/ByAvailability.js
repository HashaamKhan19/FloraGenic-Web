import { Checkbox, Group, Rating, Stack, Text } from '@mantine/core'
import React from 'react'

const availability = [
  {
    id: 1,
    value: true,
    label: 'Available Gardeners',
  },
]

const ByAvailability = () => {
  return (
    <>
      <Stack px={'xs'} mt={'xl'}>
        <Text
          style={{
            fontWeight: 525,
            color: 'darkslategray',
          }}
        >
          Availability
        </Text>
        {availability.map((available, index) => (
          <Checkbox
            key={index}
            label={
              <>
                <Text
                  style={{
                    fontWeight: 500,
                    color: 'darkslategray',
                  }}
                >
                  {available.label}
                </Text>
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

export default ByAvailability
