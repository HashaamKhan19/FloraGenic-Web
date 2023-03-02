import { Checkbox, Group, Rating, Stack, Text } from '@mantine/core'
import React from 'react'

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
        <Group>
          <Checkbox
            label={
              <>
                <Rating value={5} readOnly />
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
        </Group>
        <Group>
          <Checkbox
            label={
              <>
                <Rating value={4} readOnly />
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
        </Group>
        <Group>
          <Checkbox
            label={
              <>
                <Rating value={3} readOnly />
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
        </Group>
        <Group>
          <Checkbox
            label={
              <>
                <Rating value={2} readOnly />
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
        </Group>
        <Group>
          <Checkbox
            label={
              <>
                <Rating value={1} readOnly />
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
        </Group>
      </Stack>
    </>
  )
}

export default ByRatings
