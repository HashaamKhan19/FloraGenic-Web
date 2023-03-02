import { Divider, Group, Input, RangeSlider, Stack, Text } from '@mantine/core'
import React from 'react'
import { ImLeaf } from 'react-icons/im'

const ByPrice = () => {
  return (
    <Stack px={'xs'} mt={'xs'}>
      <Text
        style={{
          fontWeight: 525,
          color: 'darkslategray',
        }}
      >
        Price Range
      </Text>
      <Group noWrap>
        <Input
          placeholder="Min"
          styles={(theme) => ({
            input: {
              '&:focus-within': {
                borderColor: theme.colors.green[7],
              },
            },
          })}
          w={100}
        />
        <Divider w={8} size={2} />
        <Input
          placeholder="Max"
          styles={(theme) => ({
            input: {
              '&:focus-within': {
                borderColor: theme.colors.green[7],
              },
            },
          })}
          w={100}
        />
      </Group>
      <RangeSlider
        mt="xl"
        styles={{
          thumb: {
            borderWidth: 2,
            padding: 3,
            color: '#62A82C',
            borderColor: '#62A82C',
          },
          bar: { backgroundColor: '#62A82C' },
        }}
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[
          <ImLeaf size="1rem" key="1" />,
          <ImLeaf size="1rem" key="2" />,
        ]}
      />
    </Stack>
  )
}

export default ByPrice
