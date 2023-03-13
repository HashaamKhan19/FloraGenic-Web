import { Badge, Chip, Group, Stack, Text } from '@mantine/core'
import React, { useState } from 'react'
import { FiHash } from 'react-icons/fi'

const ProductDescription = ({ data }) => {
  console.log('====================================')
  console.log(data)
  console.log('====================================')

  return (
    <>
      <Stack mt={'lg'} spacing={0}>
        <Text
          style={{
            color: 'darkslategray',
          }}
        >
          {data?.name || 'Product Name'}
        </Text>
        <Text
          style={{
            color: 'darkslategray',
          }}
          mt={'xs'}
        >
          {data?.description || 'Product Description'}
        </Text>

        <Text
          style={{
            color: 'darkslategray',
          }}
          mt={'xs'}
        >
          Posted on:{' '}
          {new Date(data?.createdAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </Text>

        <Text
          style={{
            color: 'darkslategray',
          }}
          mt={'xs'}
        >
          Seller: {data?.nursery?.name || 'Nursery Name'}
        </Text>

        <Text
          style={{
            color: 'darkslategray',
          }}
          mt={'xs'}
        >
          Nursery Email: {data?.nursery?.email || 'Nursery Email'}
        </Text>

        <Text
          style={{
            color: 'darkslategray',
          }}
          mt={'xs'}
        >
          Nursery Phone: {data?.nursery?.phoneNumber || 'Nursery Phone'}
        </Text>

        <Text
          style={{
            color: 'darkslategray',
          }}
          mt={'xs'}
        >
          Nursery Address: {data?.nursery?.address || 'Nursery Address'}
        </Text>

        <Text
          style={{
            color: 'darkslategray',
          }}
          mt={'xs'}
        >
          Nursery Opening Hours:{' '}
          {new Date(data?.nursery?.openingHours).toLocaleTimeString('en-US')}
        </Text>

        <Text
          style={{
            color: 'darkslategray',
          }}
          mt={'xs'}
        >
          Nursery Closing Hours:{' '}
          {new Date(data?.nursery?.closingHours).toLocaleTimeString('en-US')}
        </Text>

        <Group spacing={'xs'} mt={'xs'}>
          <Text
            style={{
              color: 'darkslategray',
            }}
          >
            Tags:
          </Text>
          {data?.tags?.map((tag, index) => (
            <Badge
              variant="light"
              key={index}
              pl={3}
              // leftSection={<FiHash size={12} />}
              color="green"
            >
              {tag}
            </Badge>
          ))}
        </Group>
      </Stack>
    </>
  )
}

export default ProductDescription
