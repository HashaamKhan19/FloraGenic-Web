import {
  createStyles,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  Stack,
  Box,
} from '@mantine/core'
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons'
import { FiHeart } from 'react-icons/fi'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { TbShoppingCartPlus } from 'react-icons/tb'

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
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
    <Card
      withBorder
      p="lg"
      radius="md"
      sx={{
        maxHeight: 500,
      }}
    >
      <Card.Section mb="sm">
        <Image
          src={
            'https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYW50JTIwcG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }
          alt="productImage"
          height={180}
        />
      </Card.Section>

      <Badge color="cyan">Decorations</Badge>

      <Text weight={650} className={classes.title} mt="xs">
        Sunflower Plant
      </Text>

      <Group mt="lg" noWrap>
        <Box
          style={{
            maxHeight: 50,
            maxWidth: 50,
          }}
        >
          <Avatar
            src={
              'https://images.unsplash.com/photo-1508857650881-64475119d798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bnVyc2VyeSUyMHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            }
            radius="sm"
          />
        </Box>
        <Stack spacing={0}>
          <Group
            style={{
              maxWidth: 200,
            }}
          >
            <Text weight={500} truncate>
              Fazal Khan Nursery
            </Text>
          </Group>
          <Group
            style={{
              maxWidth: 200,
            }}
          >
            <Text size="xs" color="dimmed" truncate>
              We Sell the best plants at the best prices
            </Text>
          </Group>
        </Stack>
      </Group>

      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Text size="xs" color="dimmed">
            733 people bought this
          </Text>
          <Group spacing={'xs'}>
            <ActionIcon color="red" variant="subtle">
              <FiHeart size={18} />
            </ActionIcon>
            <ActionIcon color="blue" variant="subtle">
              <MdOutlineAddShoppingCart size={16} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  )
}
