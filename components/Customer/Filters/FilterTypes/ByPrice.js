import { Divider, Group, Input, RangeSlider, Stack, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React, { useState } from 'react'
import { ImLeaf } from 'react-icons/im'

const ByPrice = () => {
  const match1200 = useMediaQuery('(max-width: 1200px)')

  const [minPrice, setMinPrice] = useState(20)
  const [maxPrice, setMaxPrice] = useState(100)

  const handleSliderChange = (value) => {
    setMinPrice(value[0])
    setMaxPrice(value[1])
  }

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
          icon={'Rs.'}
          w={match1200 ? 150 : 100}
          value={minPrice}
          onChange={(e) => setMinPrice(parseInt(e.target.value))}
        />
        <Divider w={match1200 ? 10 : 8} size={match1200 ? 3 : 2} />
        <Input
          placeholder="Max"
          icon={'Rs.'}
          styles={(theme) => ({
            input: {
              '&:focus-within': {
                borderColor: theme.colors.green[7],
              },
            },
          })}
          w={match1200 ? 150 : 100}
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
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
        defaultValue={[minPrice, maxPrice]}
        value={[minPrice, maxPrice]}
        onChange={handleSliderChange}
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
