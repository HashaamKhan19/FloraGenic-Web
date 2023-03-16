import { Card, Group, Paper, Skeleton } from '@mantine/core'
import React from 'react'

const NurseryCarouselLoader = () => {
  return (
    <Card
      radius={'md'}
      sx={{
        borderRadius: '0.5rem',
        ':hover': {
          boxShadow: '0 5px 12px #0003',
        },
        boxShadow: '0 2px 8px #00000026',
        transition: 'box-shadow .2s',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease',
        transitionDelay: '0s',
        transitionProperty: 'box-shadow',
      }}
      style={{ width: '300px', minHeight: '170px' }}
    >
      <Card.Section style={{ height: '154px' }}>
        <Paper p={'lg'}>
          <Skeleton height={16} width="50%" radius="xl" mb="sm" />

          <Group spacing={3} noWrap>
            <Skeleton height={15} mt={4} radius="xl" width="40%" />
          </Group>

          <Group noWrap spacing={'lg'} align={'center'} pt={10} mb="sm">
            <Skeleton height={14} mt={4} radius="xl" width="10%" />
            <Skeleton height={14} mt={4} radius="xl" width="40%" />

            <Skeleton height={14} mt={4} radius="xl" width="50%" />
          </Group>

          <Group noWrap align={'center'} spacing={3}>
            <Skeleton height={14} mt={4} radius="xl" width="10%" />
            <Skeleton height={14} mt={4} radius="xl" width="50%" />
          </Group>

          <Group noWrap position="right" pt={30}>
            <Skeleton height={14} mt={4} radius="xl" width="10%" />
          </Group>
        </Paper>
      </Card.Section>
    </Card>
  )
}

export default NurseryCarouselLoader
