import { Avatar, Button, Group, Rating, Stack, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React from 'react'
import { BiMap } from 'react-icons/bi'
import { GiSuitcase } from 'react-icons/gi'
import { IoPaperPlane } from 'react-icons/io5'

const GardenerDetails = ({ data }) => {
  const match475 = useMediaQuery('(max-width: 475px)')

  console.log('====================================')
  console.log(data)
  console.log('====================================')

  return (
    <>
      <Avatar
        size={100}
        radius={'50%'}
        style={{
          position: 'absolute',
          top: '-50px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        src={data?.image}
      />
      <Group position="apart" noWrap>
        <Stack spacing={'xs'} mt={match475 ? 'xl' : ''}>
          <Text
            style={{
              fontSize: '1.5rem',
              fontWeight: 525,
              color: 'darkslategray',
            }}
          >
            {data?.firstName + ' ' + data?.lastName || 'Gardener Name'}
          </Text>
          <Group spacing={2}>
            <BiMap />
            <Text
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: 'darkslategray',
              }}
            >
              {data?.city || 'Location'}
            </Text>
          </Group>
          <Group pt={'xs'}>
            <Button
              leftIcon={<IoPaperPlane />}
              radius={'xl'}
              style={{
                backgroundColor: '#62A82C',
              }}
            >
              Message
            </Button>
            <Button
              leftIcon={<GiSuitcase size={18} />}
              radius={'xl'}
              style={{
                border: '1px solid #62A82C',
                backgroundColor: 'white',
                color: '#62A82C',
              }}
            >
              Hire
            </Button>
          </Group>
        </Stack>

        <Stack spacing={'xs'} pt={40}>
          <Group spacing={2}>
            <Rating value={data?.rating} size="md" readOnly />
            <Text
              style={{
                fontSize: '14px',
                color: 'darkslategray',
              }}
            >
              (12????)
            </Text>
          </Group>
          <Group>
            <Text
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: 'darkslategray',
              }}
            >
              Pricing:
            </Text>
            <Text
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: '#D92228',
              }}
            >
              {data?.price || 'Price'} /
            </Text>
          </Group>

          <Group>
            <Text
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: 'darkslategray',
              }}
            >
              Experience:
            </Text>
            <Text
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: '#D92228',
              }}
            >
              {data?.experience || 'Experience'} years
            </Text>
          </Group>
        </Stack>
      </Group>
    </>
  )
}

export default GardenerDetails
