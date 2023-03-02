import { Box, Button, Group, NavLink, Paper, Stack, Text } from '@mantine/core'
import ByCategory from './FilterTypes/ByCategory'
import { useState } from 'react'
import ByPrice from './FilterTypes/ByPrice'
import ByRatings from './FilterTypes/ByRatings'
import { useMediaQuery } from '@mantine/hooks'

const Filter = () => {
  const [navlinkOpened, setNavLinkOpened] = useState(true)
  const match1200 = useMediaQuery('(max-width: 1200px)')

  return (
    <Box
      style={{
        padding: match1200 ? 20 : 0,
      }}
    >
      <Paper
        mt={'xs'}
        pb={match1200 ? 0 : 'xl'}
        withBorder={match1200 ? false : true}
        w={'auto'}
      >
        {match1200 && (
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Advance Filters
          </Text>
        )}
        {!match1200 && (
          <Button
            style={{
              width: '85%',
              backgroundColor: '#62A82C',
              color: 'white',
            }}
            mx={'xl'}
            mt={'xs'}
            disabled
            sx={{ '&[disabled]': { opacity: 0.4 } }}
          >
            Clear Filters
          </Button>
        )}
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
            opened={navlinkOpened}
            onClick={() => setNavLinkOpened(!navlinkOpened)}
          >
            <ByCategory />
          </NavLink>

          <ByPrice />

          <ByRatings />
        </Stack>
        {match1200 && (
          <Group mt={30} position="apart" noWrap>
            <Button
              fullWidth
              style={{
                backgroundColor: '#62A82C',
                color: 'white',
              }}
            >
              Reset
            </Button>
          </Group>
        )}
      </Paper>
    </Box>
  )
}

export default Filter
