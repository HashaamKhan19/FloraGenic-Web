import {
  Container,
  Group,
  Image,
  Paper,
  Rating,
  Stack,
  Text,
  createStyles,
} from '@mantine/core'
import { GiStarsStack } from 'react-icons/gi'

const useStyles = createStyles((theme) => ({
  item: {
    borderRadius: theme.radius.md,
    transition: 'box-shadow 150ms ease, transform 300ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.01)',
      transition: 'box-shadow 700ms ease , transform 700ms ease-out',
    },
  },
}))

export default function TopRatedProducts() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      image:
        'https://images.unsplash.com/photo-1609061801093-1b7a8a574c69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbnQlMjBwb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60',
      rating: 4.5,
    },
    {
      id: 1,
      name: 'Product 1',
      image:
        'https://images.unsplash.com/photo-1528475563668-e15742001b92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnQlMjBwb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60',
      rating: 4.5,
    },
    {
      id: 1,
      name: 'Product 1',
      image:
        'https://images.unsplash.com/photo-1623752862599-0cd2b003a26f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBsYW50JTIwcG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
      rating: 4.5,
    },
  ]

  const { classes, theme } = useStyles()

  return (
    <>
      <Paper radius={'md'}>
        <Group spacing={'xl'} p={'md'}>
          {products.map((product) => (
            <Stack
              key={product.id}
              spacing={0}
              className={classes.item}
              p={'xs'}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={140}
                height={120}
                radius={'md'}
              />
              <Stack spacing={0} mt={'xs'} align="center">
                <Rating value={product.rating} readOnly />
                <Text
                  style={{
                    fontSize: '16px',
                    color: 'darkslategray',
                    fontWeight: 500,
                  }}
                >
                  {product.name}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Group>
      </Paper>
    </>
  )
}
