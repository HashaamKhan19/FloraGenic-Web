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
import { GiSeedling, GiStarsStack } from 'react-icons/gi'

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

export default function TopRatedNurseries() {
  const nurseries = [
    {
      id: 1,
      name: 'Nursery 1',
      ratings: 4.5,
      image:
        'https://images.unsplash.com/photo-1611843467160-25afb8df1074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 1,
      name: 'Nursery 1',
      ratings: 4.5,
      image:
        'https://images.unsplash.com/photo-1593412369977-d3b53ca6b53a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 1,
      name: 'Nursery 1',
      ratings: 4.5,
      image:
        'https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ]

  const { classes, theme } = useStyles()

  return (
    <>
      <Paper radius={'md'}>
        <Group spacing={'xl'} p={'md'}>
          {nurseries.map((nursery) => (
            <Stack
              key={nursery.id}
              spacing={0}
              className={classes.item}
              p={'xs'}
            >
              <Image
                src={nursery.image}
                alt={nursery.name}
                width={188}
                height={120}
                radius={'md'}
              />
              <Stack spacing={0} mt={'xs'} align="center">
                <Rating value={nursery.ratings} readOnly />
                <Text
                  style={{
                    fontSize: '16px',
                    color: 'darkslategray',
                    fontWeight: 500,
                  }}
                >
                  {nursery.name}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Group>
      </Paper>
    </>
  )
}
