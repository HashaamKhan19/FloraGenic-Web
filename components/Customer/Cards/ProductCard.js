import {
  createStyles,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  Rating,
} from '@mantine/core'
import { AiOutlineHeart } from 'react-icons/ai'
import { TbShoppingCartPlus } from 'react-icons/tb'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4]
    }`,
    width: 310,
    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.01)',
      transition: 'box-shadow 700ms ease , transform 700ms ease-out',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  ratings: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}))

export default function ProductCard() {
  const { classes, theme } = useStyles()

  return (
    <Card withBorder p="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image
          src={
            'https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
          }
          alt={'Image'}
          height={180}
        />
      </Card.Section>

      <Badge>Decorations</Badge>

      <Text weight={700} className={classes.title} mt="xs">
        Oliver Buzz Plant
      </Text>

      <Group mt="lg">
        <Text weight={500}>Hashaam Nursery</Text>
        <Text size="xs" color="dimmed">
          - seller
        </Text>
      </Group>

      <Text weight={600} color="red">
        Rs. 1000
      </Text>

      <Card.Section className={classes.ratings}>
        <Group position="apart">
          <Text size="xs" color="dimmed">
            <Rating value={4} size="xs" readOnly />
          </Text>
          <Group spacing={0}>
            <ActionIcon>
              <AiOutlineHeart
                size={18}
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon>
              <TbShoppingCartPlus size={18} color={theme.colors.blue[6]} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  )
}
