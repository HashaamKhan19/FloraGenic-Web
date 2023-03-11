import React from 'react'
import { PakistanCities } from '../Cities'
import { MultiSelect, Stack, Text } from '@mantine/core'

const cityData = PakistanCities.map((city) => ({
  label: city.label,
  value: city.value,
}))

const ByCity = () => {
  return (
    <>
      <Text
        style={{
          fontWeight: 525,
          color: 'darkslategray',
        }}
      >
        City
      </Text>
      <MultiSelect
        data={cityData}
        placeholder="Select city"
        styles={(theme) => ({
          input: {
            '&:focus-within': {
              borderColor: theme.colors.green[7],
            },
          },
        })}
      />
    </>
  )
}

export default ByCity
