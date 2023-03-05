import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Box,
  Group,
  Pagination,
  Paper,
  ScrollArea,
  Space,
  Table,
  Text,
  createStyles,
} from '@mantine/core'
import React from 'react'
import { BsArrowRight, BsBagCheckFill } from 'react-icons/bs'

const Orders = () => {
  const data = [
    {
      id: 1,
      orderNumber: 'f0ba5b8c',
      status: 'Pending',
      dataPurcahsed: 'Nov 12, 2022',
      total: 'Rs. 10000',
    },
    {
      id: 2,
      orderNumber: 'f0ba5b8c',
      status: 'Pending',
      dataPurcahsed: 'Nov 12, 2022',
      total: 'Rs. 10000',
    },
    {
      id: 3,
      orderNumber: 'f0ba5b8c',
      status: 'Delivered',
      dataPurcahsed: 'Nov 12, 2022',
      total: 'Rs. 10000',
    },
    {
      id: 4,
      orderNumber: 'f0ba5b8c',
      status: 'Cancelled',
      dataPurcahsed: 'Nov 12, 2022',
      total: 'Rs. 10000',
    },
  ]

  const rows = data.map((item) => (
    <tr key={item.id}>
      <td>
        <Text
          style={{
            fontWeight: 600,
            color: 'darkslategray',
          }}
        >
          {item.orderNumber}
        </Text>
      </td>

      <td>
        <Badge
          color={
            item.status === 'Pending'
              ? 'cyan'
              : item.status === 'Delivered'
              ? 'green'
              : item.status === 'Cancelled'
              ? 'red'
              : 'blue'
          }
          variant={'light'}
        >
          {item.status}
        </Badge>
      </td>
      <td>
        <Text
          style={{
            fontWeight: 500,
            color: 'darkslategray',
          }}
        >
          {item.dataPurcahsed}
        </Text>
      </td>
      <td>
        <Text
          style={{
            fontWeight: 500,
            color: 'darkslategray',
          }}
        >
          {item.total}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <BsArrowRight size={20} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ))

  return (
    <>
      <Group spacing={'xs'}>
        <BsBagCheckFill size={22} color="#62A82C" />
        <Text
          style={{
            fontWeight: 500,
            fontSize: '24px',
            color: 'darkslategray',
          }}
        >
          My Orders
        </Text>
      </Group>

      <Space h="xs" />

      <ScrollArea>
        <Table
          sx={{ minWidth: 800 }}
          mt={'sm'}
          verticalSpacing="sm"
          highlightOnHover
        >
          <thead>
            <tr>
              <th
                style={{
                  fontWeight: 500,
                  fontSize: '16px',
                  color: 'gray',
                }}
              >
                Order #
              </th>
              <th
                style={{
                  fontWeight: 500,
                  fontSize: '16px',
                  color: 'gray',
                }}
              >
                Status
              </th>
              <th
                style={{
                  fontWeight: 500,
                  fontSize: '16px',
                  color: 'gray',
                }}
              >
                Date Purchased
              </th>
              <th
                style={{
                  fontWeight: 500,
                  fontSize: '16px',
                  color: 'gray',
                }}
              >
                Total
              </th>
              <th />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
      <Pagination
        total={3}
        withEdges
        pt={'xl'}
        position="right"
        radius={50}
        styles={() => ({
          item: {
            '&[data-active]': {
              backgroundColor: '#62A82C',
            },
          },
        })}
      />
    </>
  )
}

export default Orders
