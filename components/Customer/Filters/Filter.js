import {
  Checkbox,
  Divider,
  Group,
  Input,
  Menu,
  NavLink,
  Paper,
  RangeSlider,
  Rating,
  Stack,
  Text,
  createStyles,
  rem,
} from '@mantine/core'
import ByCategory from './FilterTypes/ByCategory'
import { useState } from 'react'
import { ImLeaf } from 'react-icons/im'
import ByPrice from './FilterTypes/ByPrice'
import ByRatings from './FilterTypes/ByRatings'

const Filter = () => {
  const [opened, setOpened] = useState(true)

  return (
    <Paper
      mt={'xs'}
      pb={'xl'}
      style={{
        border: '1px solid #e5e5e5',
        borderRadius: '8px',
      }}
    >
      <Stack pt={'xl'} px={'xl'}>
        <NavLink
          label="Categories"
          childrenOffset={25}
          styles={{
            label: {
              fontWeight: 525,
              color: 'darkslategray',
              fontSize: '1rem',
            },
          }}
          opened={opened}
          onClick={() => setOpened(!opened)}
        >
          <ByCategory />
        </NavLink>

        <ByPrice />

        <ByRatings />
      </Stack>
    </Paper>
  )
}

export default Filter
