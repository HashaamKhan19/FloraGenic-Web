import {
  Chip,
  Divider,
  Paper,
  Skeleton,
  Space,
  Stack,
  Text,
} from '@mantine/core'
import React, { useState } from 'react'

const GardenerEndorsements = ({ data, loading, error }) => {
  const [checked, setChecked] = useState(false)
  const [endorsements, setEndorsements] = useState(0)

  return (
    <>
      {loading && (
        <Paper>
          <Skeleton height={100} />
        </Paper>
      )}
      {error && (
        <Paper>
          <Text>Error</Text>
        </Paper>
      )}
      <Text
        style={{
          fontSize: '1.3rem',
          fontWeight: 525,
          color: 'darkslategray',
        }}
      >
        Skills
      </Text>
      <Space mt={'xl'} />
      {data?.skills?.map((skill, id) => (
        <Stack key={id}>
          <Text
            style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: 'darkslategray',
            }}
          >
            {skill.name || 'Skill Name'}
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
      ))}
    </>
  )
}

export default GardenerEndorsements
