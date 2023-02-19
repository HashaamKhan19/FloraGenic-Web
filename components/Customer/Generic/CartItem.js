import { useState, useRef } from 'react'
import {
  NumberInput,
  Group,
  ActionIcon,
  Text,
  Stack,
  Box,
  Paper,
  Divider,
  CloseButton,
} from '@mantine/core'
import Image from 'next/image'
import { FiMinus, FiPlus } from 'react-icons/fi'

export default function CartItem() {
  const [value, setValue] = useState(1)

  const increase = () => {
    setValue((val) => val + 1)
  }

  const decrease = () => {
    if (value === 0) return
    setValue((val) => val - 1)
  }

  return (
    <>
      <Paper py={'sm'}>
        <Group spacing={'lg'}>
          <Stack spacing={0}>
            <ActionIcon
              size={30}
              variant="default"
              style={{
                borderRadius: '50%',
                borderColor: '#62A82C',
                color: '#62A82C',
              }}
              onClick={increase}
            >
              <FiPlus />
            </ActionIcon>
            <Text align="center">{value}</Text>
            <ActionIcon
              size={30}
              variant="default"
              style={{
                borderRadius: '50%',
              }}
              onClick={decrease}
              disabled={value === 1}
            >
              <FiMinus />
            </ActionIcon>
          </Stack>
          <Image
            src={
              'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
            }
            alt="ProdImage"
            width={70}
            height={70}
          />
          <Stack spacing={1}>
            <Text size="md" weight={500}>
              Ovary Blossom
            </Text>
            <Text size="xs" weight={300}>
              Plants
            </Text>
            <Text
              size="md"
              weight={500}
              style={{
                color: '#C70039',
              }}
            >
              Rs. 100
            </Text>
          </Stack>
          <CloseButton ml={'lg'} size={'lg'} />
        </Group>
      </Paper>
      <Divider my={'sm'} />
    </>
  )
}
