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
import { FiHeart } from 'react-icons/fi'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 18,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.xs,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}))

export default function ProductCard({ heart }) {
  const { classes, theme } = useStyles()

  return (
    <Card
      withBorder
      p="lg"
      radius="md"
      sx={{
        maxHeight: 400,
      }}
    >
      <Card.Section mb="sm">
        <Image
          src={
            'https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYW50JTIwcG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }
          alt="productImage"
          height={190}
          style={{
            position: 'relative',
          }}
        />
        <Badge
          color="green"
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          Decorations
        </Badge>
      </Card.Section>

      <Text weight={600} className={classes.title} mt="xs">
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
            <Text
              weight={500}
              style={{
                color: 'darkslategrey',
              }}
              truncate
            >
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

      <Text
        color="red"
        weight={600}
        mb={0}
        mt={'xs'}
        style={{
          fontSize: 20,
        }}
      >
        Rs. 10000
      </Text>

      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Text size="xs" color="dimmed">
            733 people bought this
          </Text>
          <Group spacing={'xs'}>
            {!heart && (
              <ActionIcon
                color="red"
                variant="subtle"
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }}
              >
                <FiHeart size={18} />
              </ActionIcon>
            )}
            <ActionIcon
              color="blue"
              variant="subtle"
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
              }}
            >
              <MdOutlineAddShoppingCart size={16} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  )
}
