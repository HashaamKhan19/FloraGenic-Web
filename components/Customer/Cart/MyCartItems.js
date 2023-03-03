import {
  ActionIcon,
  Box,
  CloseButton,
  Container,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from '@mantine/core'
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const MyCartItems = () => {
  const items = [
    {
      id: 1,
      name: 'Item 1',
      price: 10,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Item 2',
      price: 20,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      name: 'Item 3',
      price: 20,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ]

  return (
    <Container py={'xl'}>
      {items.map((item) => {
        return (
          <Paper
            key={item.id}
            my={'xl'}
            py={'xl'}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
            }}
            radius={'md'}
            shadow="sm"
          >
            <CloseButton
              style={{ position: 'absolute', top: 10, right: 10 }}
              size={'md'}
            />
            <Group noWrap pl={'xl'}>
              <Image src={item.image} height={100} width={100} radius={'sm'} />
              <Stack spacing={'xs'} pl={'xs'}>
                <Text
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    color: 'darkslategray',
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'grey',
                  }}
                >
                  Rs. {item.price}
                </Text>

                <Group noWrap>
                  <ActionIcon variant="outline">
                    <AiOutlineMinus />
                  </ActionIcon>

                  <Text>{item.quantity}</Text>

                  <ActionIcon variant="outline">
                    <AiOutlinePlus />
                  </ActionIcon>
                </Group>
              </Stack>
            </Group>
          </Paper>
        )
      })}
    </Container>
  )
}

export default MyCartItems
