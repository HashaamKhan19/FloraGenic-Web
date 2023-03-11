import { Chip, Divider, Stack, Text } from '@mantine/core'
import React, { useState } from 'react'

const GardenerEndorsements = () => {
  const [checked, setChecked] = useState(false)
  const [endorsements, setEndorsements] = useState(0)

  return (
    <>
      <Stack>
        <Text
          style={{
            fontSize: '1rem',
            fontWeight: 500,
            color: 'darkslategray',
          }}
        >
          GraphQL
        </Text>
        {endorsements > 0 && (
          <Text
            style={{
              fontSize: '14px',
              color: 'darkslategray',
            }}
          >
            {endorsements} {endorsements > 1 ? 'Endorsements' : 'Endorsement'}
          </Text>
        )}
        <Chip
          variant="outline"
          color="gray"
          checked={checked}
          onChange={() => {
            setChecked((v) => !v)
            checked
              ? setEndorsements(endorsements - 1)
              : setEndorsements(endorsements + 1)
          }}
        >
          Endorse
        </Chip>
        <Divider />
      </Stack>
    </>
  )
}

export default GardenerEndorsements
